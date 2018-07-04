import React, {Component} from 'react';
import SignIn from './components/auth/SignIn';
import EventList from './components/event/EventList';
import Event from './components/event/Event';
import {StyleSheet, View, Text} from 'react-native';

class Root extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <EventList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%'
  }
})

export default Root;