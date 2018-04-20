import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/components/common';
import ArticleList from './src/components/ArticleList'

export default class App extends React.Component {
  render() {
    return (
      <View >
        <Header headerText={'News'}/>
        <ArticleList />
      </View>
    );
  }
}
