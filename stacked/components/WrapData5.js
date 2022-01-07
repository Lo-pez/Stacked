import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const WrapData5 = ({route,navigation}) => {
  const {user} = route.params;
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="zoomIn"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        style={styles.top}>
        For your cravings
      </Animatable.Text>

      <Animatable.View
        animation="zoomInUp"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={{marginTop: 50}}>
        <Text style={styles.compare}>You went to lots of</Text>
        <Text style={styles.compare}>restaurants this month.</Text>
        <Text style={styles.compare}>But you really liked</Text>
        <Text
          style={{
            color: '#D70040',
            fontSize: 33,
            lineHeight: 38,
            fontWeight: 'bold',
          }}>
          {user.fun_metrics.mostVisitedResturant}.
        </Text>
      </Animatable.View>

      <Animatable.View
        animation="zoomInRight"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={{marginTop: 50}}>
        <Text style={styles.compare2}>They wouldn't</Text>
        <Text style={styles.compare2}>have been the same</Text>
        <Text style={styles.compare2}>without you.</Text>
      </Animatable.View>

      <Animatable.Text
        animation="zoomInRight"
        easing="ease-out-cubic"
        duration={2000}
        delay={1000}
        style={styles.desc}>
        (You are their favorite customer! ✨)
      </Animatable.Text>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('WrapData',{user:user})}>
          <Animatable.Text
            animation="fadeInUp"
            easing="ease-out-cubic"
            duration={1500}
            delay={1500}
            style={styles.buttonText}>
            BACK
          </Animatable.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WrapData5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Set content's vertical alignment.
    //justifyContent: 'center',
    // Set content's horizontal alignment.
    //alignItems: 'center',
    padding: 30,
    backgroundColor: '#000',
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
    marginTop: 78,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
  },
  compare: {
    color: '#ffffff',
    fontSize: 24,
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
