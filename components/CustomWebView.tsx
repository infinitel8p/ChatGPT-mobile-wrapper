import React, { useEffect, useRef, useState } from 'react';
import { RefreshControl, ScrollView, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

const CustomWebView = () => {
    // const userAgent = "Mozilla/5.0 (Linux; Android 13; SM-G988B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36" // Samsung Galaxy S20 Ultra 5G - Android 13 - Chrome Mobile 111
    const source = { uri: 'https://chat.openai.com' };
    const colorScheme = useColorScheme();
    const [refreshing, setRefreshing] = useState(false);
    const webViewRef = useRef(null);
    const [userAgent, setUserAgent] = useState('');

    const onRefresh = () => {
        setRefreshing(true);
        webViewRef.current.reload();
    };

    const handleWebViewLoadEnd = () => {
        setRefreshing(false);
        webViewRef.current.injectJavaScript(injectedJavaScript);
    };

    // Fetch the device's user agent
    useEffect(() => {
        const appName = Constants.deviceName;
        const customUserAgent = `Mozilla/5.0 (${appName}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36`;
        setUserAgent(customUserAgent);
    }, []);

    const injectedJavaScript = `
    (function() {
      const originalMatchMedia = window.matchMedia;
      const forcedColorScheme = '${colorScheme}';
      
      window.matchMedia = function(query) {
        if (query === '(prefers-color-scheme: dark)') {
          return {
            matches: forcedColorScheme === 'dark',
            addListener: () => {},
            removeListener: () => {},
          };
        } else if (query === '(prefers-color-scheme: light)') {
          return {
            matches: forcedColorScheme === 'light',
            addListener: () => {},
            removeListener: () => {},
          };
        } else {
          return originalMatchMedia(query);
        }
      };
    })();
    true;
  `;

    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <WebView
                ref={webViewRef}
                source={source}
                userAgent={userAgent}
                sharedCookiesEnabled={true}
                thirdPartyCookiesEnabled={true}
                cacheEnabled={true}
                injectedJavaScript={injectedJavaScript}
                onLoadEnd={handleWebViewLoadEnd}
            />
        </ScrollView>
    );
};

export default CustomWebView;
