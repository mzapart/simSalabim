import React from "react";
import { Text, View, Button, Item } from "react-native";
import firebase from "../../firebase.js";
import { Input, Label } from "react-native-elements";

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
        <Text>Email</Text>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={email => this.setState({ email })}
        />

        <Text>Password</Text>
        <Input
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={password => this.setState({ password })}
        />
        <Button
          title="SignUp!"
          onPress={() => this.SignUp(this.state.email, this.state.password)}
        />
      </View>
    );
  }
}

export default SignUp;
