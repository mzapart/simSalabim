//logged out users only!
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


        <Input
          placeholder="  E-mail"
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChangeText={email => this.setState({ email })}
        />

        <Input
          placeholder="  Password"
          
          leftIcon={{ type: "font-awesome", name: "key", color: "black" }}
          onChangeText={pasword => this.setState({ password })}
        />

        <Button 
        title="Sign In With Email"
         onPress={this.onLogin}
         color="#f57c00" />
     
      </View>
    );
  }
}
export default SignInWithEmail;
