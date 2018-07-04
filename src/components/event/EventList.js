import React from "react";
import groupBy from 'lodash/groupBy'
import { StyleSheet, Text, ScrollView, FlatList, SectionList, TouchableOpacity } from "react-native";
import EventCard from "./EventCard";
import {eventList} from '../../fixtures';

export default class EventList extends React.Component {
  render() {
    const {onEventPress, events} = this.props;
    const grouped = groupBy(eventList, event => event.where);
    const sections = Object.entries(grouped).map(([letter,list]) => ({
      title: `${letter} - ${list.length} events`,
      data: list.map(event => ({key: event.uid, event}))
    }));
    // console.log(sections);
    return (
      <SectionList
        sections = {sections}
        renderSectionHeader = {({section: {title}}) => <Text style = {styles.header}>{title}</Text>}
        renderItem = {({item, index, section}) => 
        <TouchableOpacity onPress={onEventPress.bind(null, item.key)}>
          <EventCard key = {item.key} event = {item.event} />
        </TouchableOpacity>}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#dddaaa',
    height: 30,
    fontSize: 24,
    fontWeight: 'bold'
  }
});