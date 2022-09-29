import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
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
                navigation.navigate('MovieProfile', {
                  ProfileId: Movie.Id,
                });
              }}>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500/' + Movie.ImagePath,
                  }}
                />
                <Text style={styles.caption}>{Movie.Title}</Text>
              </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  thumbnailContainer: {
    maxWidth: 165,
    margin: 7,
  },
  thumbnail: {
    width: 145,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  caption: {
    textAlign: 'center',
    maxWidth: 130,
    textAlignVertical: 'center',
  },
});
