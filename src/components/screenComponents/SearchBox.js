import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

const SearchBox = () => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingVertical: 10,
            position: 'relative'
        }}>
            <Ionicons
                name='search'
                style={{
                    fontSize: 18,
                    opacity: 0.7,
                    position: 'absolute',
                    zIndex: 1,
                    left: 25
                }}
            />
            <TextInput placeholder='Search' placeholderTextColor="#909090" style={{
                width: '94%',
                backgroundColor: '#EBEBEB',
                borderRadius: 10,
                fontSize: 15,
                padding: 4,
                paddingLeft: 40
            }} />
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({})