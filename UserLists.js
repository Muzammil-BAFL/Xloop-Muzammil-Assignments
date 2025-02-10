// UserList.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>User List</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
  item: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

export default UserList;
