import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import WeatherInfo from '../src/component/WeatherInfo'; // Make sure to update the path if necessary
import { fetchWeather } from '../src/api/WeatherApi';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleFetchWeather = async () => {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  return (
    <LinearGradient colors={['#232526', '#414345']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Weather App</Text>
        
        <View style={styles.inputContainer}>
          <Icon name="search" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter city"
            placeholderTextColor="#aaa"
            value={city}
            onChangeText={setCity}
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button title="Get Weather" onPress={handleFetchWeather} color="#ff9900" />
        </View>

        {weatherData ? (
          <WeatherInfo weatherData={weatherData} />
        ) : (
          <Text style={styles.infoText}>Enter a city to get weather data</Text>
        )}

        {weatherData && weatherData.weather && (
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`,
            }}
            style={styles.weatherIcon}
          />
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { padding: 20, alignItems: 'center', width: '100%' },
  title: { fontSize: 32, color: '#fff', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 20,
    width: '80%',
  },
  icon: { marginRight: 8 },
  input: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 10,
    flex: 1,
  },
  buttonContainer: {
    width: '60%',
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  infoText: { color: '#aaa', fontSize: 16, marginTop: 20, textAlign: 'center' },
  weatherIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default HomePage;
