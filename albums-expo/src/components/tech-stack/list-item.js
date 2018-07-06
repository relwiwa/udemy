import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LayoutAnimation, Platform, Text, TouchableWithoutFeedback, UIManager, View } from 'react-native';

import * as actions from '../../actions';

import CardSection from '../../reusable-components/card-section';

class ListItem extends Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }    
  }
  
  componentWillUdate() {
    LayoutAnimation.spring();
  }
  
  renderDescription() {
    const { item, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.description}>{item.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { id, title } = this.props.item;
    
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.title}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
  description: {
    flex: 1,
  },
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
