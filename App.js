import React from 'react';
import { SafeAreaView, Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './Redux/store';
import UserList from './UserLists';
import ReduxCounter from './ReduxCounter';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome to My App!</Text>
      <Button title="User List" onPress={() => navigation.navigate('UserList')} />
      <Button title="Redux Counter" onPress={() => navigation.navigate('ReduxCounter')} />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#89c7d9',
            },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="ReduxCounter" component={ReduxCounter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
