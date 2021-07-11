import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginView from '@auth/screens/login-view';
import WelcomeView from '@auth/screens/welcome-view';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="WelcomeView">
            <Stack.Screen component={WelcomeView} name="WelcomeView" />
            <Stack.Screen component={LoginView} name="LoginView" />
        </Stack.Navigator>
    );
};

export default AuthStack;
