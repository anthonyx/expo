/* @flow */

import React from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';

import Colors from '../constants/Colors';
import { Ionicons } from './Icons';
import { StyledView } from './Views';
import { StyledText } from './Text';

export default class SeeAllProjectsButton extends React.Component {
  static defaultProps = {
    label: 'See all',
    snacks: [],
  };

  render() {
    let { snacks } = this.props;

    if (!snacks || !snacks.length) {
      return <View />;
    }

    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        underlayColor="#c3c3c3"
        fallback={TouchableHighlight}>
        <StyledView style={styles.container}>
          <StyledText style={styles.buttonText} lightColor={Colors.light.blackText}>
            {this.props.label}
          </StyledText>
          <View style={styles.arrowIconContainer}>
            <Ionicons
              name="ios-arrow-forward"
              size={22}
              color={Colors.light.greyText}
              style={{ marginTop: -1, marginLeft: 15 }}
            />
          </View>
        </StyledView>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    paddingTop: 15,
    paddingBottom: 12,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 15,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontWeight: '400',
      },
    }),
  },
  arrowIconContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});
