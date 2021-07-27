import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from '@navigation/routes/auth-stack';
import HomeStack from '@navigation/routes/home-stack';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Auth">
                <Stack.Screen component={HomeStack} name="Home" />
                <Stack.Screen component={AuthStack} name="Auth" />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
