import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import Review from '../components/Review';
import UserData from '../components/UserData';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import SplashScreen from '../components/SplashScreen';
import Wrapped from '../components/Wrapped';
import WrapData1 from '../components/WrapData1';
import WrapData2 from '../components/WrapData2';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserData"
        component={UserData}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Wrapped"
        component={Wrapped}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WrapData1"
        component={WrapData1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WrapData2"
        component={WrapData2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
