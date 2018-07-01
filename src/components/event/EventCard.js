import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../common/Card";

export default class EventCard extends React.Component {
  render() {
    const {event} = this.props;
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{event.title}</Text>
        <Card style={styles.card}>
        <Image source = {{uri: "http://lorempixel.com/100/50/fashion"}}
               style = {styles.image}
        />
          <View style = {styles.description}>
            <Text>{event.when}</Text>
            <Text>{event.where}</Text>
            <Text>{event.url}</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#eee",
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20
  },
  // description: {
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   marginBottom: 40
  // },
  image: {
    width: 80,
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 5
  }
});