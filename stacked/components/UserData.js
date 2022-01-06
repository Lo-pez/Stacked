import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const UserData = () => {
    return (
        <View style={styles.container}>
            <View style={styles.prompt}>
                <Text>Income bracket</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity>
                    <Text>15,000-20,000</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>20,001-25,000</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>25,001-30,000</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>30,000+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.endbuttons}>
                <TouchableOpacity>
                    <Text>I don't want to answer this</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserData

const styles = StyleSheet.create({
    container: {
        padding: 14,
        height: '100%'
    },
    top:{
        marginVertical: 18,
    },
    optins: {
        marginVertical: 18,
        flex: 1,
    },
    endbuttons: {
        marginBottom: 14,
        paddingVertical: 18,
        justifyContent: "space-between",
        flexDirection: 'row',
    },
});
