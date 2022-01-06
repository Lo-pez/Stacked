import React from 'react'
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Title from './Title'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.bannerContainer}>
                <Image 
                    source={{
                        uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F60%2Fee%2F65%2F60ee651c35897acfc77e7cb33ac5b996.png&f=1&nofb=1'
                    }} 
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('UserData')} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40, 
        paddingHorizontal: 20,
        height: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#004879',
        padding: 20,
        borderRadius: 4,
        marginBottom: 30,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#ffffff',
    },
})
