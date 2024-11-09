// WeatherInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return <Text style={styles.infoText}>No weather data available.</Text>;
  }

  return (
    <View style={styles.weatherContainer}>
      <Text style={styles.cityName}>{weatherData.name}</Text>
      <View style={styles.tempContainer}>
        <Icon name="thermometer-outline" size={24} color="#4A90E2" />
        <Text style={styles.temp}>{(weatherData.main.temp - 273.15).toFixed(1)}°C</Text>
      </View>
      <View style={styles.conditionContainer}>
        <Icon name="cloud-outline" size={24} color="#4A90E2" />
        <Text style={styles.description}>{weatherData.weather[0].description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 10, alignItems: 'center', width: '90%', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  cityName: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  tempContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  temp: { fontSize: 26, color: '#333', marginLeft: 5 },
  conditionContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  description: { fontSize: 20, color: '#666', marginLeft: 5 },
  infoText: { fontSize: 18, color: 'gray', textAlign: 'center', marginTop: 20 }
});

export default WeatherInfo;
