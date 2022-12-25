import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

import * as Location from 'expo-location';

import VisionWeather from '../VisionWeather/VisionWeather';

export default function WeatherLoading () {
  const [info, setInfo] = useState(null);
  const [conditions, setCoditions] = useState(null);
  const API_KEY = '89d295cbac76f4f8a977f77b3db32c3f';
  
  const getWeather = async (lat, long) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);
    const { condition } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);

    setInfo(data);
    console.log(data);
  }

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    let location = await Location.getCurrentPositionAsync({});
    getWeather(location.coords.latitude, location.coords.longitude);
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {(info !== null) && ( 
        <VisionWeather dataObj={info} condition={info.weather[0].main} />
      )}
    </>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, alignContent: 'center',} }); 