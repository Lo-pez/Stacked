import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
//finance wrapped

const Wrapped = ({route,navigation}) => {
  const {user} = route.params;
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="fadeInUp"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        style={styles.top}>
        {user.username},
      </Animatable.Text>
      <Animatable.Text
        animation="fadeInUp"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        delay={100}
        style={styles.title}>
        your monthly
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
        <TouchableOpacity onPress={() => navigation.navigate('WrapData1',{user:user})}>
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
    marginTop: 89,
    fontSize: 64,
    fontWeight: 'bold',
    lineHeight: 60,
    color: '#ffffff',
  },
  title: {
    //textAlign: 'center',
    fontSize: 59,
    fontWeight: 'bold',
    lineHeight: 65,
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
    marginTop: 120,
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
