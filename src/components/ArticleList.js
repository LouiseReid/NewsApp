import React from 'react';
import { ScrollView } from 'react-native';
import ArticleDetail from './ArticleDetail';
import axios from 'axios';

class ArticleList extends React.Component {
  state = { articles: [] };

componentDidMount() {
  axios.get('https://newsapi.org/v2/top-headlines?category=sports&country=gb&apiKey=a80c82cde3334c1c8d810a6f40320d26')
  .then(response => this.setState({ articles: response.data.articles }));
}

renderArticles() {
  return this.state.articles.map(article =>
    <ArticleDetail key={article.publishedAt} article={article} />
  );
}

  render() {
    return (
      <ScrollView>
        {this.renderArticles()}
      </ScrollView>
    );
  }
}

export default ArticleList;
