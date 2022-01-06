import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Review from '../components/Review';
import UserData from '../components/UserData';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="UserData" component={UserData} options={{headerShown:false}} />
      <Stack.Screen name="Review" component={Review} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default MyStack;