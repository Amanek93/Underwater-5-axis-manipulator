import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';

import ControlSlider from '@home/components/ControlSlider';
import Header from '../../ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';

type Props = {
    navigation: DrawerNavigationProp<never>;
};

const HomeView = observer(function WelcomeView({ navigation }: Props) {
    useEffect(
        () =>
            navigation.addListener('beforeRemove', e => {
                e.preventDefault();
            }),
        [navigation],
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
            <View style={styles.contentContainer}>
                <View style={styles.leftContentContainer} />
                <View style={styles.rightContentContainer}>
                    <ControlSlider />
                </View>
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL_COLORS.primary,
        flex: 1,
    },
    contentContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        flex: 1,
    },
    contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    countButton: {
        height: 40,
        width: 70,
    },
    countContainer: {
        backgroundColor: 'red',
        bottom: 90,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        width: 250,
    },
    countMeter: {
        height: 40,
        width: 100,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    incrementButton: {
        height: 40,
        width: 60,
    },
    leftContentContainer: {
        backgroundColor: 'red',
        flex: 10,
    },
    navigationBarContainer: {
        justifyContent: 'flex-start',
    },
    progressCircleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContentContainer: {
        backgroundColor: GLOBAL_COLORS.leftViewContainer,
        borderRadius: 20,
        flex: 5,
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
});

export default HomeView;
