import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const WrapData1 = ({route,navigation}) => {
  const {user} = route.params;
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="fadeInLeft"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        style={styles.top}>
        {user.username}, your needs
      </Animatable.Text>
      <Animatable.Text
        animation="fadeInLeft"
        direction="alternate"
        easing="ease-out-cubic"
        duration={2000}
        delay={100}
        style={styles.title}>
        changed throughout the month.
      </Animatable.Text>
      <Animatable.Text
        animation="fadeInLeft"
        easing="ease-out-cubic"
        duration={2000}
        delay={400}
        style={styles.desc}>
        (you gotta spend to live, right?)
      </Animatable.Text>

      <Animatable.View
        animation="fadeInRight"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={{marginTop: 50}}>
        <Text style={styles.compare}>
          <Text>Rent: </Text>
          <Text
            style={{
              color: '#7393B3',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              fontSize: 18,
            }}>
            ${user.old_metrics.needs.rent}
          </Text>
          <Text> to ${user.new_metrics.needs.rent}</Text>
        </Text>

        <Text style={styles.compare}>
          <Text>Groceries: </Text>
          <Text
            style={{
              color: '#7393B3',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              fontSize: 18,
            }}>
            ${user.old_metrics.needs.groceries}
          </Text>
          <Text> to ${user.new_metrics.needs.groceries}</Text>
        </Text>

        <Text style={styles.compare}>
          <Text>Utilities: </Text>
          <Text
            style={{
              color: '#7393B3',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              fontSize: 18,
            }}>
            ${user.old_metrics.needs.utilities}
          </Text>
          <Text> to ${user.new_metrics.needs.utilities}</Text>
        </Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInLeft"
        easing="ease-out-cubic"
        duration={2000}
        delay={600}
        style={styles.funFact}>
        <Animatable.Text
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          iterationDelay={2000}
          delay={1500}
          duration={2000}
          style={{
            textAlign: 'center',
            fontSize: 14,
            lineHeight: 24,
            fontWeight: 'bold',
            color: '#000',
          }}>
          (You saved $100 on rent! 🏠)
        </Animatable.Text>
      </Animatable.View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('WrapData2',{user:user})}>
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

export default WrapData1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Set content's vertical alignment.
    //justifyContent: 'center',
    // Set content's horizontal alignment.
    //alignItems: 'center',
    padding: 30,
    backgroundColor: '#7DF9FF',
  },
  top: {
    //textAlign: 'center',
    marginTop: 30,
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 50,
    color: '#000',
  },
  title: {
    //textAlign: 'center',
    color: '#000',
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 45,
  },
  desc: {
    color: '#000',
    marginTop: 20,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
  },
  compare: {
    color: '#000',
    marginTop: 10,
    fontSize: 22,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  funFact: {
    marginTop: 180,
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
