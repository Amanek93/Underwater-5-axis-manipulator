import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from '../../ui/components/Header';
import NavigationBar from '@ui/components/NavigationBar';

type Props = {
    navigation: StackNavigationProp<any>;
    route: any;
};

const TelemetryView = observer(function WelcomView({ route, navigation }: Props) {
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
                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                    <NavigationBar activeIndex={5} />
                </View>
                <View style={styles.contentContainer}>
                    {/*<Image source={require('../../../assets/images/images.png')}/>*/}
                    <Text>telemetry</Text>
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
