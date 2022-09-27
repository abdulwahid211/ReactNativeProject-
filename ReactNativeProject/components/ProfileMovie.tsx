import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class ProfileMovie extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> you are great!</Text>
      </View>
    );
  }
}

export default ProfileMovie;

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
