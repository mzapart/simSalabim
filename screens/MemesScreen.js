import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class MemesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView>
        <Text>Every1 can see it fetch from firebase</Text>
      </ScrollView>
    );
  }
  
}

export default MemesScreen;
