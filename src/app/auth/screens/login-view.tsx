import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';

import InputText from '@ui/components/InputText';
import MainButton from '@ui/components/MainButton';

const USERS = [
    {
        name: 'oceantech',
        password: 'oceantech',
        role: 'admin',
    },
    {
        name: 'user',
        password: 'user',
        role: 'user',
    },
];

type Props = {
    navigation: StackNavigationProp<any>;
};

const LoginView = ({ navigation }: Props) => {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isValidLogin, setIsValidLogin] = useState<boolean>(false);
    const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

    const handleValid = () => {
        const findIndex = USERS.findIndex(x => x.name === user);
        if (findIndex !== -1) {
            setIsValidLogin(true);
            if (USERS[findIndex].password === password) setIsValidPassword(true);
            else setIsValidPassword(false);
        } else setIsValidLogin(false);
    };

    useEffect(() => {
        if (isValidLogin && isValidPassword) navigation.navigate('Welcome');
        console.log(`login: ${isValidLogin}`);
        console.log(`password: ${isValidPassword}`);
    }, [isValidLogin, isValidPassword]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../assets/images/ocean-tech-logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.inputTextContainer}>
                <InputText
                    bgColor="white"
                    labelValue={user}
                    onChangeText={userName => {
                        setUser(userName);
                    }}
                    title={i18n.t('screens.loginView.login')}
                />
                <View style={styles.textValidationContainer}>
                    {!isValidLogin && (
                        <Text style={styles.validationText}>
                            {i18n.t('screens.loginView.wrongLogin')}
                        </Text>
                    )}
                </View>
                <InputText
                    bgColor="white"
                    labelValue={password}
                    onChangeText={(userPassword: string) => {
                        setPassword(userPassword);
                    }}
                    secureTextEntry
                    title={i18n.t('screens.loginView.password')}
                />
                <View style={styles.textValidationContainer}>
                    {!isValidPassword && (
                        <Text style={styles.validationText}>
                            {i18n.t('screens.loginView.wrongPassword')}
                        </Text>
                    )}
                    {isValidPassword && (
                        <Text style={styles.validationText}>
                            {i18n.t('screens.loginView.wrongLoginOrPassword')}
                        </Text>
                    )}
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <MainButton
                    onPress={() => handleValid()}
                    style={styles.mainBotton}
                    title={i18n.t('screens.loginView.login')}
                />
            </View>
            <View style={styles.supportContainer}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: 50, height: 50 }} />
                <TouchableOpacity style={{ backgroundColor: 'grey', width: 50, height: 50 }} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    container: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.primary,
        flex: 1,
        justifyContent: 'center',
    },
    inputTextContainer: {
        padding: 10,
    },
    logo: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    mainBotton: {
        height: 20,
        marginHorizontal: 20,
        paddingTop: 15,
        width: 150,
    },
    supportContainer: {
        bottom: 10,
        flexDirection: 'row',
        height: 50,
        position: 'absolute',
        right: 100,
        width: 150,
    },
    textValidationContainer: {
        backgroundColor: 'transparent',
        height: 20,
        width: 300,
    },
    validationText: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.description,
        letterSpacing: 0.09,
    },
});

export default LoginView;
