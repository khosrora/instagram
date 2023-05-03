import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Stories from '../screenComponents/Stories'

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
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})