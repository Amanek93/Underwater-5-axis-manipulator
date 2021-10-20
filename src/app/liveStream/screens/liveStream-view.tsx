import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';

import Header from '../../ui/components/Header';
import JoystickPad from '@liveStream/components/JoystickPad';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import Pad from '@liveStream/components/Pad';
import { DrawerNavigationProp } from '@react-navigation/drawer';

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
                {/*<View style={styles.contentContainer}>*/}
                {/*    /!*<Image source={require('../../../assets/images/images.png')}/>*!/*/}
                {/*    <Text>Live Stream</Text>*/}
                {/*    <JoystickPad*/}
                {/*        autoCenter*/}
                {/*        axisPadContainer={{ top: 400 }}*/}
                {/*        onValue={({ x, y }) => {*/}
                {/*            // values are between -1 and 1*/}
                {/*            console.log(x, y);*/}
                {/*        }}*/}
                {/*        resetOnRelease*/}
                {/*    />*/}
                {/*</View>*/}
                <View style={styles.contentContainer}>
                    <Pad />
                </View>
            </View>
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    contentContainer: {
        alignItems: 'center',
        backgroundColor: 'pink',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
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

export default LiveStreamView;
