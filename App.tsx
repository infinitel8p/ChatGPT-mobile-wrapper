import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Animated, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

const userAgent = "Mozilla/5.0 (Linux; Android 13; SM-G988B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36" // Samsung Galaxy S20 Ultra 5G - Android 13 - Chrome Mobile 111

const App = () => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const zoomAnim = useRef(new Animated.Value(1)).current;
    const [animationDone, setAnimationDone] = useState(false);

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
        ]).start(() => setAnimationDone(true)); // Add a callback to update the state
    }, []);

    if (animationDone) {
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
    } else {
        return (
            <>
                <StatusBar style="light" backgroundColor="#343541" translucent={false} />
                <SafeAreaView style={{ flex: 1 }}>
                    <WebView
                        source={{ uri: 'https://chat.openai.com' }}
                        userAgent={userAgent}
                        sharedCookiesEnabled={true}
                        thirdPartyCookiesEnabled={true}
                        cacheEnabled={true}
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
    }
};

export default App;
