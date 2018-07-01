import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Card extends React.Component {
  render() {
    const {children, style} = this.props;
    return (
      <View style={[styles.container, style]}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});