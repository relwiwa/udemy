import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { artist, image, title, thumbnail_image, url } = album;
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    thumbnailContainerStyle,
    thumbnailStyle
  } = styles;

  // Elements within Card-Tag get passed on to its props.children and
  // rendered by calling props.children within render function
  // Elements within Card-Section-Tag get passed on to its props.children
  // and rendered by calling props.children within render function
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      {/* - onPress is a property, not an attribute to handle events
          - Button does not have onPress attribute
          - It gets passed on to TouchableOpacity, which has an onPress attribute */}
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          {/* Text will get passed to Button component and be available
              via props.children */}
          Buy now
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
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
