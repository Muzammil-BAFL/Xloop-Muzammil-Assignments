// ReduxCounter.js
import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/actions';

const ReduxCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Redux Counter</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  counter: {
    fontSize: 32,
    marginBottom: 20,
  },
});

export default ReduxCounter;
