import Navigation from '@navigation/Navigation';
import React, { useEffect } from 'react';
import i18n from '@shared/language/i18n';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const App = () => {
    const language: string | null = 'PL';

    useEffect(() => {
        i18n.setLocale(language);
    }, [language]);

    return (
        <SafeAreaProvider>
            <StatusBar animated hidden />
            <Navigation />
        </SafeAreaProvider>
    );
};

export default App;
