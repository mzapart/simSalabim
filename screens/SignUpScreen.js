import React from "react";
import { Text, View } from "react-native";
import SignUp from "../components/SignUp.component";

class SignUpScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>CREATE ACC ONLY NOT LOGGED IN USER CAN SEE IT</Text>
        <SignUp />
      </View>
    );
  }
}

export default SignUpScreen;
