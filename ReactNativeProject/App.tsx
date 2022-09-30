import {StyleSheet, Text, View, Button, StatusBar, Image} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MoviesScreen, TVShowScreen} from './components/Screens';
import ThemeColors from '././style/themes';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Movies"
        activeColor="orange"
        inactiveColor="grey"
        barStyle={{backgroundColor: ThemeColors.TabBar, height: 70}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;

            if (route.name === 'Movies') {
              iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
            } else if (route.name === 'TV Shows') {
              iconName = focused ? 'md-laptop' : 'ios-laptop-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarStyle: {
            height: 10,
          },
        })}>
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen name="TV Shows" component={TVShowScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
