import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {MapView} from 'expo';

export default class EventMapScreen extends React.Component {
  static navigationOptions = {
    title: 'MAP'
  }

  render() {
    return (
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});