import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    navigation: StackNavigationProp<never>;
};

const LoginView = ({ navigation }: Props) => {
    const [user, setUser] = useState<string>('user');
    const [password, setPassword] = useState<string>('user');
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

    const translateY = useRef(new Animated.Value(0)).current;
    const [onTop, setOnTop] = useState(false);

    const animate = () => {
        Animated.spring(translateY, {
            toValue: onTop ? 0 : -700,
            useNativeDriver: false,
        }).start();
        setOnTop(!onTop);
    };
    const animate1 = () => {
        Animated.spring(translateY, {
            toValue: onTop ? 0 : -400,
            useNativeDriver: false,
            // bounciness: 5,
            speed: 4,
        }).start();
        setOnTop(!onTop);
    };

    useEffect(() => {
        if (isValid.user && isValid.password) navigation.navigate('Home', { screen: 'HomeView' });
    }, [isValid.user, isValid.password, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.logoContainer, { transform: [{ translateY }] }]}>
                <Image
                    source={require('../../../assets/images/ocean-tech-logo.png')}
                    style={styles.logo}
                />
            </Animated.View>
            <View style={styles.animationButtonContainer}>
                <MainButton
                    onPress={() => {
                        animate();
                        animate1();
                    }}
                    style={styles.animationButton}
                    title={i18n.t('screens.loginView.login')}
                />
            </View>
            <Animated.View style={[styles.animatdContainer, { transform: [{ translateY }] }]}>
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
                        {!isValid.user && isSubmit && (
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
                        {!isValid.password && isValid.user && isSubmit && (
                            <Text style={styles.validationText}>
                                {i18n.t('screens.loginView.wrongPassword')}
                            </Text>
                        )}
                        {!isValid.password && !isValid.user && isSubmit && (
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
            </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    animatdContainer: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: 500,
        top: 700,
        width: '100%',
    },
    animationButton: {
        width: 150,
    },
    animationButtonContainer: {
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 550,
    },
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
        width: 350,
    },
    logo: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        position: 'absolute',
        top: 350,
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
