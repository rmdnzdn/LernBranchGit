import React, { Component } from 'react';
import { View, Text } from 'react-native';

class second extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> second Screen</Text>
        <Text> Mencoba Melihat Perbandingan Antar Repo dengan Local </Text>
      </View>
    );
  }
}

export default second;
