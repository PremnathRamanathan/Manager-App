// Imports

import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Create a Component


class Header extends Component {
  componentWillMount() {
    console.log('header.js mounted');
  }

  render() {
      return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{this.props.headerText}</Text>
        </View>
      );
    }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    paddingBottom: 10,
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
