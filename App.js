import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    // 縦並びか横並びか
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    // 描画可能なエリアを可能な限り使用する
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://reactnative.dev/img/tiny_logo.png"
        title="React Native combines the best parts of native development with React,
        a best-in-class JavaScript library for building user interfaces."
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://reactnative.dev/img/tiny_logo.png"
        title="React Native combines the best parts of native development with React,
        a best-in-class JavaScript library for building user interfaces."
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://reactnative.dev/img/tiny_logo.png"
        title="React Native combines the best parts of native development with React,
        a best-in-class JavaScript library for building user interfaces."
        author="SampleNews"
      />
      <StatusBar style="auto" />
    </View>
  );
}
