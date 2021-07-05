import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';

import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';

import InputText from '@ui/components/InputText';
import MainButton from '@ui/components/MainButton';

type Props = {
    example: boolean;
};

const LoginView = observer(function LoginView({ example }: Props) {
    return (
        <SafeAreaView style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../assets/images/logootools.png')}/>
                </View>
                <View>
                    <InputText bgColor={'white'} title={'LOGIN'}/>
                    <InputText bgColor={'white'} title={'PASSWORD'}/>
                </View>
                <View style={styles.buttonContainer}>
                    <MainButton title={'REGISTER'} onPress={()=>console.warn('dupa1')} style={{width: 150}}/>
                    <MainButton title={'LOGIN'} onPress={()=>console.warn('dupa2')} style={{width: 150}}/>
                </View>
        </SafeAreaView>
    );
});

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
    },
    logo:{
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    buttonContainer:{
        flexDirection: 'row',
        padding: 10,
        justifyContent:'space-between',
    }
});

export default LoginView;
