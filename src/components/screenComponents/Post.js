import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity, TextInput } from 'react-native'
import Feature from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const Post = () => {

    const postInfo = [
        { postTitle: "mr shermoon", postPersonImage: require("./../../../assets/images/prof5.jpeg"), postImage: require('./../../../assets/images/prof2.jpeg'), like: 20, isLike: false } , 
        { postTitle: "mr shermoon", postPersonImage: require("./../../../assets/images/prof2.jpeg"), postImage: require('./../../../assets/images/prof4.jpeg'), like: 20, isLike: false } , 
        { postTitle: "mr shermoon", postPersonImage: require("./../../../assets/images/prof5.jpeg"), postImage: require('./../../../assets/images/prof3.jpeg'), like: 20, isLike: false } , 
        { postTitle: "mr shermoon", postPersonImage: require("./../../../assets/images/prof5.jpeg"), postImage: require('./../../../assets/images/prof6.jpeg'), like: 20, isLike: false } , 
        { postTitle: "mr shermoon", postPersonImage: require("./../../../assets/images/prof5.jpeg"), postImage: require('./../../../assets/images/prof9.jpeg'), like: 20, isLike: false } , 
        { postTitle: "mr shermoon", postPersonImage: require("./../../../assets/images/prof5.jpeg"), postImage: require('./../../../assets/images/prof2.jpeg'), like: 20, isLike: false } , 
    ]

    return (
        <View>
            {
                postInfo.map((data, index) => {

                    const [like, setLike] = React.useState(data.isLike)

                    return (
                        <View key={index} style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={data.postPersonImage}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 100
                                        }}
                                    />
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: 'bold'
                                        }}> {data.postTitle} </Text>
                                    </View>
                                </View>
                                <Feature name='more-vertical' style={{
                                    fontSize: 20,
                                }} />
                            </View>
                            <View style={{
                                position: 'relative',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    source={data.postImage}
                                    style={{
                                        width: '100%',
                                        height: 400
                                    }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 15 }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <TouchableOpacity onPress={() => setLike(!like)}>
                                        <AntDesign
                                            name={like ? "heart" : "hearto"}
                                            style={{
                                                paddingRight: 10,
                                                fontSize: 20,
                                                color: like ? 'red' : 'black'
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionic name='ios-chatbubble-outline' style={{ fontSize: 20, paddingRight: 10 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feature name='navigation' style={{ fontSize: 20, paddingRight: 10 }} />
                                    </TouchableOpacity>
                                </View>
                                <Feature name="bookmark" style={{ fontSize: 20 }} />
                            </View>
                            <View style={{ 
                                padding : 10
                            }}>
                                <Text>
                                    Liked by {like ? 'you and' : ''}{' '}
                                    {like ? data.like + 1 : data.like} others
                                </Text>
                                <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                                    View all comments
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={data.postPersonImage} style={{ width: 25, height: 25, borderRadius: 100, backgroundColor: 'orange', marginRight: 10 }} />
                                        <TextInput
                                            placeholder='Add a comment'
                                            style={{
                                                opacity: 0.8
                                            }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Entypo name='emoji-happy' style={{
                                            fontSize: 15,
                                            color: 'lightgreen',
                                            marginRight: 10
                                        }} />
                                        <Entypo name='emoji-neutral' style={{
                                            fontSize: 15,
                                            color: 'pink',
                                            marginRight: 10
                                        }} />
                                        <Entypo name='emoji-sad' style={{
                                            fontSize: 15,
                                            color: 'red',
                                            marginRight: 10
                                        }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})