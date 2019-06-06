import React from "react";
import { Text, View, Button } from "react-native";
import { Accelerometer } from "expo";
const API = "https://some-random-api.ml/meme";
class RandomMem extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = {
      mem: {},
      isLoading: false,
      error: null,
      accelerometerData: { x: 0 }
    };
  }
 

  componentDidMount() {
    this.getRandomMem();
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    Accelerometer.setUpdateInterval(1700);
    Accelerometer.addListener(item => {
      this.setState({ accelerometerData: item.x * 100 });
    });
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  getRandomMem = () => {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ mem: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };
}
export default RandomMem;