/* @flow */

import React from 'react';
import { Linking, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import TouchableNativeFeedbackSafe from '@expo/react-native-touchable-native-feedback-safe';

import Colors from '../constants/Colors';

export default class QRCodeButton extends React.Component {
  render() {
    return (
      <TouchableNativeFeedbackSafe
        onPress={this._handlePressAsync}
        fallback={TouchableHighlight}
        underlayColor="#b7b7b7"
        style={[styles.container, styles.bottomBorder]}>
        <View style={[styles.infoContainer]}>
          <Text style={styles.titleText} ellipsizeMode="tail" numberOfLines={1}>
            Get started with Expo
          </Text>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText} ellipsizeMode="tail" numberOfLines={1}>
              Run projects from expo-cli or Snack.
            </Text>
          </View>
        </View>
      </TouchableNativeFeedbackSafe>
    );
  }

  _handlePressAsync = async () => {
    Linking.openURL('https://docs.expo.io/versions/latest/introduction/installation/');
  };
}

const styles = StyleSheet.create({
  bottomBorder: {
    flexGrow: 1,
    borderBottomColor: Colors.light.separator,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
  },
  infoContainer: {
    paddingTop: 13,
    paddingLeft: 20,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingBottom: 10,
  },
  titleText: {
    color: Colors.light.blackText,
    fontSize: 15,
    marginRight: 70,
    marginBottom: 2,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontWeight: '400',
        marginTop: 1,
      },
    }),
  },
  subtitleText: {
    marginRight: 5,
    flex: 1,
    color: Colors.light.greyText,
    fontSize: 13,
  },
});
