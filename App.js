import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://reactnative.dev/docs/0.63/webview' }}
        />
      </SafeAreaView>
    );
  }
}

export default MyWeb;

// https://github.com/facebook/react-native/issues/37116