import React from "react";
import { Text, View, Button, Item } from "react-native";
import firebase from "../../firebase.js";
import { TextInput } from "react-native-gesture-handler";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  SignUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <View>
        <Text style = {{borderBottomWidth: 2, borderBottomColor:'grey'}}>Email:</Text>
        <TextInput
          autoCapitalize="none"
          style={{height: 40}}
          autoCorrect={false}
          onChangeText={email => this.setState({ email })}
        />

        <Text style = {{borderBottomWidth: 2, borderBottomColor:'grey'}}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={{height: 40}}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={password => this.setState({ password })}
        />
        <Button
           onPress={() => this.SignUp(this.state.email, this.state.password)}
          title="Sing Up"
          color="#f57c00"
          accessibilityLabel="SignUp data submit button"
        />
      </View>
    );
  }
}

export default SignUp;