import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, Pressable} from 'react-native';
import {GetListContents} from '../util/http';
import Styles from '../style/contentList';

function TVShows({navigation}) {
  const [listTVShows, setListTVShows] = useState([]);

  useEffect(() => {
    GetListContents('tv').then(data => {
      setListTVShows(data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={Styles.container}>
        {listTVShows.map((TVShow, index) => (
          <View key={index} style={Styles.title}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile', {
                  ProfileId: TVShow.Id,
                  ContentType: 'tv',
                });
                navigation.setOptions(() => console.log('settings'));
              }}>
              <View style={Styles.thumbnailContainer}>
                <Image
                  style={Styles.thumbnail}
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500/' + TVShow.ImagePath,
                  }}
                />
                <Text style={Styles.caption}>{TVShow.Title}</Text>
              </View>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default TVShows;
