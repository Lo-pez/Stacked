import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    source={{
                        uri:'https://cdn-icons-png.flaticon.com/512/1580/1580763.png'
                    }} 
                    style={styles.logo}
                    resizeMode="stretch"
                        />
                </View>
                <Animatable.View 
                    style={styles.footer}
                    animation="fadeInUpBig" 
                >
                    <Text style={styles.title}>Say hello to budgeting.</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <LinearGradient
                                colors = {['#004879','#d22e1e']}
                                style={styles.signIn}
                            >
                                <Text style={styles.text}>Get Started</Text>
                            </LinearGradient>
                    </TouchableOpacity>
                </View>
                </Animatable.View>
            </View>
        </View>
    )
}

export default SplashScreen;


const styles = StyleSheet.create({
    container: { 
    paddingTop: 40, 
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#004879',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 145,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        height: 200,
        width: 200,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: '700',
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row',
    },
    text: {
        color: '#ffffff',
        fontWeight: '700',
    }
  });
