import React, { useEffect, useState } from 'react';
import {  StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import {GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS} from '@ui';

import CircularSlider from 'rn-circular-slider'



// https://codepen.io/anthonydugois/pen/oLEWrb


import Header from '../../ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import MainButton from "@ui/components/MainButton";


type Props = {
    navigation: DrawerNavigationProp<any>;
};

const HomeView = observer(function WelcomView({ navigation }: Props) {
    const [count, setCount] = useState<number>(0);
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
                        <CircularSlider
                        step={1}
                        min={-90}
                        max={90}
                        value={count}
                        onChange={count => setCount(count)}
                        contentContainerStyle={styles.contentContainerStyle}
                        strokeWidth={15}
                        buttonBorderColor="#3FE3EB"
                        buttonFillColor="#fff"
                        buttonStrokeWidth={15}
                        openingRadian={Math.PI/2}
                        buttonRadius={5}
                        linearGradient={[{ stop: '0%', color: GLOBAL_COLORS.secondary }, { stop: '100%', color: GLOBAL_COLORS.extra }]}
                        >
                            <Text style={styles.text}>Axis 1</Text>
                        </CircularSlider>
                    <View style={styles.countContainer}>
                        <MainButton onPress={()=>setCount(count-1)}
                                    iconSize={20}
                                    iconExist={GLOBAL_ICONS.angleLeft}
                                    style={styles.countButton}
                        />
                            <MainButton onPress={null}
                                        enabled={true}
                                        title={count}
                                        style={styles.countMeter}
                                        />
                        <MainButton onPress={()=>setCount(count+1)}
                                    iconSize={20}
                                    iconExist={GLOBAL_ICONS.angleRight}
                                    style={styles.countButton}
                        />
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
    text: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
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
        width: 250,
        height: 40,
        flexDirection: 'row',
        bottom: 90,
        justifyContent: 'space-between',
    },
    incrementButton: {
        width: 60,
        height: 40,

    },
    countButton: {
        width: 70,
        height: 40,
    },
    countMeter:{
        width: 100,
        height: 40,
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeView;

