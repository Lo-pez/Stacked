import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import data from '../DummyData/dummydata.json';

const WrapData2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="bounceIn"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        style={styles.top}>
        Vaycay?
      </Animatable.Text>

      <Animatable.View
        animation="bounceIn"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={{marginTop: 80}}>
        <Text style={styles.compare}>
          <Text>You spent </Text>
          <Text style={{fontSize: 34, color: '#004977'}}>
            ${data.user.new_metrics.wants.vacations}
          </Text>
        </Text>

        <Text style={styles.compare}>on vacation this month!</Text>
      </Animatable.View>

      <Animatable.View
        animation="bounceIn"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={{marginTop: 120}}>
        <Text style={styles.compare2}>For contrast,</Text>
        <Text style={styles.compare2}>
          you spent ${data.user.old_metrics.wants.vacations} last
        </Text>
        <Text style={styles.compare2}>month for sweet shades.</Text>
      </Animatable.View>

      <Animatable.Text
        animation="bounceIn"
        easing="ease-out-cubic"
        duration={2000}
        delay={1000}
        style={styles.desc}>
        (sometimes, you need to reeelax 😎)
      </Animatable.Text>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('WrapData3')}>
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

export default WrapData2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Set content's vertical alignment.
    //justifyContent: 'center',
    // Set content's horizontal alignment.
    //alignItems: 'center',
    padding: 30,
    backgroundColor: '#ffffff',
  },
  top: {
    //textAlign: 'center',
    marginTop: 30,
    fontSize: 45,
    fontWeight: 'bold',
    lineHeight: 50,
    color: '#000',
  },
  desc: {
    color: '#000',
    marginTop: 90,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
  },
  compare: {
    color: '#000',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 'bold',
  },
  compare2: {
    color: '#000',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  button: {
    marginTop: 30,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    borderWidth: 2,
    lineHeight: 40,
    width: 200,
    marginVertical: 10,
    justifyContent: 'center',
    fontSize: 15,
    borderRadius: 50,
  },
});
