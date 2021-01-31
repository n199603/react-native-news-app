import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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
  // const items = articles.map((article, index) => {
  //   return (
  //     <ListItem
  //       imageUrl={article.urlToImage}
  //       title={article.title}
  //       author={article.author}
  //       key={index}
  //     />
  //   );
  // });

  const [articles, setArticles] = useState(dummyArticles);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
