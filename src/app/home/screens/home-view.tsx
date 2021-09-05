import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';

import ControlSlider from '@home/components/ControlSlider';
import Header from '../../ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import MainButton from "@ui/components/MainButton";

const DATA = [
    {
        id: 'bd7',
        title: 'Axis 1',
    },
    {
        id: 'db8',
        title: 'Axis 2',
    },
    {
        id: 'db9',
        title: 'Axis 3',
    },
    {
        id: 'db10',
        title: 'Axis 4',
    },
    {
        id: 'db11',
        title: 'Axis 5',
    },
    {
        id: 'db12',
        title: 'Speed',
    },
];

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


    const renderItem = ({item }) => (
        <ControlSlider
            circularTitle={item.title}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
            <View style={styles.contentContainer}>
                <View style={styles.leftContentContainer} />
                <View style={styles.rightContentContainer}>
                    <View
                    style={styles.rightContentRotaryContainer}>
                    <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    />
                    </View>
                    <View
                        style={styles.rightContentButtonContainer}>
                        <MainButton onPress={()=>console.log('button1')} title={'save'} style={{width: 100}}/>
                        <MainButton onPress={()=>console.log('button2')} title={'clear'} style={{width: 100}}/>
                        <MainButton onPress={()=>console.log('button3')} title={'add'} style={{width: 100}}/>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
    rightContentRotaryContainer: {
        flex:9,
        width:'100%',
        alignItems: 'center',
    },
    rightContentButtonContainer:{
        flexDirection: 'row',
        width: "60%",
        flex:1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default HomeView;
