import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';

import Header from '../../ui/components/Header';

import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type Props = {
    navigation: DrawerNavigationProp<any>;
};

const HelpView = observer(function WelcomeView({ navigation }: Props) {
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
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.contentContainer}>
                    <Image source={require('../../../assets/images/images.png')} />
                    <Text>Help</Text>
                </View>
            </View>
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL_COLORS.primary,
        flex: 1,
    },
    contentContainer: {
        backgroundColor: 'pink',
        height: '100%',
        width: '100%',
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationBarContainer: {
        justifyContent: 'flex-start',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontSize: GLOBAL_FONTSIZES.header,
    },
});

export default HelpView;
