import React, {Component} from 'react';
import SignIn from './components/auth/SignIn';
import {View, Text} from 'react-native';

class Root extends Component {
  render() {
    return(
      <View>
        <SignIn />
      </View>
    )
  }
}

export default Root;