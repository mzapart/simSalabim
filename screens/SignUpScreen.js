import React from "react";
import { Text, View } from "react-native";
import SignUp from "../components/SignUp.component";


class SignUpScreen extends React.Component {
  static navigationOptions = {
    title:"Sign Up!",
  };
  render() {
    return (
      <View>
        <SignUp />
      </View>
    );
  }
}

export default SignUpScreen;
