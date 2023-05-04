import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Stories from '../screenComponents/Stories'
import Post from '../screenComponents/Post'
import Ionic from 'react-native-vector-icons/Ionicons'

const Home = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          alignItems: "center"
        }}
      >
        <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
        <FontAwesome name='plus-square-o' style={{ fontSize: 24 }} />
        <Text style={{ fontFamily: "Lobster-Regular", fontSize: 25, fontWeight: '500' }}> Instagram </Text>
        <Feather name='navigation' style={{ fontSize: 24 }} />
      </View>
      <ScrollView>
        <Stories />
        <Post />
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Ionic name='ios-reload-circle-sharp' style={{ fontSize: 60, opacity: 0.2 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})