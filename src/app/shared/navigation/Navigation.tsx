import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from '@navigation/routes/auth-stack';
import HomeStack from '@navigation/routes/home-stack';

const Navigation = () => {
    const isAuth = false;

    return <NavigationContainer>{isAuth ? <HomeStack /> : <AuthStack />}</NavigationContainer>;
};

export default Navigation;
