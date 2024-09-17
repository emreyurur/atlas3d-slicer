import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const buttonWidth = 256; // Width from Figma
const buttonHeight = 49; // Height from Figma

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/images/welcome.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Before Using Foodmedia Services{'\n'}
          Please Register First
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.termsText}>
        By Logging in or Registering, you agree to our{' '}
        <Text style={styles.link}>Terms and Conditions</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.75,
    height: height * 0.4,
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    width: buttonWidth,
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: '#4CAF50',
    height: buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12, // Corner radius from Figma
    marginBottom: 10,
  },
  createAccountButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#E8F5E9',
    height: buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12, // Corner radius from Figma
  },
  loginButtonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  link: {
    color: '#4CAF50',
  },
});

export default WelcomeScreen;