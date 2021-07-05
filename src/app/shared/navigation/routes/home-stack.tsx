import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import loginView from '../../../auth/screens/login-view';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen component={loginView} name="login" />
        </Stack.Navigator>
    );
};

export default HomeStack;
