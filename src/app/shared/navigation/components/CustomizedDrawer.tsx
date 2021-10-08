import React, { useCallback, useRef, useState } from 'react';

import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { GLOBAL_COLORS } from '@ui/const';
import {
    arrowIcon,
    diagnosticIcon,
    helpIcon,
    homeIcon,
    infoIcon,
    liveCameraIcon,
    powerIcon,
    settingsIcon,
    telemetryIcon,
} from '../../../../assets/icons';
import { useNavigation } from '@react-navigation/native';

const DATA: Array<{
    icon: any;
    iconColor: string;
    title: string;
    navigationId: string;
    isActive: boolean;
    keyId: number;
    topSeparator: boolean;
    logoutIcon?: boolean;
    moreButton?: boolean;
}> = [
    {
        icon: homeIcon,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.home',
        title: 'home',
        navigationId: 'HomeView',
        isActive: false,
        keyId: 0,
        topSeparator: true,
    },
    {
        icon: liveCameraIcon,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.test.test',
        title: 'liveStream',
        navigationId: 'LiveStreamView',
        isActive: false,
        keyId: 1,
        topSeparator: false,
    },
    {
        icon: telemetryIcon,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.telemetry',
        title: 'telemetry',
        navigationId: 'TelemetryView',
        isActive: false,
        keyId: 2,
        topSeparator: false,
    },
    {
        icon: diagnosticIcon,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.diagnostic',
        title: 'diagnostic',
        navigationId: 'DiagnosticView',
        isActive: false,
        keyId: 3,
        topSeparator: false,
    },
    {
        icon: settingsIcon,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.settings',
        title: 'settings',
        navigationId: 'SettingsView',
        isActive: false,
        keyId: 4,
        topSeparator: true,
    },
    {
        icon: infoIcon,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.info',
        title: 'info',
        navigationId: 'InfoView',
        isActive: false,
        keyId: 5,
        topSeparator: false,
    },
    {
        icon: helpIcon,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.help',
        title: 'help',
        navigationId: 'HelpView',
        isActive: false,
        keyId: 6,
        topSeparator: false,
    },
    {
        icon: powerIcon,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.help',
        title: 'help',
        navigationId: 'HelpView',
        isActive: false,
        keyId: 7,
        topSeparator: true,
        logoutIcon: true,
    },
    {
        icon: arrowIcon,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.help',
        title: 'help',
        navigationId: 'HelpView',
        isActive: false,
        keyId: 8,
        topSeparator: true,
        moreButton: true,
    },
];

const iconsCount = DATA.length;
const windowHeight = Dimensions.get('window').height;

const CustomizedDrawer = () => {
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    const [moreOptions, setMoreOptions] = useState<boolean>(false);
    const [activeIndex, setIsActive] = useState<number>(0);
    const translateX = useRef(new Animated.Value(0)).current;

    const show = () => {
        Animated.timing(translateX, {
            toValue: 0,
            useNativeDriver: false,
            duration: 300,
        }).start();
    };

    const hide = () => {
        Animated.timing(translateX, {
            toValue: 15,
            useNativeDriver: false,
            duration: 300,
        }).start();
    };

    const handleButton = useCallback(
        item => {
            show();
            setTimeout(() => {
                hide();
            }, 600);
            setTimeout(() => {
                navigation.navigate(item.navigationId);
            }, 300);
        },
        [activeIndex],
    );
    const renderItem = ({ item }: any) => {
        return (
            <View
                style={[
                    styles.itemContainer,
                    item.topSeparator && styles.separator,
                    item.logoutIcon && { height: (windowHeight / iconsCount) * 1.2 },
                ]}
            >
                <TouchableOpacity
                    onPress={() => {
                        setIsActive(item.keyId);
                        if (item.moreButton) {
                            setMoreOptions(true);
                        } else {
                            handleButton(item);
                        }
                    }}
                    style={[
                        { borderRadius: 23 },
                        item.logoutIcon && styles.logoutButtonContainer,
                        item.keyId === activeIndex && styles.pressedButtonContainer,
                    ]}
                >
                    {item.keyId === activeIndex ? (
                        <View style={styles.iconContainer}>
                            <Image
                                resizeMode="contain"
                                source={item.icon}
                                style={styles.iconCont}
                            />
                        </View>
                    ) : (
                        <View style={styles.iconContainer}>
                            <Image
                                resizeMode="contain"
                                source={item.icon}
                                style={styles.iconCont}
                            />
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.statusBarContainer}>
            <View style={styles.logoContainer}>
                <Image
                    resizeMode="contain"
                    source={require('../../../../assets/images/ocean-tech-logo.png')}
                    style={styles.imageContainer}
                />
            </View>
            <FlatList
                data={DATA}
                keyExtractor={item => item.keyId.toString()}
                numColumns={1}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    iconCont: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        height: (windowHeight - 370) / iconsCount,
        justifyContent: 'center',
        width: (windowHeight - 370) / iconsCount,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 42,
        maxWidth: 83,
    },
    itemContainer: {
        backgroundColor: 'rgba(3, 26, 66, 1)',
        height: (windowHeight - 220) / iconsCount,
        justifyContent: 'center',
        width: (windowHeight - 220) / iconsCount,
    },
    logoContainer: {
        alignItems: 'center',
        height: windowHeight / 7,
        justifyContent: 'center',
    },
    logoutButtonContainer: {
        backgroundColor: 'rgba(212, 215, 223, 0.35)',
        borderRadius: 42,
        height: (windowHeight - 100) / iconsCount,
        justifyContent: 'center',
    },
    pressedButtonContainer: {
        backgroundColor: 'rgba(5, 120, 227, 0.4)',
    },
    separator: {
        borderTopColor: 'white',
        borderTopWidth: 2,
    },
    statusBarContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(3, 26, 66, 1)',
        borderRadius: 55,
        height: '100%',
        justifyContent: 'center',
        width: 128,
    },
});

export default CustomizedDrawer;
