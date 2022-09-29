import * as React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import {GetTVShowProfile} from '../util/http';
import {BackPageIcon} from '../components/BackPageIcon';
import {LinearGradient} from 'expo-linear-gradient';
import {AirbnbRating} from 'react-native-ratings';

class TVShowProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getMovieData: {
        backdropImage: '',
        genre: '',
        title: '',
        overview: '',
        posterImage: '',
        ratings: 0,
        runtime: '',
      },
    };
  }

  componentDidMount() {
    const {route, navigation} = this.props;

    navigation.setOptions({
      headerShown: false,
      tabBarStyle: {display: 'none'},
      headerStyle: {
        backgroundColor: '#010206',
      },
    });

    const {ProfileId} = route.params;

    GetTVShowProfile(ProfileId).then(data => {
      this.setState(prevState => ({
        getMovieData: {
          backdropImage: data.backdropImage,
          genre: data.genre,
          title: data.title,
          overview: data.overview,
          posterImage: data.posterImage,
          ratings: data.ratings,
          runtime: data.runtime,
        },
      }));
    });
  }

  onPress = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.backgroundImageContainer}>
          <BackPageIcon onPress={this.onPress} />
          <ImageBackground
            style={styles.backgroundImage}
            blurRadius={0.3}
            source={{
              uri:
                'https://image.tmdb.org/t/p/w500' +
                this.state.getMovieData.backdropImage,
            }}
          />
          <Image
            style={styles.posterImage}
            source={{
              uri:
                'https://image.tmdb.org/t/p/w500/' +
                this.state.getMovieData.posterImage,
            }}
          />
          <Text style={styles.title}>{this.state.getMovieData.title}</Text>
          <Text style={styles.genre}>
            2022 - {this.state.getMovieData.genre}
          </Text>
          <Text style={styles.genre}>
            Runtime - {this.state.getMovieData.runtime} min
          </Text>
          <LinearGradient
            // Background Linear Gradient
            style={styles.gradientImage1}
            colors={['rgba(0,0,0,0.93)', 'transparent']}
            start={[0.0, 0.0]}
            end={[0.2, 0.9]}
            locations={[0.9, 0]}
          />
          <LinearGradient
            // Background Linear Gradient
            style={styles.gradientImage2}
            colors={['rgba(0,0,0,0.5)', 'transparent']}
          />
          <View style={styles.stars}>
            <AirbnbRating
              count={10}
              defaultRating={this.state.getMovieData.ratings}
              size={20}
              reviews={[]}
              isDisabled={true}
            />
          </View>
          <Text style={styles.overview}>
            {this.state.getMovieData.overview}
          </Text>
        </View>
      </View>
    );
  }
}

export default TVShowProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  overview: {
    color: 'white',
    zIndex: 4,
    textAlign: 'justify',
    padding: 15,
    paddingTop: 20,
    fontSize: 15,
  },
  genre: {
    bottom: 80,
    left: 165,
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -40,
    marginRight: 170,
    zIndex: 5,
  },
  title: {
    bottom: 180,
    left: 160,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 170,
    marginBottom: 0,
    zIndex: 4,
  },
  backgroundImageContainer: {},
  backgroundImage: {
    width: 350,
    height: 350,
    opacity: 0.75,
  },
  gradientImage1: {
    position: 'absolute',
    width: 350,
    height: 500,
    zIndex: 1,
  },
  gradientImage2: {
    position: 'absolute',
    top: 150,
    width: 350,
    height: 500,
    zIndex: 1,
  },
  posterImage: {
    position: 'absolute',
    top: 100,
    left: 20,
    width: 140,
    height: 240,
    opacity: 0.9,
    zIndex: 3,
  },
  stars: {
    zIndex: 3,
  },
});
