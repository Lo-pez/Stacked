import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const WrapData3 = ({route,navigation}) => {
  const {user} = route.params;
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="fadeInDownBig"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        style={styles.top}>
        Entertain Yourself
      </Animatable.Text>

      <Animatable.View
        animation="fadeInUpBig"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={{marginTop: 60}}>
        <Text style={styles.compare}>
          When it comes to entertainment, good time comes along.
        </Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUpBig"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={{marginTop: 20}}>
        <Text style={styles.compare2}>You have used</Text>
        <Text style={styles.compare2}>
          <Text style={{fontSize: 30, lineHeight: 35}}>
            ${user.new_metrics.wants.entertainment}
          </Text>
          <Text> on exciting moments this month.</Text>
        </Text>
      </Animatable.View>

      <Animatable.Text
        animation="fadeInUpBig"
        easing="ease-out-cubic"
        duration={2000}
        delay={1000}
        style={styles.desc}>
        (Wooo Hoooo!! 🕺🙌)
      </Animatable.Text>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('WrapData4',{user:user})}>
          <Animatable.Text
            animation="fadeInUp"
            easing="ease-out-cubic"
            duration={1500}
            delay={1500}
            style={styles.buttonText}>
            NEXT
          </Animatable.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WrapData3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Set content's vertical alignment.
    //justifyContent: 'center',
    // Set content's horizontal alignment.
    //alignItems: 'center',
    padding: 30,
    backgroundColor: '#d03027',
  },
  top: {
    //textAlign: 'center',
    marginTop: 30,
    fontSize: 45,
    fontWeight: 'bold',
    lineHeight: 50,
    color: '#ffffff',
  },
  desc: {
    color: '#ffffff',
    marginTop: 130,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
  },
  compare: {
    color: '#ffffff',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 'bold',
  },
  compare2: {
    color: '#ffffff',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 'bold',
  },
  button: {
    color: '#ffffff',
    marginTop: 30,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    borderWidth: 2,
    lineHeight: 40,
    width: 200,
    marginVertical: 10,
    justifyContent: 'center',
    borderColor: '#ffffff',
    fontSize: 15,
    borderRadius: 50,
  },
});
