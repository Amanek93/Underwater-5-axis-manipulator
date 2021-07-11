import React, { useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS,GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';

import InputText from '@ui/components/InputText';
import MainButton from '@ui/components/MainButton';

const users = [{
    name: 'oceantech',
    password: 'oceantech',
    role: 'admin',
},
    {
    name: 'user',
    password: 'user',
    role: 'user',
}]




type Props = {
    navigation: StackNavigationProp<any>;
};

const LoginView = ({ navigation }: Props) => {
    const [user, setUser] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isValidName, setIsValidName] = useState<boolean>(true);
    const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
    const [isValidFoundPassword, setIsValidFoundPassword] = useState<boolean>(true);
    const [found, setFound] = useState<number>(-1);

    const handleValidUser = (value: string) => {
        var findIndex = users.findIndex(x=> x.name === value);
            if((findIndex != -1) && (value != null)) {
                if (value === users[findIndex].name) {
                    setIsValidName(true);
                    console.log(value);
                    console.log(findIndex);
                    setFound(findIndex);
                } else {
                    setIsValidName(false);
                    setFound(findIndex);
                };
            } else {
                setIsValidName(false);
                setFound(findIndex);
            };
    };

    const handleValidPassword = (value: string) => {
        if((found != -1) && (value != null)) {
            var findIndex = users.findIndex(x=> x.name === value);
            if(found === findIndex){
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
        } else if(value != null){
            setIsValidFoundPassword(false);
            console.log(found);
            console.log('b');
        }
    };

    const loginButtonHandler = (myIndex: number, myLogin: string, myPassword: string) => {
        handleValidUser(myLogin);
        handleValidPassword(myPassword);
        if(myIndex != -1) {
            if ((users[myIndex].name === myLogin) && (users[myIndex].password === myPassword)) {
                console.log('zadzialalo');
                return navigation.navigate('Welcome');
            } else console.log('nie zadzialalo')
        }else console.log('index -1');
    }

    return (
        <SafeAreaView style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../assets/images/ocean-tech-logo.png')}/>
                </View>
                <View style={styles.inputTextContainer}>
                    <InputText
                        labelValue={user}
                        bgColor={'white'}
                        title={'LOGIN'}
                        onChangeText={(userName: string) => {
                            setUser(userName);
                        }}


                    />
                    <View style={styles.textValidationContainer}>
                    {!isValidName ? (
                        <Text style={styles.validationText}>
                            Wrong login or email!
                        </Text>
                    ) : null}
                    </View>
                    <InputText
                        labelValue={password}
                        bgColor={'white'}
                        title={'PASSWORD'}
                        onChangeText={(userPassword: string) => {
                            setPassword(userPassword);
                        }}

                        secureTextEntry={true}
                    />
                    <View style={styles.textValidationContainer}>
                    {(isValidPassword === false) ? (
                        <Text style={styles.validationText}>
                            Wrong password! Check CAPS LOCK!
                        </Text>
                    ) : null}
                    {((isValidFoundPassword === false) && (isValidPassword === true)) ? (
                        <Text style={styles.validationText}>
                            Incorrect login or passowrd!
                        </Text>
                    ) : null}
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <MainButton title={'REGISTER'} onPress={()=>console.warn('dupa')} style={styles.mainBotton}/>
                    <MainButton title={'LOGIN'} onPress={()=>loginButtonHandler(found, user, password)} style={styles.mainBotton}/>
                </View>
            <View style={styles.supportContainer}>
                <TouchableOpacity style={{backgroundColor: 'white', width: 50, height: 50,}}/>
                <TouchableOpacity style={{backgroundColor: 'grey', width: 50, height: 50,}}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL_COLORS.primary,
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontSize: GLOBAL_FONTSIZES.header,
    },
    logoContainer:{
        justifyContent:'center',
        alignItems: 'center',
        padding: 10,
    },
    logo:{
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    buttonContainer:{
        flexDirection: 'row',
        padding: 10,
    },
    inputTextContainer:{
        padding:10,
    },
    textValidationContainer:{
        width: 300,
        height: 20,
        backgroundColor: 'transparent',
    },
    mainBotton:{
        width: 150,
        height: 20,
        marginHorizontal: 20,
        paddingTop:15,
    },
    validationText:{
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.description,
        letterSpacing: 0.09,
    },
    supportContainer: {
        flexDirection: 'row',
        width: 150,
        height: 50,
        position: 'absolute',
        bottom: 10,
        right: 100,
    },
    supportIcon: {
        width: 45,
        height: 45,
    }
});

export default LoginView;
