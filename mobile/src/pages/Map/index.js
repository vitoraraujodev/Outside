import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import MenuButton from '~/components/MenuButton';
import Footer from '~/components/Footer';
import Callout from '~/components/Callout';

import { googleMapStyle } from '~/util/googleMapStyle';

import api from '~/services/api';

export default function Map({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [currentKind, setCurrentKind] = useState('n');
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

  if (!currentRegion) {
    return null;
  }

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

  async function handleKindChange(kind) {
    const topLatitude =
      currentRegion.latitude + currentRegion.latitudeDelta / 2;
    const bottomLatitude =
      currentRegion.latitude - currentRegion.latitudeDelta / 2;
    const leftLongitude =
      currentRegion.longitude + currentRegion.longitudeDelta / 2;
    const rightLongitude =
      currentRegion.longitude - currentRegion.longitudeDelta / 2;

    const response = await api.get('/attractions', {
      params: {
        topLatitude,
        bottomLatitude,
        leftLongitude,
        rightLongitude,
        kind,
      },
    });

    setAttractions(response.data);
    setCurrentKind(kind);
  }

  function animateToMarker(latitude, longitude) {
    mapView.animateToRegion(
      {
        longitudeDelta: 0.04,
        latitudeDelta: 0.07,
        longitude,
        latitude: latitude + 0.02,
      },
      400
    );
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
        moveOnMarkerPress={false}
        showsMyLocationButton={false}
        provider={MapView.PROVIDER_GOOGLE}
        customMapStyle={googleMapStyle}
        onRegionChangeComplete={handleRegionChanged}
      >
        {attractions.map(attraction => (
          <Marker
            key={attraction._id}
            coordinate={{
              latitude: attraction.location.coordinates[1],
              longitude: attraction.location.coordinates[0],
            }}
            onPress={() =>
              animateToMarker(
                attraction.location.coordinates[1],
                attraction.location.coordinates[0]
              )
            }
          >
            <Icon name="location-on" size={50} color="#bb3333" />
            <Callout attraction={attraction} />
          </Marker>
        ))}
      </MapView>
      <MenuButton navigation={navigation} />
      <Footer currentKind={currentKind} onKindChange={handleKindChange} />
    </>
  );
}
