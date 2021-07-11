import HomeView from '@home/screens/home-view';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen component={HomeView} name="HomeView" />
        </Stack.Navigator>
    );
};

export default HomeStack;
