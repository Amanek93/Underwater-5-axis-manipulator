import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { GLOBAL_COLORS } from '@ui';

import ControlSlider from '@home/components/ControlSlider';
import Header from '../../ui/components/Header';
import MainButton from '@ui/components/MainButton';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { HomeActionTypes } from '@home';
const DATA = [
    {
        id: 'bd7',
        title: 'Axis 1',
        addActionType: HomeActionTypes.ADD_AXIS1,
        subtractActionType: HomeActionTypes.SUBTRACT_AXIS1,
        deviceKey: 'axialRadius1',
    },
    {
        id: 'db8',
        title: 'Axis 2',
        addActionType: HomeActionTypes.ADD_AXIS2,
        subtractActionType: HomeActionTypes.SUBTRACT_AXIS2,
        deviceKey: 'axialRadius2',
    },
    {
        id: 'db9',
        title: 'Axis 3',
        addActionType: HomeActionTypes.ADD_AXIS3,
        subtractActionType: HomeActionTypes.SUBTRACT_AXIS3,
        deviceKey: 'axialRadius3',
    },
    {
        id: 'db10',
        title: 'Axis 4',
        addActionType: HomeActionTypes.ADD_AXIS4,
        subtractActionType: HomeActionTypes.SUBTRACT_AXIS4,
        deviceKey: 'axialRadius4',
    },
    {
        id: 'db11',
        title: 'Axis 5',
        addActionType: HomeActionTypes.ADD_AXIS5,
        subtractActionType: HomeActionTypes.SUBTRACT_AXIS5,
        deviceKey: 'axialRadius5',
    },
    {
        id: 'db12',
        title: 'Speed',
        addActionType: HomeActionTypes.ADD_SPEED,
        subtractActionType: HomeActionTypes.SUBTRACT_SPEED,
        deviceKey: 'speed',
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
    const renderItem = (item) => (
        <ControlSlider
            addActionType={item.addActionType}
            circularTitle={item.title}
            deviceKey={item.deviceKey}
            subtractActionType={item.subtractActionType}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
            <View style={styles.contentContainer}>
                <View style={styles.leftContentContainer} />
                <View style={styles.rightContentContainer}>
                    <View style={styles.rightContentRotaryContainer}>
                        <FlatList
                            data={DATA}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            renderItem={renderItem}
                        />
                    </View>
                    <View style={styles.rightContentButtonContainer}>
                        <MainButton
                            onPress={() => console.log('button1')}
                            style={styles.mainButton}
                            title="save"
                        />
                        <MainButton
                            onPress={() => console.log('button2')}
                            style={styles.mainButton}
                            title="clear"
                        />
                        <MainButton
                            onPress={() => console.log('button3')}
                            style={styles.mainButton}
                            title=""
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
        flex: 1,
    },
    contentContainer: {
        backgroundColor: `#ffffff`,
        flexDirection: 'row',
        flex: 1,
    },
    leftContentContainer: {
        backgroundColor: `#ff0000`,
        flex: 10,
    },
    mainButton: {
        width: 100,
    },
    rightContentButtonContainer: {
        alignItems: 'center',
        backgroundColor: `#ffc0cb`,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        width: '60%',
    },
    rightContentContainer: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.leftViewContainer,
        borderRadius: 20,
        flex: 5,
        justifyContent: 'center',
    },
    rightContentRotaryContainer: {
        alignItems: 'center',
        flex: 9,
        width: '100%',
    },
});

export default HomeView;
