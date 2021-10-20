import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';

import Header from '../../ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import JoystickPad from "@liveStream/components/JoystickPad";

type Props = {
    navigation: DrawerNavigationProp<any>;
};

const LiveStreamView = observer(function WelcomeView({ navigation }: Props) {
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
            <View style={{}}>
                <View style={styles.contentContainer}>
                    {/*<Image source={require('../../../assets/images/images.png')}/>*/}
                    <Text>Live Stream</Text>
                    <JoystickPad
                        resetOnRelease={true}
                        autoCenter={true}
                        axisPadContainer={{top: 400,}}
                        onValue={({ x, y}) => {
                            // values are between -1 and 1
                            console.log(x, y);
                        }} />
                </View>
            </View>
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        backgroundColor: 'pink',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
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

export default LiveStreamView;
