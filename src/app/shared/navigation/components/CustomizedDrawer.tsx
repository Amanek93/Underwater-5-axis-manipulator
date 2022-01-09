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

import i18n from '@language/i18n';
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
        title: 'home',
        navigationId: 'HomeView',
        isActive: false,
        keyId: 0,
        topSeparator: true,
        text: 'components.navigationBar.home',
    },
    {
        icon: liveCameraIcon,
        iconColor: GLOBAL_COLORS.icon,
        title: 'liveStream',
        navigationId: 'LiveStreamView',
        isActive: false,
        keyId: 1,
        topSeparator: false,
        text: 'components.navigationBar.liveControl',
    },
    {
        icon: telemetryIcon,
        iconColor: GLOBAL_COLORS.icon,
        title: 'telemetry',
        navigationId: 'TelemetryView',
        isActive: false,
        keyId: 2,
        topSeparator: false,
        text: 'components.navigationBar.telemetry',
    },
    {
        icon: diagnosticIcon,
        iconColor: GLOBAL_COLORS.icon,
        title: 'diagnostic',
        navigationId: 'DiagnosticView',
        isActive: false,
        keyId: 3,
        topSeparator: false,
        text: 'components.navigationBar.diagnostic',
    },
    {
        icon: settingsIcon,
        iconColor: GLOBAL_COLORS.icon,
        title: 'settings',
        navigationId: 'SettingsView',
        isActive: false,
        keyId: 4,
        topSeparator: true,
        text: 'components.navigationBar.settings',
    },
    {
        icon: infoIcon,
        iconColor: GLOBAL_COLORS.icon,
        title: 'info',
        navigationId: 'InfoView',
        isActive: false,
        keyId: 5,
        topSeparator: false,
        text: 'components.navigationBar.info',
    },
    {
        icon: helpIcon,
        iconColor: GLOBAL_COLORS.icon,
        title: 'help',
        navigationId: 'HelpView',
        isActive: false,
        keyId: 6,
        topSeparator: false,
        text: 'components.navigationBar.help',
    },
    {
        icon: powerIcon,
        iconColor: GLOBAL_COLORS.icon,
        title: 'help',
        navigationId: 'HelpView',
        isActive: false,
        keyId: 7,
        topSeparator: true,
        logoutIcon: true,
        text: 'components.navigationBar.logout',
    },
];

const footer = {
    icon: arrowIcon,
    iconColor: GLOBAL_COLORS.icon,
    title: 'help',
    navigationId: 'HelpView',
    isActive: false,
    keyId: 8,
    topSeparator: true,
    moreButton: true,
};

const itemsCount = DATA.length + 1;
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
            toValue: 1,
            useNativeDriver: false,
            duration: 100,
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
            duration: 300,
        }).start();
        Animated.timing(rotateValue, {
            toValue: 0,
            useNativeDriver: false,
            duration: 100,
        }).start();
        setShowAdditionalInfo(false);
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
                        hide();
                        handleButton(item);
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
                                backgroundColor: item.logoutIcon
                                    ? 'transparent'
                                    : 'rgba(5, 120, 227, 0.4)',
                                borderRadius: 23,
                            }}
                        >
                            <Image resizeMode="contain" source={item.icon} style={styles.icon} />
                            {showAdditionalInfo && (
                                <Text style={styles.textStyle}>{i18n.t(`${item.text}`)}</Text>
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
                                <Text style={styles.textStyle}>{i18n.t(`${item.text}`)}</Text>
                            )}
                        </Animated.View>
                    )}
                </TouchableOpacity>
            </Animated.View>
        );
    };

    const renderFooter = (item: any) => {
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
                        if (moreOptions) hide();
                        else show();
                        setMoreOptions(prevState => !prevState);
                    }}
                >
                    <Animated.View
                        style={{
                            paddingHorizontal: 16,
                            alignItems: 'center',
                            flexDirection: 'row',
                            height: 76,
                            width: animateItemWidth,
                            justifyContent: 'flex-start',
                            backgroundColor: 'transparent',
                            borderRadius: 23,
                        }}
                    >
                        <Animated.View
                            style={{
                                transform: [{ translateX: animateMoveValue }],
                            }}
                        >
                            <Animated.View
                                style={{
                                    transform: [
                                        {
                                            rotate: rotateValue.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ['0deg', '180deg'],
                                            }),
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
                    </Animated.View>
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
                    ListFooterComponent={renderFooter(footer)}
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
