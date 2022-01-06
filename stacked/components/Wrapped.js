import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import data from '../DummyData/dummydata.json';
//Spotify wrapped

const Wrapped = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="fadeInUp"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        style={styles.top}>
        {data.user.username},
      </Animatable.Text>
      <Animatable.Text
        animation="fadeInUp"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        delay={100}
        style={styles.title}>
        your yearly
      </Animatable.Text>
      <Animatable.Text
        animation="fadeInUp"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        delay={200}
        style={styles.title}>
        review is here.
      </Animatable.Text>
      <Animatable.Text
        animation="fadeInUp"
        easing="ease-out-cubic"
        duration={2000}
        delay={300}
        style={styles.desc}>
        (we are excited too! ❤️❤️)
      </Animatable.Text>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('WrapData1')}>
          <Animatable.Text
            animation="fadeInLeft"
            easing="ease-out-cubic"
            duration={1500}
            delay={1500}
            style={styles.buttonText}>
            LET'S DO IT
          </Animatable.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Wrapped;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Set content's vertical alignment.
    justifyContent: 'center',
    // Set content's horizontal alignment.
    //alignItems: 'center',
    padding: 30,
    backgroundColor: '#000',
  },
  top: {
    //textAlign: 'center',
    marginTop: 100,
    fontSize: 65,
    fontWeight: 'bold',
    lineHeight: 70,
    color: '#ffffff',
  },
  title: {
    //textAlign: 'center',
    fontSize: 65,
    fontWeight: 'bold',
    lineHeight: 70,
    color: '#ffffff',
  },
  desc: {
    marginTop: 25,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  button: {
    marginTop: 180,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    borderWidth: 2,
    lineHeight: 40,
    width: 200,
    marginVertical: 10,
    borderColor: '#ffffff',
    justifyContent: 'center',
    fontSize: 16,
    borderRadius: 50,
  },
});
