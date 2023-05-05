import React, { useEffect, useRef } from 'react';
import { SafeAreaView, Animated, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

const userAgent = "Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"

const App = () => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const zoomAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(zoomAnim, {
                toValue: 25,
                duration: 2000,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <>
            <StatusBar style="light" backgroundColor="#343541" translucent={false} />
            <SafeAreaView style={{ flex: 1 }}>
                <WebView
                    source={{ uri: 'https://chat.openai.com' }}
                    userAgent={userAgent}
                    sharedCookiesEnabled={true}
                />
                <Animated.View style={[
                    StyleSheet.absoluteFill,
                    {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: fadeAnim,
                        transform: [{ scale: zoomAnim }]
                    },
                ]}>
                    <Image
                        source={require('./assets/splash.png')}
                        resizeMode="contain"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Animated.View>
            </SafeAreaView>
        </>
    );
};

export default App;
