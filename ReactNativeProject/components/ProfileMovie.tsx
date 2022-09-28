import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class ProfileMovie extends Component {
  render() {
    const {route, navigation} = this.props;
    const {id, imageUrl} = route.params;
    return (
      <View style={styles.container}>
        <Text> you are wacthing {id}</Text>
        <Image
          style={styles.thumbnail}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
    );
  }
}

export default ProfileMovie;

const styles = StyleSheet.create({
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
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
