import React, {Component} from 'react';
import SignIn from './components/auth/SignIn';
import Event from './components/event/Event'
import {View, Text} from 'react-native';

class Root extends Component {
  render() {
    return(
      <View>
        <Event />
      </View>
    )
  }
}

export default Root;