import React from "react";
import { Text, View, Button } from "react-native";
import firebase from "../../firebase.js";
class SignInWithGoogle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "marycha@gmail.com",
      password: "chuj123"
    };
  }

  onSignIn = googleUser => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function() {
              console.log("user signed it");
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "623585970782-tuo9bbea7jral6fuh2l4t3s7fck5fvcp.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.onSignIn(result);
        console.log("succ");
        return result.accessToken;
      } else {
        console.log(result);
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e.toString());
      return { error: true };
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <View>
        <Text>Logout logged uer ca seeit</Text>
        <Button
          title="Sign In With Email"
          onPress={this.signInWithGoogleAsync}
        />
      </View>
    );
  }
}
export default SignInWithGoogle;
