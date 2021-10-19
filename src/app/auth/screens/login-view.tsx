import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES} from '@ui';

import InputText from '@ui/components/InputText';
import BlueButton from "@ui/components/BlueButton";
import DropDownPickerList from "@auth/screens/components/DropDownPickerList";


type Props = {
    navigation: StackNavigationProp<never>;
};

const LoginView = ({ navigation }: Props) => {
    const [user, setUser] = useState<string>('User 1');
    const [password, setPassword] = useState<string>('user1');
    const [secureText, setSecureText] = useState<boolean>(true);
    const [isValid, setIsValid] = useState<{ user: boolean; password: boolean }>({
        user: false,
        password: false,
    });
    const [wrongPassword, setWrongPassword] = useState<boolean>(true);
    const [value, setValue] = useState('User 1');
    const [userArray, setUserArray] = useState([
        { label: 'User 1', value: 'User 1', password: 'user1', role: 'admin' },
        { label: 'User 2', value: 'User 2', password: 'user2', role: 'user' },
        { label: 'User 3', value: 'User 3', password: 'user3', role: 'user' },

    ]);
    const [open, setOpen] = useState<boolean>(false);

    const handleValid = () => {
        const findIndex = userArray.findIndex(x => x.label === user);
        if (findIndex !== -1) {
            if (userArray[findIndex].password === password) {
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
        }
    };
    const handleHideSecureText = () => {
        setSecureText(!secureText);
    }
    const scale = useRef(new Animated.Value(2)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const tX2 = useRef(new Animated.Value(0)).current;

    const translateAnimated = () => {
        Animated.timing(translateX, {
            toValue: -800,
            useNativeDriver: false,
            duration: 1000,
        }).start();
    };
    const translateAnimated2 = () => {
        Animated.timing(tX2, {
            toValue: -400,
            useNativeDriver: false,
            duration: 1000,
        }).start();
    };
    const scaleAnimated = () => {
        Animated.spring(scale, {
            toValue:1,
            useNativeDriver: false,
            velocity: 2,
            speed: 0.1,
        }).start();
    }
    useEffect( () => {
        translateAnimated();
        translateAnimated2();
        scaleAnimated();
    })
    useEffect(() => {
        if (isValid.user && isValid.password) {
            navigation.navigate('Home', {screen: 'HomeView'});
        } else if (!isValid.password) setWrongPassword(!wrongPassword)
    }, [isValid.user, isValid.password, navigation]);
    useEffect ( () => {
        if (user != value) setUser(value);
    },[user, value]);

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.logoContentContainer,{transform:[{scale},{translateX: tX2}]} ]}>
                <Image
                    source={require('../../../assets/images/ocean-tech-logo.png')}
                    style={styles.logo}
                    />
            </Animated.View>
            <Animated.View style={[styles.loginContentContainer, {transform:[{translateX: translateX}]}]}>
                <View style={styles.loginContainer}>
                    <View style={styles.login}>
                        <DropDownPickerList
                            items={userArray}
                            open={open}
                            setItems={setUserArray}
                            setOpen={setOpen}
                            value={value}
                            setValue={setValue}
                        />
                        { (() => {
                            switch(value) {
                            case 'User 1':
                            return(
                            <View style={styles.avatarContainer}>
                                <Image
                                style={styles.avatarImage}
                                source={require('@assets/images/malphite.png')}/>
                            </View>
                            )
                            case 'User 2':
                            return(
                            <View style={styles.avatarContainer}>
                                <Image
                                style={styles.avatarImage}
                                source={require('@assets/images/darius.png')}/>
                            </View>
                            )
                            case 'User 3':
                            return (
                            <View style={styles.avatarContainer}>
                                <Image
                                style={styles.avatarImage}
                                source={require('@assets/images/mundo.png')}/>
                            </View>
                            )
                        }
                        })()}
                        <View style={styles.dropDownContainer}>
                        </View>
                        <View style={styles.inputTextContainer}>
                        <InputText
                            title={i18n.t('screens.loginView.password')}
                            placeHolder={i18n.t('screens.loginView.placeholderPassword')}
                            showText={i18n.t('screens.loginView.show')}
                            selectionColor={'white'}
                            placeholderTextColor={'white'}
                            secureTextEntry={secureText}
                            onPressHideSecureText={handleHideSecureText}
                            labelValue={password}
                            borderCl={'red'}
                            wrongPassword={wrongPassword}
                            wrongPasswordMessage={i18n.t('screens.loginView.wrongPassword')}
                            onChangeText={(userPassword: string) => {
                                setPassword(userPassword);
                            }}
                        />
                        </View>
                        <View style={styles.loginButtonContainer}>
                            <BlueButton
                                title={i18n.t('screens.loginView.login')}
                                color={GLOBAL_COLORS.secondary}
                                style={styles.blueButtonContainer}
                                enabled={true}
                                onPress={handleValid}
                            />
                        </View>
                    </View>
                </View>
            </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        position: 'absolute',
        right: 0,
        top: -60,
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 100,
    },
    dropDownContainer: {
        flex:1,
    },
    loginButtonContainer: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    dropDownPicker: {
        backgroundColor: 'rgba(37, 55, 91, 1)',
        borderColor: 'white',
        borderWidth: 2,
        width: 374,
        height: 88,
        left: 75,
        position:'absolute',
        top: 48,
    },
    avatarImage: {
      borderRadius: 100,
        width: 200,
        height: 200,
    },
    container: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.primary,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    loginContentContainer: {
        flex:4,
        left:800,
    },
    loginContainer: {
        flex:1,
        backgroundColor: 'rgba(17, 38, 78, 1)',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        backgroundColor: 'rgba(196, 196, 196, 0.11)',
        width: 712,
        height: 545,
        borderRadius: 50,
    },
    inputTextContainer: {
        flex:1,
    },
    logo: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
    },
    logoContentContainer: {
        alignItems: 'center',
        left:400,
        flex:3,
    },
    blueButtonContainer: {
        height: 88,
        width: 560,
        borderRadius: 10,
    },
    crossOutTitleContainer: {
        backgroundColor: 'rgba(37, 55, 91, 1)',
        width: 150,
        height:20,
        left: 130,
        top: 38,
        zIndex:5,
        elevation:5,
        position: 'absolute',
    },
    textContainer: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
});

export default LoginView;
