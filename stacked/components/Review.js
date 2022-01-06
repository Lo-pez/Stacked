import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Review = () => {
    return (
        <View>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
            <Image 
                    source={{
                        uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F60%2Fee%2F65%2F60ee651c35897acfc77e7cb33ac5b996.png&f=1&nofb=1'
                    }} 
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>
                    Home
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

