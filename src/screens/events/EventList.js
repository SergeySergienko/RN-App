import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EventList from '../../components/event/EventList';

export default class EventListScreen extends React.Component {

  static navigationOptions = {
    title: 'Список событий'
  }

  render() {
    return <EventList onEventPress={this.handleEventPress}/>
  }
  
  handleEventPress = (uid) => this.props.navigation.navigate('event', {uid});
}

const styles = StyleSheet.create({
  
});