import React from 'react';
import data from '../DummyData/dummydata.json';
import Share from "react-native-share"
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet, 
    ToastAndroid,
    Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const title = "Stacked 2021";
const message = "Check out my Stacked 2021 report!";

const SignIn = ({navigation}) => {
    const [userInfo, setUserInfo] = React.useState({
        email: '',
        password: '',
        checkTextInputChange: false,
        passwordEntry: true,
    });

    const options = {
        title,
        message,
      };

    const [image, setImage] = React.useState(
        "https://files.slack.com/files-pri/T23RHNDU5-F02TQC0JU9W/stacked_logo.png"
    );
    const share = async (customOptions = options) => {
        try {
        await Share.open(customOptions);
        } catch (err) {
        console.log(err);
        }

    const textInputChange = (input) => {
        
        if ( input !== 0) {
            setUserInfo({
                ... userInfo,
                email: input,
                checkTextInputChange: true
            });
        } else {
            setUserInfo({
                ... userInfo,
                email: input,
                checkTextInputChange: true
            });
        }
    }

    const updatePassword = () => {
        setUserInfo({
            ... userInfo,
            passwordEntry: !userInfo.passwordEntry
        });
    }

    const handlePasswordChange = (input) => {
        setUserInfo({
            ... userInfo,
            password: input,

        })
    }

    const handleSignIn = ()=>{
        
        for(let x=0;x<data.user.length;x++){
            let user = data.user[x];
            if(user.email==userInfo.email&&user.password == userInfo.password){
                navigation.navigate('Wrapped',{user:user});
                return;
            }
        }
        Alert.alert("Invalid email or password, please try again.");
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                Welcome back!
            </Text>
        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig" 
        >
            <Text style={styles.footerText}>Email</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder='Email...'
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(input) => textInputChange(input)}
                />
            </View>
            <Text style={styles.password}>Password</Text>
            <View style={styles.action}>
                <TextInput 
                    secureTextEntry={userInfo.passwordEntry ? true : false}
                    placeholder='Password'
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(input) => handlePasswordChange(input)}
                />
                <TouchableOpacity onPress={updatePassword}>
                    {/* Security icon */}
                    {userInfo.passwordEntry ?
                    <Text>🔐</Text>
                    :
                    <Text>🔓</Text>
                    }
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress = {() => handleSignIn()} style={styles.signIn}>
                    <LinearGradient
                        colors = {['#004879','#D22E1E']}
                        style={styles.signIn}
                    >
                        <Text style={styles.text}>Sign In →</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress = {() => navigation.navigate('SignUp')}
                    style={styles.signUp}
                    >
                    <Text style={[styles.text],{
                        color: 'black'}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#004879'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    headerText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 30
    },
    footerText: {
        color: '#05375a',
        fontSize: 18
    },
    password: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 30
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#D22E1E',
        borderWidth: 1,
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    }
  });