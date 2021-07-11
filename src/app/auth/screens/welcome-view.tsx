import React, {useRef, useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, View, Animated} from 'react-native';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';

import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';

interface Props {
    navigation: StackNavigationProp<any>;
}

const WelcomView = observer(function WelcomView({ navigation }: Props) {
    const fadeAnim = useState(new Animated.Value(1))[0]


        function fadeOut() {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true
            }).start()
        }

        useEffect(()=> {
            fadeOut();
        },[]);
        setTimeout(()=>{
            navigation.navigate('LoginView')
        },3000)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                    }}>
                    <Image style={styles.logo} source={require('../../../assets/images/ocean-tech-logo.png')}/>
                </Animated.View>
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
});

export default WelcomView;
