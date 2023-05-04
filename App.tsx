/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';

import Ionic from "react-native-vector-icons/Ionicons"


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Profile from './src/components/screens/Profile';
import Activity from './src/components/screens/Activity';
import Status from './src/components/screenComponents/Status';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

enableScreens();


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      headerShown: false,
      tabBarIcon: ({ focused, size, color }) => {
        let iconName = '';
        if (route.name === "Home") {
          iconName = focused ? "home-sharp" : "home-outline";
          size = focused ? size + 8 : size + 2
        } else if (route.name === "Search") {
          iconName = focused ? "search" : "ios-search-outline"
        } else if (route.name === "Reels") {
          iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline"
        } else if (route.name === "Activity") {
          iconName = focused ? "ios-heart" : "ios-heart-outline"
        } else if (route.name === "Profile") {
          iconName = focused ? "ios-person" : "ios-person-outline"
        }

        return <Ionic name={iconName} size={size} color="#000" />
      }
    })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Reels' component={Reels} />
      <Tab.Screen name='Activity' component={Activity} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='MyTabs' component={MyTabs} />
        <Stack.Screen name='Status' component={Status} />
        {/* Status */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
