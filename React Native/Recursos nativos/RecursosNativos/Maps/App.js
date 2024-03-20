import { ActivityIndicator, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import '../../RecursosNativos/Maps/assets/image/8dbdc-raposo-removebg-preview.png'

import {
  requestForegroundPermissionsAsync, // solicita a permissao de localizacao
  getCurrentPositionAsync, // captura localizaçao atual
  watchPositionAsync, //captura em tempos a localizacao
  LocationAccuracy //precisao da localizacao
} from 'expo-location';

import { useEffect, useRef, useState } from 'react';

import { Text } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { mapskey } from './Utils/MapsKey'; //key api google


// mapviewdirections = direca de um ponto ao outro
// expo location = capturar localizacao
// react native maps = criar o mapa

export default function App() {

  // const icon = require('./assets/images/8dbdc-raposo-removebg-preview.png')


  const mapReference = useRef(null)
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.5928,
    longitude: -46.5599,
  })


  async function CapturarLoc() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();

      await setInitialPosition(currentPosition);

      console.log(initialPosition);
    }
  }


  async function RecarregarVisualizarMapa() {

    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
          { latitude: finalPosition.latitude, longitude: finalPosition.longitude },
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        }
      )

      console.log(mapReference.current)
    }
  }

  useEffect(() => {

    CapturarLoc();

    //Capturar localizacao
    watchPositionAsync({
      accuracy: LocationAccuracy.High,
      timeInterval: 1000,
      distanceInterval: 1
    }, async (response) => {
      await setInitialPosition(response)    //atualizando o mapa
      mapReference.current?.animateCamera({
        pitch: 60,
        center: response.coords
      })
    })

  }, [10000]);

  useEffect(() => {

    RecarregarVisualizarMapa();

  }, [initialPosition]);



  return (
    <View style={styles.container}>
      {initialPosition != null
        ? (
          <MapView
            ref={mapReference}
            initialRegion={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={grayMapStyle} //passando o elemento de estilizacao customizado do mapa  na propriedade "customMapStyle"
          >
            {/* Criando um marcador no mapa */}
            <Marker
              coordinate={{
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
              }}
              // image={}
              title='Exemplo de local'
              description='Area 51, os alienígenas existem!'
            />

            <MapViewDirections
              origin={initialPosition.coords}
              destination={{
                latitude: finalPosition.latitude,
                longitude: finalPosition.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
              }}
              apikey={mapskey}

              strokeWidth={5}
              strokeColor='#e300fa'
            />

            <Marker
              coordinate={{
                latitude: finalPosition.latitude,
                longitude: finalPosition.longitude
              }}
              title='Destino'
              description='Destino do bglh'
            // image={icon}
            />

          </MapView>
        ) : (
          <>
            <Text>Localização não encontrada</Text>

            <ActivityIndicator />
          </>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: "100%",
  },

});


const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];