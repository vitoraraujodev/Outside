import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import MenuButton from '~/components/MenuButton';
import Footer from '~/components/Footer';
import Modal from '~/components/Modal';

import { Container, Title } from './styles';

import { googleMapStyle } from '~/util/googleMapStyle';

import api from '~/services/api';

export default function Map({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [currentKind, setCurrentKind] = useState('n');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState({});

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

  return (
    <>
      <Modal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        attraction={selectedAttraction}
      />

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
            onPress={() => {
              setSelectedAttraction(attraction);
              setModalVisible(true);
            }}
          >
            <Container>
              <Title>{attraction.title}</Title>
              <Icon name="location-on" size={50} color="#bb3333" />
            </Container>
          </Marker>
        ))}
      </MapView>
      <MenuButton navigation={navigation} />
      <Footer currentKind={currentKind} onKindChange={handleKindChange} />
    </>
  );
}
