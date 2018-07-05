import React from "react";
import {observer} from 'mobx-react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import userStore from '../../stores/userStore';

const SignIn = observer(class SignIn extends React.Component {
  // state = {
  //   email: "",
  //   password: ""
  // };
  render() {
    // const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Please Sign In</Text>
        <Text>Email:</Text>
        <TextInput 
          style={styles.textInput}
          value={userStore.email}
          onChangeText={email => userStore.email = email}
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.textInput}
          value={userStore.password}
          onChangeText={password => userStore.password = password}
          secureTextEntry
        />
        <TouchableOpacity onPress={this.signIn} style={styles.button}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  signIn = () => console.log('Sign In');
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 40
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    width: 150
  },
  button: {
    backgroundColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 25,
    margin: 50,
    width: 150
  }
});

export default SignIn;
