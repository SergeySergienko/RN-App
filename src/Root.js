import React, {Component} from 'react';
import SignIn from './components/auth/SignIn';
import EventList from './components/event/EventList'
import {View, Text} from 'react-native';

class Root extends Component {
  render() {
    return(
      <View>
        <EventList />
      </View>
    )
  }
}

export default Root;