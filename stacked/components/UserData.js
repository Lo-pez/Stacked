import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const UserData = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.prompt}>
                <Text style={styles.promptQuestion}>Income bracket</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>15,000-20,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>20,001-25,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>25,001-30,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>30,000+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.endbuttons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserData

const styles = StyleSheet.create({
    container: {
        paddingTop: 40, 
        paddingHorizontal: 20,
        height: '100%',
    },
    top:{
        marginVertical: 18,
    },
    promptQuestion: {
        fontSize: 28,
    },
    options: {
        marginVertical: 18,
        flex: 1,
    },
    optionButton: {
        paddingVertical: 14,
        marginVertical: 6,
        backgroundColor: '#004879',
        paddingHorizontal: 14,
        borderRadius: 4,
    },
    option: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '500',
    },
    endbuttons: {
        marginBottom: 14,
        paddingVertical: 18,
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#004879',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginBottom: 30,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
    },
});

/*
Boilerplate code for pulling from api in case one is used here

const [settings, setSettings] = useState();
const [prmt, setPrmt] = useState(0);
const getSettings = async() => {
    const url = '';
    const res =  await fetch(url);
    const data = await res.json();
    setSettings(data.results);
}
useEffect(() => {
    getSettings();
},[])

*/