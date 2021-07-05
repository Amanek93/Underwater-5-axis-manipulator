import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, View } from 'react-native';
import { observer } from 'mobx-react-lite';

import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';


type Props = {
    example: boolean;
};

const WelcomView = observer(function WelcomView({ example }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../../assets/images/logootools.png')}/>
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
        alignItems: 'center'
    },
});

export default WelcomView;
