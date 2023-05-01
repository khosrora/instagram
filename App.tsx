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
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

enableScreens();

function App(): JSX.Element {

  return (
    <View>
      <Text>Hello</Text>
      <Ionic name="play" style={{ fontSize: 20 }} />
    </View>
  );
}



export default App;
