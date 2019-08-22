import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { SignInWithApple, SignInWithAppleButton } from '@react-native-community/apple-authentication';

interface State {

}

export default class GoogleSignInScreen extends React.Component<{}, State> {
  static navigationOptions = {
    title: 'Apple Authentication',
  };

  readonly state: State = {};

  signIn = async () => {
    try {
      debugger;
      const result = await SignInWithApple.requestAsync({
        requestedScopes: [SignInWithApple.Scope.FULL_NAME, SignInWithApple.Scope.EMAIL],
      });
      console.warn(result);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    console.log(SignInWithApple)
    return (
      <View style={styles.container}>
        <SignInWithAppleButton
          buttonStyle={SignInWithApple.ButtonStyle.BLACK}
          buttonType={SignInWithApple.ButtonType.DEFAULT}
          style={{ height: 44, width: 200 }}
          onPress={this.signIn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
