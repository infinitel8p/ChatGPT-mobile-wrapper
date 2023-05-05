import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

const userAgent = "Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"

export default class MyWeb extends Component {
    render() {
        return (
            <>
                <StatusBar style="light" backgroundColor="#343541" translucent={false} />
                <SafeAreaView style={{ flex: 1 }}>
                    <WebView
                        source={{ uri: 'https://chat.openai.com' }}
                        userAgent={userAgent}
                        sharedCookiesEnabled={true}
                    />
                </SafeAreaView>
            </>
        );
    }
}