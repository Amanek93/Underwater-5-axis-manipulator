import React, { useEffect, useState } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { GLOBAL_COLORS, GLOBAL_FONTS } from '@ui';

type Props = {
    navigation: DrawerNavigationProp<any>;
};

const DATA = [
    {
        title: 'język',
        description: 'wybór języka aplikacji',
    },
    {
        title: 'tryb',
        description: 'tryb jasny lub ciemny',
    },
    {
        title: 'dźwięk',
        description: 'tryb jasny lub ciemny',
    },
    {
        title: 'wyloguj',
        description: 'tryb jasny lub ciemny',
    },
];

const SettingsView = ({ navigation }: Props) => {
    const [activeSettingIndex, setActiveSettingIndex] = useState<number>(0);

    useEffect(
        () =>
            navigation.addListener('beforeRemove', e => {
                e.preventDefault();
            }),
        [navigation],
    );

    const handleButtonPress = (index: number) => {
        setActiveSettingIndex(index);
    };

    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => handleButtonPress(index)}
                style={{
                    backgroundColor:
                        activeSettingIndex === index ? 'rgba(5, 120, 227, 0.4)' : 'transparent',
                    height: 130,
                    marginTop: 30,
                    borderRadius: 23,
                    padding: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Text style={styles.itemDotText}>·</Text>
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.contentContainer}>
                <View style={styles.leftContentContainer}>
                    <FlatList
                        data={DATA}
                        keyExtractor={item => item.title}
                        renderItem={renderItem}
                    />
                </View>
                <View style={styles.rightContentContainer} />
            </View>
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    itemDotText: {
        color: 'white',
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 70,
        fontWeight: 'bold',
        paddingRight: 20,
        textAlign: 'center',
    },
    itemText: {
        color: 'white',
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 48,
    },
    leftContentContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(65, 81, 113, 0.69)',
        borderBottomLeftRadius: 77,
        borderTopLeftRadius: 77,
        flex: 1,
        paddingTop: '5%',
    },
    rightContentContainer: {
        backgroundColor: 'rgba(65, 81, 113, 0.8)',
        borderBottomRightRadius: 77,
        borderTopRightRadius: 77,
        flex: 1,
    },
});

export default SettingsView;
