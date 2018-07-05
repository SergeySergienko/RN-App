import React from "react";
import Root from "./src/Root";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from './src/AppNavigator';

export default class App extends React.Component {
  render() {
    return <AppNavigator style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center"
  }
});
