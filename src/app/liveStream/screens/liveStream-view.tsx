import * as React from 'react';
import  {useEffect} from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';

// import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';
import { StackNavigationProp } from '@react-navigation/stack';

import NavigationBar from '@ui/components/NavigationBar';
import Header from '../../ui/components/Header';

type Props = {
    navigation: StackNavigationProp<any>;
};

const LiveStreamView = observer(function WelcomView({ navigation }: Props) {
    useEffect(
        () =>
            navigation.addListener('beforeRemove', e => {
                e.preventDefault();
            }),
        [navigation],
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <View style={{flexDirection: 'row',}}>
            <View style={{alignItems: 'flex-start', justifyContent:'flex-end'}}>
            <NavigationBar/>
            </View>
            <View style={styles.contentContainer}>
                {/*<Image source={require('../../../assets/images/images.png')}/>*/}
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
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontSize: GLOBAL_FONTSIZES.header,
    },
    navigationBarContainer: {
        justifyContent: 'flex-start',

    },
    contentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
    }
});

export default LiveStreamView;
