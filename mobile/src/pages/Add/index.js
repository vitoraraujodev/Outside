import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import MenuButton from '~/components/MenuButton';

import { googleMapStyle } from '~/util/googleMapStyle';

import api from '~/services/api';

export default function Map({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  let mapView = null;

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  async function handleRegionChanged(region) {
    const topLatitude = region.latitude + region.latitudeDelta / 2;
    const bottomLatitude = region.latitude - region.latitudeDelta / 2;
    const leftLongitude = region.longitude + region.longitudeDelta / 2;
    const rightLongitude = region.longitude - region.longitudeDelta / 2;

    const response = await api.get('/attractions', {
      params: {
        topLatitude,
        bottomLatitude,
        leftLongitude,
        rightLongitude,
        kind: currentKind,
      },
    });
    setCurrentRegion(region);
    setAttractions(response.data);
  }

  return (
    <>
      <MapView
        initialRegion={currentRegion}
        ref={map => (mapView = map)} //eslint-disable-line
        showsUserLocation
        pitchEnabled={false}
        style={{ flex: 1 }}
        showsCompass={false}
        showsMyLocationButton={false}
        provider={MapView.PROVIDER_GOOGLE}
        customMapStyle={googleMapStyle}
        onRegionChangeComplete={handleRegionChanged}
      />
      <MenuButton navigation={navigation} />
    </>
  );
}
