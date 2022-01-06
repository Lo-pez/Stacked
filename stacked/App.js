import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Home from './components/Home';
import Review from './components/Review';
import UserData from './components/UserData';


const App = () => {
  return (
    <View style={styles.container}>
      <Home />
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
