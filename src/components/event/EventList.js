import React from "react";
import groupBy from 'lodash/groupBy'
import { StyleSheet, Text, ScrollView, FlatList, SectionList } from "react-native";
import EventCard from "./EventCard";
import {eventList} from '../../fixtures';

export default class EventList extends React.Component {
  render() {
    const grouped = groupBy(eventList, event => event.title.charAt(0));
    const sections = Object.entries(grouped).map(([letter,list]) => ({
      title: `${letter} ${list.length} events`,
      data: list.map(event => ({key: event.uid, event}))
    }))
    return (
      <SectionList style={styles.container}>
        sections = {sections}
        renderSectionHeader = {({section}) => <Text style = {styles.header}>{section.title}</Text>}
        renderItem = {({item}) => <EventCard event = {item.event} />}
      </SectionList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  header: {
    backgroundColor: '#f0f0f0',
    height: 40,
    lineHeigth: 40
  }
});