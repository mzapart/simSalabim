import React from "react";
import { Text, View, Button } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Input
} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from "../../firebase.js";

class SignInWithEmail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null
    };
  }

  onLogin = () => {
    const { email, password } = this.state;

    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged(user => {
        alert(user.email);
      });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <View>
        <Text>Logout logged uer ca seeit</Text>

        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          onChangeText={email => this.setState({ email })}
        />

        <Input
          placeholder="INPUT WITH CUSTOM ICON"
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChangeText={pasword => this.setState({ password })}
        />

        <Button title="Sign In With Email" onPress={this.onLogin} />
      </View>
    );
  }
}
export default SignInWithEmail;
