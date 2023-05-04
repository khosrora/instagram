import React from 'react'
import { StyleSheet, Image, SafeAreaView, View, StatusBar, Text, TouchableOpacity, TextInput, animated, Animated } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"


const Status = ({ route, navigation }) => {

    const { name, image } = route.params;

    React.useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack();
        }, 5000);

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false
        }).start();
        return () => clearTimeout(timer)
    }, [])

    const [progress, setProgress] = React.useState(new Animated.Value(0))

    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%']
    })

    return (
        <SafeAreaView>
            <View style={{
                backgroundColor: "black",
                height: "100%",
                position: "relative",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <StatusBar backgroundColor="black" barStyle="dark-content" animated={true} />
                <View style={{ height: 3, width: "95%", borderWidth: 1, backgroundColor: "gray", position: "absolute", top: 18 }}>
                    <Animated.View style={{ height: "100%", backgroundColor: "white", width: progressAnimation }}></Animated.View>
                </View>
                <View style={{
                    padding: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    top: 12,
                    left: 0,
                    width: "100%"
                }}>
                    <View style={{
                        borderRadius: 100,
                        width: 45,
                        height: 45,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image
                            source={image}
                            style={{
                                borderRadius: 100,
                                backgroundColor: 'orange',
                                resizeMode: 'cover',
                                width: '92%',
                                height: '92%'
                            }}
                        />
                    </View>
                    <View style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        width: "90%"
                    }}>
                        <Text style={{ color: "white", fontSize: 15, paddingLeft: 10 }}> {name} </Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name='close' size={24} style={{ color: 'white' }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Image
                    source={image}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: 600
                    }}
                />
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginVertical: 10,
                    width: '100%'
                }}>
                    <TextInput
                        placeholder='send message'
                        placeholderTextColor='white'
                        style={{
                            borderColor: 'white',
                            borderRadius: 25,
                            width: '85%',
                            height: 50,
                            paddingLeft: 20,
                            borderWidth: 1,
                            fontSize: 20,
                            color: 'white'
                        }}
                    />
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name='navigation' style={{ fontSize: 30, color: 'white' }} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Status

const styles = StyleSheet.create({})