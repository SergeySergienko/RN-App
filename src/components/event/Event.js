import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {eventList} from '../../fixtures';

export default class Event extends React.Component {
  static defaultProps = {
    event: eventList[1]
  }

  render() {
    const {event} = this.props;
    console.log(event);
    return (
      <View>
        <Text style = {styles.title}>{event.title}</Text>
        <Text>{event.when}</Text>
        <Text>{event.where}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 20
  }
});