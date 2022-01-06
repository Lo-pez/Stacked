import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { 
  StyleSheet, 
} from 'react-native'
import Home from './components/Home';
import Review from './components/Review';
import UserData from './components/UserData';
import MyStack from './navigation';


const App = () => {
  return (
      <NavigationContainer>
        <MyStack /> 
      </NavigationContainer>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 42,
    paddingHorizontal: 18,
  },
});
