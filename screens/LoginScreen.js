import React from "react";
import { Text, View, Button } from "react-native";
import SignInWithEmail from "../components/SignIn.component/SignInWithEmail";
import SignInWithGoogle from "../components/SignIn.component/SignInWithGoogle";

class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Login Screen</Text>
        <SignInWithEmail />
      </View>
    );
  }
}

export default LoginScreen;
