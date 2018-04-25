import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Button, Card, CardSection } from './common';


const ArticleDetail = ({ article }) => {

  const { title, description, url, urlToImage  } = article
  console.log(article);



  return (
    <Card>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{description}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{url: urlToImage || ""}} style={styles.imageStyle} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Read More
        </Button>
       </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default ArticleDetail;
