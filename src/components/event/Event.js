import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {eventList} from '../../fixtures';
import ConfirmModal from '../common/ConfirmModal'

export default class Event extends React.Component {
  // static defaultProps = {
  //   event: eventList[2]
  // }
  state = {
    confirmModal: false
  };
  
  render() {
    const {uid} = this.props;
    const event = eventList[uid];
    // const list = eventList.map(event => 
      
    return (
      <View>
        <Text style = {styles.title}>{event.title}</Text>
        <View style = {styles.description}>
          <Text>{event.when}</Text>
          <Text>{event.where}</Text>
        </View>
        <Text style={{marginBottom: 40}}>{event.url}</Text>
        <View style = {styles.button}>
          <Button onPress = {this.handleDelete}
                  title = 'Delete'
                  color = 'red'
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
  
 handleDelete = () => this.setState({confirmModal: true});
 confirmDelete = () => this.setState({confirmModal: false});
 cancelDelete = () => this.setState({confirmModal: false});
}



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