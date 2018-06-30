import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    const { email, password } = this.state;
    return (
      <View>
        <Text style={styles.header}>Please Sign In</Text>
        <Text>Email:</Text>
        <TextInput
          value={email}
          onChangeText={email => this.setState({ email })}
        />
        <Text>Password:</Text>
        <TextInput
          value={password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />
        <TouchableOpacity onPress={this.signIn} style={styles.button}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  signIn = () => console.log('Sign In');
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 40
  },
  button: {
    backgroundColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5
  }
});

export default SignIn;
