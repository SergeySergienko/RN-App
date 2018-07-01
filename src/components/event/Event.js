import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {eventList} from '../../fixtures';

export default class Event extends React.Component {
  static defaultProps = {
    events: eventList
  }
  
  render() {
    const {events} = this.props;
    // console.log(event);
    const list = eventList.map(event => 
      <View>
        <Text style = {styles.title}>{event.title}</Text>
        <View style = {styles.description}>
          <Text>{event.when}</Text>
          <Text>{event.where}</Text>
        </View>
        <Text>{event.url}</Text>
      </View>);
    return (
      <View>
      {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40
  }
});