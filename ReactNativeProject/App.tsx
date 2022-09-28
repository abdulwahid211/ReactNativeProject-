import {StyleSheet, Text, View, Button, StatusBar, Image} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MoviesScreen, TVShowScreen} from './components/Screens';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function LogoTitle(prop: any) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
      }}>
      <Image
        style={{width: 20, height: 20}}
        source={require('./assets/exclaimer.png')}
      />
      <Text style={{paddingLeft: 5}}>{prop.title}</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" backgroundColor="red" />
      <Tab.Navigator
        initialRouteName="Movies"
        activeColor="green"
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
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen name="TV Shows" component={TVShowScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
