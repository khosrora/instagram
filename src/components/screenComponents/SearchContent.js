import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchContent = () => {

    const searchData = [
        {
            id: 0, images: [
                require("./../../../assets/images/prof2.jpeg"),
                require("./../../../assets/images/prof3.jpeg"),
                require("./../../../assets/images/prof4.jpeg"),
                require("./../../../assets/images/prof5.jpeg"),
                require("./../../../assets/images/prof6.jpeg"),
                require("./../../../assets/images/prof7.jpeg"),
            ]
        },
        {
            id: 1, images: [
                require("./../../../assets/images/prof2.jpeg"),
                require("./../../../assets/images/prof3.jpeg"),
                require("./../../../assets/images/prof4.jpeg"),
                require("./../../../assets/images/prof5.jpeg"),
                require("./../../../assets/images/prof6.jpeg"),
                require("./../../../assets/images/prof7.jpeg"),
            ]
        },
        {
            id: 3, images: [
                require("./../../../assets/images/prof2.jpeg"),
                require("./../../../assets/images/prof3.jpeg"),
                require("./../../../assets/images/prof4.jpeg"),
                require("./../../../assets/images/prof5.jpeg"),
                require("./../../../assets/images/prof6.jpeg"),
                require("./../../../assets/images/prof7.jpeg"),
            ]
        },
    ]

    return (
        <View>
            {
                searchData.map((data , index) => {
                    
                })
            }
        </View>
    )
}

export default SearchContent

const styles = StyleSheet.create({})