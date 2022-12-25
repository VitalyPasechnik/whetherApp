import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import WeatherLoading from './components/WeatherLoading/WeatherLoading';


export default function App() {
  return (
    <View style={styles.container}>
      <WeatherLoading />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    color: 'red',
    fontSize: 30,
    padding: 40,
  }
});
