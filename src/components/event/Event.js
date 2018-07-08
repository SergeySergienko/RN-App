import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import {eventList} from '../../fixtures';
import ConfirmModal from '../common/ConfirmModal';
import {observer} from 'mobx-react';
import {web} from 'react-native-communications';

const Event = observer(class Event extends React.Component {

  state = {
    confirmModal: false
  };
  
  render() {
    const event = eventList[this.props.uid];

    return (
      <View>
        <Text style = {styles.title}>{event.title}</Text>
        <View style = {styles.description}>
          <Text>{event.when}</Text>
          <Text>{event.where}</Text>
        </View>
        <TouchableOpacity onPress = {this.goToUrl}>
          <Text style={{marginBottom: 40}}>{event.url}</Text>
        </TouchableOpacity>
        <Text>{this.state.uid}</Text>
        <View style = {styles.button}>
          <Button onPress = {this.handleDelete}
                  title = 'Delete'
                  color = 'red'
          />
          <Button onPress = {this.goToMap}
                  title = 'Map'
                  color = 'blue' 
          />
        </View>
        <ConfirmModal visible = {this.state.confirmModal}
          onConfirm = {this.confirmDelete}
          onCancel = {this.cancelDelete}
        >Are you sure for delete "{event.title}"?
        </ConfirmModal>
      </View>
    );
  }
  
 goToUrl = () => web(eventList[this.props.uid].url);
 goToMap = () => this.props.navigation.navigate('eventMap');
 handleDelete = () => this.setState({confirmModal: true});
 confirmDelete = () => this.setState({confirmModal: false});
 cancelDelete = () => this.setState({confirmModal: false});
});



const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 40
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20
  }
});

export default Event;