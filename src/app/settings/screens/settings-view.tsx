import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import i18n from '@shared/language/i18n';
import Header from '@ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { GLOBAL_COLORS } from '@ui';

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
                    backgroundColor: activeSettingIndex === index ? 'white' : 'blue',
                    height: 50,
                }}
            >
                <Text>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL_COLORS.primary,
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    leftContentContainer: {
        backgroundColor: 'red',
        flex: 1,
    },
    rightContentContainer: {
        backgroundColor: GLOBAL_COLORS.leftViewContainer,
        flex: 1,
    },
});

export default SettingsView;
