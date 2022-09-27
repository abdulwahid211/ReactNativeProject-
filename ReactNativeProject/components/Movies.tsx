import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class Movies extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>tHIS IS Movies page!</Text>
        <Text>tHIS IS Movies page!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('ProfileMovie')}
        />
      </View>
    );
  }
}

export default Movies;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    fontSize: 62,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});
