import { Text, View, StyleSheet, StatusBar } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import * as Location from 'expo-location';

export default function VisionWeather ({ dataObj, condition }) {
  const weatherOptions = {
    Rain: {
      iconName: 'rainy'
     },
    Snow: {
      iconName: 'snow'
      },
    Thunderstorm: {
      iconName: 'thunderstorm'
     },
    Drizzle: {
      iconName: 'cloud-rizzle'
     },
    Mist: {
      iconName: 'weather-fog'
    },
    Smoke: {
      iconName: 'snow'
    },
    Haze: {
      iconName: 'weather-cloudy-arrow-right'
    },
    Dust: {
      iconName: 'weather-windy'
    },
    Fog: {
      iconName: 'weather-fog'
    },
    Sand: {
      iconName: 'weather-hurricmane'
    },
    Ash: {
      iconName: 'weather-hurricmane'
    },
    Squall: {
      iconName: 'weather-pouring'
    },
    Tornado: {
      iconName: 'weather-tornado'
    },
    Clear: {
      iconName: 'sunny'
    },
    Clouds: {
      iconName: 'cloudy'
    },
  }
  
  console.log(condition);
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Ionicons name={weatherOptions[condition].iconName} size={90} color='white' />
        <Text style={styles.paragraph}>
          {Math.round(dataObj.main.temp)}
          °
        </Text>
      </View>
      
      <View style={styles.halfContainer}>
        {/* <Text style={styles.paragraph}>
          {Math.round(dataObj.main.temp)}
        </Text> */}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: 20, alignItems: 'center', justifyContent: 'center', minWidth: 1400 },
  paragraph: { fontSize: 42, color: 'white' },
  halfContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  // text: { fontSize: 25, color: 'white' },
}); 