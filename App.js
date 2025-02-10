import React from 'react';
import { SafeAreaView, Text, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const showAlert = () => {
    Alert.alert("Hello Muzammil Hussain"); // Replace with your name
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome to Muzammil App!</Text>
      <Button title="Click Here" onPress={showAlert} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
