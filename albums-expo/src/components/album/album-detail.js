import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import Button from '../../reusable-components/button';
import Card from '../../reusable-components/card';
import CardSection from '../../reusable-components/card-section';

const AlbumDetail = ({ album }) => {
  const { artist, image, thumbnail_image, title, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: thumbnail_image }}
            style={styles.thumbnail}
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button
          onPress={() => Linking.openURL(url)}
        >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
}

export default AlbumDetail;
