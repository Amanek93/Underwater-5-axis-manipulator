import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginView from '../../../auth/screens/login-view';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen component={LoginView} name="Auth" />
        </Stack.Navigator>
    );
};

export default AuthStack;
