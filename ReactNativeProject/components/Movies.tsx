import * as React from 'react';
import {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import axios from 'axios';
import {GetListMovies} from '../util/http';

function Movies({navigation}) {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    GetListMovies().then(data => {
      setListMovies(data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listMovies.map((Movie, index) => (
          <View key={index} style={styles.title}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile', {
                  id: Movie.Title,
                  imageUrl:
                    'https://image.tmdb.org/t/p/w500/' + Movie.ImagePath,
                });
              }}>
              <Image
                style={styles.thumbnail}
                source={{
                  uri: 'https://image.tmdb.org/t/p/w500/' + Movie.ImagePath,
                }}
              />
              <Text>{Movie.Title}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    paddingTop: 20,
    paddingHorizontal: 11,
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  title: {
    paddingLeft: 10,
    padding: 10,
    margin: 0,
  },
});
