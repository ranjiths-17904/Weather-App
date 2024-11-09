import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const ForecastScreen = ({ forecastData }) => {
  return (
    <FlatList
      data={forecastData} // Replace with API data for forecast
      keyExtractor={(item) => item.dt.toString()}
      renderItem={({ item }) => (
        <View style={styles.dayContainer}>
          <Text style={styles.day}>{new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</Text>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }}
            style={styles.icon}
          />
          <Text style={styles.temp}>{(item.temp.day - 273.15).toFixed(1)}°C</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  dayContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, marginVertical: 5 },
  day: { flex: 1, fontSize: 18, color: '#fff' },
  icon: { width: 50, height: 50 },
  temp: { fontSize: 18, color: '#ff9900', fontWeight: 'bold' },
});

export default ForecastScreen;
