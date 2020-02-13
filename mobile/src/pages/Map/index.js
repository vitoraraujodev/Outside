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
    console.tron.log(region);
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
              mapView.animateToRegion(
                {
                  longitudeDelta: 0.04,
                  latitudeDelta: 0.07,
                  longitude: attraction.location.coordinates[0],
                  latitude: attraction.location.coordinates[1] + 0.02,
                },
                400
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

const googleMapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#523735',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ba9567',
      },
      {
        weight: 1.5,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ae9e90',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c',
      },
    ],
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#447530',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fdfcf8',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8c967',
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        weight: 1,
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e98d58',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#db8555',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#806b63',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8f7d77',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b9d3c2',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d',
      },
    ],
  },
];
