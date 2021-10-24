import React, { useEffect, useState } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';

// import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';

interface Props {
    navigation: StackNavigationProp<any>;
}

const WelcomView = observer(function WelcomView({ navigation }: Props) {
    const fadeAnim = useState(new Animated.Value(0))[0];

    function fadeOut() {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }

    useEffect(() => {
        fadeOut();
    }, []);
    setTimeout(() => {
        navigation.navigate('LoginView');
    }, 3000);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                    }}
                >
                    <Image
                        source={require('../../../assets/images/ocean-tech-logo.png')}
                        style={styles.logo}
                    />
                </Animated.View>
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.primary,
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'stretch',
        width: 600,
        height: 302,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontSize: GLOBAL_FONTSIZES.header,
    },
});

export default WelcomView;
