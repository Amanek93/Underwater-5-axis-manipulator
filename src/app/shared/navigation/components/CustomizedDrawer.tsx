import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { GLOBAL_COLORS, GLOBAL_FONTS } from '@ui/const';
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
    text?: string;
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
        text: 'Strona Główna',
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
        text: 'Sterowanie LIVE',
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
        text: 'Telemetria',
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
        text: 'Diagnostyka',
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
        text: 'Ustawienia',
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
        text: 'Informacja',
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
        text: 'Pomoc',
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
        text: 'WYLOGUJ',
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

const itemsCount = DATA.length;
const windowHeight = Dimensions.get('window').height;

const CustomizedDrawer = () => {
    const navigation = useNavigation<DrawerNavigationProp<any>>();
    const animateWidth = useRef(new Animated.Value(128)).current;
    const animateItemWidth = useRef(new Animated.Value(76)).current;
    const rotateValue = useRef(new Animated.Value(0)).current;
    const animateMoveValue = useRef(new Animated.Value(0)).current;

    const [moreOptions, setMoreOptions] = useState<boolean>(false);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false);
    const [activeIndex, setIsActive] = useState<number>(0);

    const show = () => {
        Animated.timing(animateWidth, {
            toValue: 400,
            useNativeDriver: false,
            duration: 300,
        }).start();
        Animated.timing(animateItemWidth, {
            toValue: 350,
            useNativeDriver: false,
            duration: 300,
        }).start();
        Animated.timing(animateMoveValue, {
            toValue: 280,
            useNativeDriver: false,
            duration: 300,
        }).start();
        Animated.timing(rotateValue, {
            toValue: 3.2,
            useNativeDriver: false,
            duration: 300,
        }).start();
    };

    const hide = () => {
        Animated.timing(animateWidth, {
            toValue: 128,
            useNativeDriver: false,
            duration: 300,
        }).start();
        Animated.timing(animateItemWidth, {
            toValue: 76,
            useNativeDriver: false,
            duration: 300,
        }).start();
        Animated.timing(animateMoveValue, {
            toValue: 0,
            useNativeDriver: false,
            duration: 100,
        }).start();
        Animated.timing(rotateValue, {
            toValue: 0,
            useNativeDriver: false,
            duration: 300,
        }).start();
    };

    const handleButton = useCallback(
        item => {
            setTimeout(() => {
                navigation.navigate(item.navigationId);
            }, 300);
        },
        [activeIndex],
    );

    useEffect(() => {
        console.log(moreOptions);
    }, [moreOptions]);

    useEffect(() => {
        if (moreOptions) {
            setTimeout(() => setShowAdditionalInfo(true), 200);
        } else setShowAdditionalInfo(false);
    }, [moreOptions]);
    const renderItem = ({ item }: any) => {
        return (
            <Animated.View
                style={[
                    styles.itemContainer,
                    { width: animateWidth },
                    item.topSeparator && styles.separator,
                ]}
            >
                <TouchableOpacity
                    onPress={() => {
                        setIsActive(item.keyId);
                        if (item.moreButton) {
                            if (moreOptions) hide();
                            else show();
                            setMoreOptions(prevState => !prevState);
                        } else {
                            hide();
                            handleButton(item);
                        }
                    }}
                >
                    {item.keyId === activeIndex ? (
                        <Animated.View
                            style={{
                                paddingHorizontal: 16,
                                alignItems: 'center',
                                flexDirection: 'row',
                                height: 76,
                                width: animateItemWidth,
                                justifyContent: moreOptions ? 'flex-start' : 'center',
                                backgroundColor:
                                    moreOptions && !item.logoutIcon
                                        ? 'transparent'
                                        : 'rgba(5, 120, 227, 0.4)',
                                borderRadius: 23,
                            }}
                        >
                            <Animated.View
                                style={{
                                    transform: [
                                        { translateX: item.moreButton ? animateMoveValue : 0 },
                                    ],
                                }}
                            >
                                <Animated.View
                                    style={{
                                        transform: [
                                            {
                                                rotate: item.moreButton ? rotateValue : 0,
                                            },
                                        ],
                                    }}
                                >
                                    <Image
                                        resizeMode="contain"
                                        source={item.icon}
                                        style={styles.icon}
                                    />
                                </Animated.View>
                            </Animated.View>
                            {showAdditionalInfo && (
                                <Text style={styles.textStyle}>{item.text}</Text>
                            )}
                        </Animated.View>
                    ) : (
                        <Animated.View
                            style={{
                                paddingHorizontal: 16,
                                flexDirection: 'row',
                                height: 76,
                                width: animateItemWidth,
                                alignItems: 'center',
                                justifyContent: moreOptions ? 'flex-start' : 'center',
                                backgroundColor: !item.logoutIcon
                                    ? 'transparent'
                                    : 'rgba(212, 215, 223, 0.35)',
                                borderRadius: 23,
                            }}
                        >
                            <Image resizeMode="contain" source={item.icon} style={styles.icon} />
                            {showAdditionalInfo && (
                                <Text style={styles.textStyle}>{item.text}</Text>
                            )}
                        </Animated.View>
                    )}
                </TouchableOpacity>
            </Animated.View>
        );
    };
    return (
        <Animated.View style={[styles.mainContainer, { width: animateWidth }]}>
            <View
                style={[
                    styles.logoContainer,
                    {
                        alignSelf: moreOptions ? 'flex-start' : 'center',
                        paddingLeft: moreOptions ? 20 : 0,
                    },
                ]}
            >
                <Image
                    resizeMode="contain"
                    source={require('../../../../assets/images/ocean-tech-logo.png')}
                    style={styles.imageContainer}
                />
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.keyId.toString()}
                    numColumns={1}
                    renderItem={renderItem}
                />
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 6,
    },
    icon: {
        alignItems: 'center',
        height: 42,
        justifyContent: 'center',
        width: 42,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 42,
        maxWidth: 83,
    },
    itemContainer: {
        alignItems: 'center',
        height: (windowHeight * 6) / 7 / itemsCount,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    mainContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(3, 26, 66, 1)',
        borderRadius: 55,
        height: '100%',
        justifyContent: 'center',
        width: 128,
    },
    separator: {
        borderTopColor: 'white',
        borderTopWidth: 2,
    },
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 25,
        fontWeight: '400',
        lineHeight: 29,
        marginLeft: 70,
    },
});

export default CustomizedDrawer;

