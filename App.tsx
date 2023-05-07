import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomWebView from './components/CustomWebView';

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
                    <CustomWebView />
                </SafeAreaView>
            </>
        );
    } else {
        return (
            <>
                <StatusBar style="light" backgroundColor="#343541" translucent={false} />
                <SafeAreaView style={{ flex: 1 }}>
                    <CustomWebView />
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
                            source={require('./assets/splash_1.png')}
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
