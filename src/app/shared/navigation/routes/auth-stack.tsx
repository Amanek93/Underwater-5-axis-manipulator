import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeView from '../../../auth/screens/welcome-view';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen component={WelcomeView} name="Welcome" />
        </Stack.Navigator>
    );
};

export default AuthStack;
