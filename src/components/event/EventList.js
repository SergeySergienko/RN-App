import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import EventCard from "./EventCard";
import {eventList} from '../../fixtures';

export default class EventList extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {eventList.map(event => <EventCard key = {event.uid} event = {event} />)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});