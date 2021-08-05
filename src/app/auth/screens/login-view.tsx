import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '@ui';

import Icon from '@ui/components/Icon';
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
    const [isValid, setIsValid] = useState<{ user: boolean; password: boolean }>({
        user: false,
        password: false,
    });
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const handleValid = () => {
        const findIndex = USERS.findIndex(x => x.name === user);
        setIsSubmit(true);
        if (findIndex !== -1) {
            if (USERS[findIndex].password === password) {
                setIsValid({
                    user: true,
                    password: true,
                });
            } else {
                setIsValid({
                    user: true,
                    password: false,
                });
            }
        } else {
            setIsValid({
                user: false,
                password: false,
            });
        }
    };

    useEffect(() => {
        if (isValid.user === true && isValid.password === true)
            navigation.navigate('Home', { screen: 'HomeView' });
        // console.log(`login: ${isValidLogin}`);
        // console.log(`login: ${user}`);
        // console.log(`password: ${isValidPassword}`);
        // console.log(`password: ${password}`);
    }, [isValid.user, isValid.password]);

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
                    {isValid.user === false && isSubmit === true && (
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
                    {isValid.password === false && isValid.user === true && isSubmit === true && (
                        <Text style={styles.validationText}>
                            {i18n.t('screens.loginView.wrongPassword')}
                        </Text>
                    )}
                    {isValid.password === false && isValid.user === false && isSubmit === true && (
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
                <TouchableOpacity style={{ width: 50, height: 50 }}>
                    <Icon color={GLOBAL_COLORS.icon} name={GLOBAL_ICONS.exclamationCircle} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50 }}>
                    <Icon color={GLOBAL_COLORS.icon} name={GLOBAL_ICONS.houseUser} />
                </TouchableOpacity>
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
