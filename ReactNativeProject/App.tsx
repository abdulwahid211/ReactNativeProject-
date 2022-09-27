import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Movies from './components/Movies';
import ProfileMovie from './components/ProfileMovie';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>hello. full time dons</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" backgroundColor="red" />
      <Tab.Navigator
        initialRouteName="Movies"
        activeColor="red"
        inactiveColor="white"
        barStyle={{backgroundColor: '#694fad'}}
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
        })}>
        <Tab.Screen name="Movies" component={HomeScreen} />
        <Tab.Screen name="TV Shows" component={ProfileMovie} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
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
