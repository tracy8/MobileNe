import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function ListItem({ items }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={items.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{items.title}</Text>
        <Text style={styles.description}>{items.description}</Text>
        <Text style={styles.votes}>{items.votes}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 14,
    color: '#827F7F',
    paddingHorizontal: 16,
  },
  votes: {
    fontSize: 14,
    color: '#827F7F',
    paddingHorizontal: 16,
  }
});
