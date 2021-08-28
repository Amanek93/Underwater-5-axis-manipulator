import Navigation from '@navigation/Navigation';
import React, { useEffect } from 'react';
import i18n from '@shared/language/i18n';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import { persistStore } from 'redux-persist';
import { store } from '@store';

const rehydrateStore = () => {
    persistStore(store, null, () => {
        store.getState();
    });
};

const App = () => {
    // useEffect(() => {
    //     rehydrateStore();
    // }, []);

    const language: string | null = 'PL';

    useEffect(() => {
        i18n.setLocale(language);
    }, [language]);

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar animated hidden />
                <Navigation />
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
