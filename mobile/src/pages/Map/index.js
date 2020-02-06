import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { View, Text } from 'react-native';

export default function Map() {
  const [currentRegion, setCurrentRegion] = useState(null);

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

  return (
    <MapView
      initialRegion={currentRegion}
      showsUserLocation
      pitchEnabled={false}
      style={{ flex: 1 }}
    >
      <Marker coordinate={{ latitude: -22.9906595, longitude: -43.1953568 }}>
        <Callout
          onPress={() => {
            // navegação
          }}
        >
          <View>
            <Text>Vitor Araujo</Text>
            <Text>CTO do maior App do mundo</Text>
            <Text>ReactJS, React Native, Node.js</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}
