import React, { useEffect } from 'react';
import {  StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ProgressCircle } from 'react-native-svg-charts';
import {GLOBAL_COLORS, GLOBAL_FONTSIZES, GLOBAL_ICONS} from '@ui';

import Icon from '@ui/components/Icon';

import Header from '../../ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';


type Props = {
    navigation: DrawerNavigationProp<any>;
};

const HomeView = observer(function WelcomView({ navigation }: Props) {
    useEffect(
        () =>
            navigation.addListener('beforeRemove', e => {
                e.preventDefault();
            }),
        [navigation],
    );


    return (
        <SafeAreaView style={styles.container}>
            <Header
            />
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
            <View style={styles.contentContainer}>
                <View style={styles.leftContentContainer}>

                </View>
                <View style={styles.rightContentContainer}>
                    <View style={styles.progressCircleContainer}>
                    <ProgressCircle
                        style={{ height: 200}}
                        progress={0.5}
                        progressColor={GLOBAL_COLORS.secondary}
                        strokeWidth={20}
                        endAngle={Math.PI/2}
                        startAngle={-Math.PI/2}
                    />
                    <View style={styles.countContainer}>

                            <TouchableOpacity>
                                <Icon
                                    color={GLOBAL_COLORS.icon}
                                    name={GLOBAL_ICONS.angleLeft}
                                    size={30}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            <Text>0</Text>
                        <TouchableOpacity>
                            <Icon
                                color={GLOBAL_COLORS.icon}
                                name={GLOBAL_ICONS.angleRight}
                                size={30}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                    </View>
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
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flex:1,
    },
    navigationBarContainer: {
        justifyContent: 'flex-start',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontSize: GLOBAL_FONTSIZES.header,
    },
    leftContentContainer:{
        backgroundColor:'red',
        flex:10,
    },
    rightContentContainer:{
        backgroundColor: GLOBAL_COLORS.leftViewContainer,
        flex:5,
        borderRadius: 20,
    },
    progressCircleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    countContainer:{
        backgroundColor: 'red',
        width: 200,
        height: 50,
        flexDirection: 'row',
        bottom: 90,
    },
    incrementButton: {
        width: 60,
        height: 50,

    }
});

export default HomeView;
