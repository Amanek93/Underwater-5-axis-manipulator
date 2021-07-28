import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import i18n from '@shared/language/i18n';

import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '../const';

import Icon from '@ui/components/Icon';
//ZAIMPORTOWAŁEM hooka nawigacyjnego
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

//POPRAWIŁEM NAZWY WIDOKÓW
const DATA: Array<{
    icon: any;
    iconColor: string;
    title: string;
    navigationId: string;
    isActive: boolean;
}> = [
    {
        icon: GLOBAL_ICONS.home,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.home',
        title: 'HOME',
        navigationId: 'HomeView',
        isActive: true,
    },
    {
        icon: GLOBAL_ICONS.gamepad,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.test.test',
        title: 'lIVE STREAM',
        navigationId: 'LiveStreamView',
        isActive: false,
    },
    {
        icon: GLOBAL_ICONS.cog,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.settings',
        title: 'SETTINGS',
        navigationId: 'SettingsView',
        isActive: false,
    },
    {
        icon: GLOBAL_ICONS.telemetry,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.telemetry',
        title: 'TELEMETRY',
        navigationId: 'TelemetryView',
        isActive: false,
    },
    {
        icon: GLOBAL_ICONS.stethoscope,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.diagnostic',
        title: 'DIAGNOSTIC',
        navigationId: 'DiagnosticView',
        isActive: false,
    },
    {
        icon: GLOBAL_ICONS.question,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.info',
        title: 'INFO',
        navigationId: 'InfoView',
        isActive: false,
    },
    {
        icon: GLOBAL_ICONS.help,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.help',
        title: 'HELP',
        navigationId: 'HelpView',
        isActive: false,
    },
];

const NavigationBar = () => {
    //deklaruję hooka nawigacyjnego
    const navigation = useNavigation();

    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    //DOPIERO TERAZ MOGĘ Z NIEGO KORZYSTAC
                    navigation.navigate(item.navigationId);
                }}
                style={item.isActive ? styles.pressedButtonContainer : styles.buttonContainer}
            >
                <View {...{ backgroundColor: GLOBAL_COLORS.secondary, width: 15, height: '100%' }}>
                    {item.isActive && <View style={{ backgroundColor: 'grey', flex: 1 }} />}
                </View>
                <View style={{ flex: 1, top: 10 }}>
                    <View style={styles.iconContainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                color={item.iconColor}
                                name={item.icon}
                                size={42}
                                style={styles.iconCont}
                            />
                        </View>
                    </View>
                    <View style={styles.flatListTextContainer}>
                        <Text style={styles.text}>
                            {/*{i18n.t(item.title)}*/}
                            {item.title}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.statusBarContainer}>
            <FlatList data={DATA} numColumns={1} renderItem={renderItem} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-start',
        backgroundColor: GLOBAL_COLORS.secondary,
        flexDirection: 'row',
        height: windowHeight / 7.5,
        justifyContent: 'flex-start',
        width: 150,
    },
    flatListTextContainer: {
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'flex-start',
    },
    greyButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 56,
        height: 56,
        justifyContent: 'center',
        width: '100%',
    },
    iconCont: {
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
    },
    pressedButtonContainer: {
        alignItems: 'flex-start',
        backgroundColor: GLOBAL_COLORS.extra,
        flexDirection: 'row',
        height: windowHeight / 7.5,
        justifyContent: 'flex-start',
        width: 150,
    },
    statusBarContainer: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        width: 150,
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
        width: 130,
    },
});

export default NavigationBar;
