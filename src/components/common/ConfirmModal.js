import React from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";

export default class ConfirmModal extends React.Component {
  render() {
    const {visible, onConfirm, onCancel, children} = this.props;
    return (
      <Modal visible={visible} animationType="fade" transparent>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>{children}</Text>
            <View style={styles.buttons}>
              <Button title="Ok" onPress={onConfirm} />
              <Button title="Cancel" onPress={onCancel} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxWidth: "90%",
    backgroundColor: "#eee",
    padding: 5,
    marginTop: 30,
    minHeight: 150
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  text: {
    margin: 20
  }
});