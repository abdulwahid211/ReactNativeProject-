import {StyleSheet, Text, View, Button} from 'react-native';
import React, {Component, useState} from 'react';

class TVShows extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>tHIS IS Movies PAGE!</Text>
      </View>
    );
  }
}

export default TVShows;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    fontSize: 62,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});
