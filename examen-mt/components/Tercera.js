import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

export default class Mapa extends React.Component{


  render() {
    return (
      <View style={styles.container}>
      <MapView style={styles.mapa} 
      initialRegion={{
        latitude: 19.4007,
        longitude: -99.1573 ,
        latitudeDelta: .3,
        longitudeDelta: .3
      }}>
      <MapView.Marker
        coordinate={{
          latitude: 19.5007,
          longitude: -99.1573
        }}
        title = 'Sucursal 1'
        
      >
      </MapView.Marker>
      <MapView.Marker
        coordinate={{
          latitude: 19.4037,
          longitude: -99.1539
        }}
        title = 'Sucursal 2'
        
      >
      </MapView.Marker>
      <MapView.Marker
        coordinate={{
          latitude:  19.3037,
          longitude: -99.1573
        }}
        title = 'Sucursal 3'
        
      >
      </MapView.Marker>
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
