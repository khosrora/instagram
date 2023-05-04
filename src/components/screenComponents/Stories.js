import React from 'react'
import { StyleSheet, Image, View, ScrollView, TouchableOpacity, Text } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from "@react-navigation/native"


const Stories = () => {

    const navigation = useNavigation()

    const storyInfo = [
        {
            id: 1, name: 'Your Story', image: require("./../../../assets/images/profile.webp")
        },
        {
            id: 2, name: 'Tom', image: require("./../../../assets/images/prof9.jpeg")
        },
        {
            id: 3, name: 'Jonn', image: require("./../../../assets/images/prof2.jpeg")
        },
        {
            id: 4, name: 'nickole', image: require("./../../../assets/images/prof3.jpeg")
        },
        {
            id: 5, name: 'no_user', image: require("./../../../assets/images/prof4.jpeg")
        },
        {
            id: 6, name: 'KingBand', image: require("./../../../assets/images/prof5.jpeg")
        },
        {
            id: 7, name: 'Royal', image: require("./../../../assets/images/prof6.jpeg")
        },
        {
            id: 8, name: 'jj', image: require("./../../../assets/images/prof7.jpeg")
        },
        {
            id: 9, name: 'arghvn', image: require("./../../../assets/images/prof10.webp")
        },
    ]

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 20 }}
        >
            {
                storyInfo.map((data, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.push("Status", {
                            name: data.name,
                            image: data.image
                        })}>
                            <View style={{ flexDirection: "column", paddingHorizontal: 8, position: "relative" }}>
                                {
                                    data.id == 1 ? (
                                        <View style={{ position: "absolute", bottom: 15, right: 10, zIndex: 1 }}>
                                            <Entypo name='circle-with-plus' style={{ fontSize: 20, color: "#405de6", backgroundColor: "white", borderRadius: 100 }} />
                                        </View>
                                    ) : null
                                }
                                <View style={{ width: 68, height: 68, backgroundColor: "white", borderWidth: 1.8, borderRadius: 100, borderColor: "#c13584", justifyContent: "center", alignItems: "center" }}>
                                    <Image source={data.image} style={{ resizeMode: "cover", width: "92%", height: "92%", borderRadius: 100, backgroundColor: "orange" }} />
                                </View>
                                <Text style={{ textAlign: "center", fontSize: 10, opacity: data.id == 0 ? 1 : 0.5 }}> {data.name} </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default Stories

const styles = StyleSheet.create({})