import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TVShows from './TvShow';
import Movies from './Movies';
import LogoTitle from './LogoTitle';
import MovieProfile from './MovieProfile';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export function MoviesScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoviesScreen"
        component={Movies}
        options={{
          headerTitle: props => <LogoTitle {...props} title="Movies" />,
        }}
      />
      <Stack.Screen name="MovieProfile" component={MovieProfile} />
    </Stack.Navigator>
  );
}
export function TVShowScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TVShowScreen"
        component={TVShows}
        options={{
          headerTitle: props => <LogoTitle {...props} title="TV Shows" />,
        }}
      />
    </Stack.Navigator>
  );
}
