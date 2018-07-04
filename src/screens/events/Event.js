import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Event from '../../components/event/Event';

export default class EventScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: `Событие id: ${navigation.state.params.uid}`
  })
  
  render() {
    const {uid} = this.props.navigation.state.params;
    return <Event uid = {uid}/>
  }
}

const styles = StyleSheet.create({
  
});