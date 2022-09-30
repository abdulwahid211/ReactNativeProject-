import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import TVShows from './TvShows';
import Profile from './Profile';
import Movies from './Movies';
import LogoTitle from './LogoTitle';
import ThemeColors from '../style/themes';

const Stack = createStackNavigator();

export function MoviesScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoviesScreen"
        component={Movies}
        options={{
          headerTitle: props => (
            <LogoTitle {...props} title="Exclaimer Movies" />
          ),
          headerStyle: {
            backgroundColor: ThemeColors.HeaderBar,
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
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
          headerTitle: props => (
            <LogoTitle {...props} title="Exclaimer TV Shows" />
          ),
          headerStyle: {
            backgroundColor: '#010206',
          },
        }}
      />
    </Stack.Navigator>
  );
}
