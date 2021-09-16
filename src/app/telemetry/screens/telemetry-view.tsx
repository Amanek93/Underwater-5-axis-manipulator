import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';

import Header from '../../ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type Props = {
    navigation: DrawerNavigationProp<any>;
};

const TelemetryView = observer(function WelcomeView({ navigation }: Props) {
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
            <View style={styles.contentContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <NavigationToggleButton
                            onPress={() =>
                                navigation.toggleDrawer()}
                            title="nawigacja"
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL_COLORS.primary,

    },
    contentContainer: {
        backgroundColor: 'blue',
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

export default TelemetryView;
