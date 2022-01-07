import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import data from '../DummyData/dummydata.json';

const WrapData4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="flipInX"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        style={styles.top}>
        Invested
      </Animatable.Text>

      <Animatable.View
        animation="flipInX"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={{marginTop: 128}}>
        <Animatable.Text
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          iterationDelay={2000}
          delay={1000}
          duration={2000}
          style={styles.compare}>
          <Text>You made a </Text>
          <Text style={{fontSize: 35, lineHeight: 35}}>
            {data.user.fun_metrics.investment_metric}%
          </Text>
          <Text> profit</Text>
        </Animatable.Text>

        <Animatable.Text
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          iterationDelay={2000}
          delay={1100}
          duration={2000}
          style={styles.compare}>
          margin from your
        </Animatable.Text>

        <Animatable.Text
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          iterationDelay={2000}
          delay={1200}
          duration={2000}
          style={styles.compare}>
          investments!
        </Animatable.Text>
      </Animatable.View>

      <Animatable.View
        animation="flipInY"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={{marginTop: 20}}>
        <Text style={styles.compare2}>We think that is an</Text>
        <Text style={styles.compare2}>amazing achievement.</Text>
      </Animatable.View>

      <Animatable.Text
        animation="flipInY"
        easing="ease-out-cubic"
        duration={2000}
        delay={1000}
        style={styles.desc}>
        (seriously. We do. 🥰)
      </Animatable.Text>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('WrapData5')}>
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

export default WrapData4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Set content's vertical alignment.
    //justifyContent: 'center',
    // Set content's horizontal alignment.
    //alignItems: 'center',
    padding: 30,
    backgroundColor: '#0096FF',
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
    marginTop: 150,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  compare: {
    color: '#ffffff',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  compare2: {
    color: '#ffffff',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 'bold',
    textAlign: 'center',
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
