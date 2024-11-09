import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LandingScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={{ uri: 'https://link-to-your-weather-icon.png' }}
          style={styles.weatherIcon}
        />
      </View>
      <Text style={styles.title}>Daily Weather</Text>
      <Text style={styles.description}>
        Stay updated with current weather conditions.
      </Text>
      <Button
        title="Get Started"
        color="#ff9900"
        onPress={() => navigation.navigate('Home')}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 40,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default LandingScreen;
