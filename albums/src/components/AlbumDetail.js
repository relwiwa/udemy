import React from 'react';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  // Elements within Card-Tag get passed on to its props.children and
  // rendered by calling props.children within render function
  // Elements within Card-Section-Tag get passed on to its props.children
  // and rendered by calling props.children within render function
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
