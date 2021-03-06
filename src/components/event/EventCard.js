import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../common/Card";

export default class EventCard extends React.Component {
  render() {
    const {event, key} = this.props;
    // console.log(event);
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{event.title}</Text>
        <Card style={styles.card}>
        <Image source = {require('/assets/images/manicure.jpg')}
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
    width: "99%",
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
  description: {
    // flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40
  },
  image: {
    width: 80,
    height: 50
  }
});