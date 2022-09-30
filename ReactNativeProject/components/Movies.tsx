import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, Pressable} from 'react-native';
import {GetListContents} from '../util/http';
import Styles from '../style/contentList';

function Movies({navigation}) {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    GetListContents('movie').then(data => {
      setListMovies(data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={Styles.container}>
        {listMovies.map((Movie, index) => (
          <View key={index} style={Styles.title}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile', {
                  ProfileId: Movie.Id,
                  ContentType: 'movie',
                });
                navigation.setOptions(() => console.log('settings'));
              }}>
              <View style={Styles.thumbnailContainer}>
                <Image
                  style={Styles.thumbnail}
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500/' + Movie.ImagePath,
                  }}
                />
                <Text style={Styles.caption}>{Movie.Title}</Text>
              </View>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default Movies;
