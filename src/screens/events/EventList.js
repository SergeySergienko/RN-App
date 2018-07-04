import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EventList from '../../components/event/EventList';

export default class EventListScreen extends React.Component {

  static navigationOptions = {
    title: 'Список событий'
  }

  render() {
    return <EventList />
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});