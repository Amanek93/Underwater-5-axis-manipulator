import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';

import InputText from '@ui/components/InputText';
import MainButton from '@ui/components/MainButton';

const users = [
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
    const [isValidName, setIsValidName] = useState<boolean>(true);
    const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
    const [isValidFoundPassword, setIsValidFoundPassword] = useState<boolean>(true);
    const [found, setFound] = useState<number>(-1);

    const handleValidUser = (value: string) => {
        const findIndex = users.findIndex(x => x.name === value);
        if (findIndex !== -1 && value) {
            if (value === users[findIndex].name) {
                setIsValidName(true);
                console.log(value);
                console.log(findIndex);
                setFound(findIndex);
            } else {
                setIsValidName(false);
                setFound(findIndex);
            }
        } else {
            setIsValidName(false);
            setFound(findIndex);
        }
    };

    const handleValidPassword = (value: string) => {
        if (found !== -1 && value) {
            const findIndex = users.findIndex(x => x.name === value);
            if (found === findIndex) {
                setIsValidPassword(true);
                setIsValidFoundPassword(true);
                console.log(findIndex);
                console.log(found);
                console.log('a');
            } else {
                setIsValidPassword(false);
                setIsValidFoundPassword(true);
                console.log('cr');
            }
        } else if (value) {
            setIsValidFoundPassword(false);
            console.log(found);
            console.log('b');
        }
    };

    const loginButtonHandler = (myIndex: number, myLogin: string, myPassword: string) => {
        handleValidUser(myLogin);
        handleValidPassword(myPassword);
        if (myIndex !== -1) {
            if (users[myIndex].name === myLogin && users[myIndex].password === myPassword) {
                console.log('zadzialalo');
                return navigation.navigate('Welcome');
            } else console.log('nie zadzialalo');
        } else console.log('index -1');
    };

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
                    {!isValidName && (
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
                    {!isValidFoundPassword && isValidPassword && (
                        <Text style={styles.validationText}>
                            {i18n.t('screens.loginView.wrongLoginOrPassword')}
                        </Text>
                    )}
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <MainButton
                    onPress={() => loginButtonHandler(found, user, password)}
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
