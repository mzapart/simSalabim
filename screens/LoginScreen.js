import React from "react";
import { Text, View, Button } from "react-native";
import SignInWithEmail from "../components/SignIn.component/SignInWithEmail";
import SignInWithGoogle from "../components/SignIn.component/SignInWithGoogle";

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Log In!",
  };

  render() {
    return (
      <View>
        <SignInWithEmail />
      </View>
    );
  }
}

export default LoginScreen;
