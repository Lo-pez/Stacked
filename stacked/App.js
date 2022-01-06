import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Home from './components/Home';
import Review from './components/Review';
import UserData from './components/UserData';
// initializing the parse SDK for back4app DB
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('7O7xBRdu7sBck0HdCybc1k1yefSqMhyvmYJnDIGA','KjMwfp9lNUv4Jacq0PN9OE8bDwdaAObssLEOSbtd');
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <UserData />
    </View>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 42,
    paddingHorizontal: 18,
  },
});
