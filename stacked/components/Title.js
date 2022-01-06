import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleWhite}> 
                sta
                <Text style={styles.titleRed}>
                    ck
                </Text>
                ed
            </Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    titleWhite: {
        fontSize: 30,
        fontWeight: '600',
    },
    titleRed: {
        color: '#d22e1e',
    },
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
