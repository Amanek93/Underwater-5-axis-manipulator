import React, { useCallback, useRef, useState } from 'react';
import i18n from '@shared/language/i18n';

import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Icon from '@ui/components/Icon';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '@ui/const';
import { useNavigation } from '@react-navigation/native';

const DATA: Array<{
    icon: any;
    iconColor: string;
    title: string;
    navigationId: string;
    isActive: boolean;
    keyId: number;
}> = [
    {
        icon: GLOBAL_ICONS.home,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.home',
        title: 'home',
        navigationId: 'HomeView',
        isActive: false,
        keyId: 0,
    },
    {
        icon: GLOBAL_ICONS.gamepad,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.test.test',
        title: 'liveStream',
        navigationId: 'LiveStreamView',
        isActive: false,
        keyId: 1,
    },
    {
        icon: GLOBAL_ICONS.cog,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.settings',
        title: 'settings',
        navigationId: 'SettingsView',
        isActive: false,
        keyId: 2,
    },
    {
        icon: GLOBAL_ICONS.telemetry,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.telemetry',
        title: 'telemetry',
        navigationId: 'TelemetryView',
        isActive: false,
        keyId: 3,
    },
    {
        icon: GLOBAL_ICONS.stethoscope,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.diagnostic',
        title: 'diagnostic',
        navigationId: 'DiagnosticView',
        isActive: false,
        keyId: 4,
    },
    {
        icon: GLOBAL_ICONS.question,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.info',
        title: 'info',
        navigationId: 'InfoView',
        isActive: false,
        keyId: 5,
    },
    {
        icon: GLOBAL_ICONS.help,
        iconColor: GLOBAL_COLORS.icon,
        //title: 'screen.navigationBar.help',
        title: 'help',
        navigationId: 'HelpView',
        isActive: false,
        keyId: 6,
    },
];

const windowHeight = Dimensions.get('window').height;

const CustomizedDrawer = () => {
    //deklaruję hooka nawigacyjnego
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    const [activeIndex, setIsActive] = useState(0);
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

    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    //DOPIERO TERAZ MOGĘ Z NIEGO KORZYSTAC
                    setIsActive(item.keyId);

                    handleButton(item);
                }}
                style={
                    item.keyId === activeIndex
                        ? styles.pressedButtonContainer
                        : styles.buttonContainer
                }
            >
                <Animated.View
                    style={[styles.animatedViewContainer, { transform: [{ translateX }] }]}
                >
                    {item.keyId === activeIndex && (
                        <View style={{ backgroundColor: 'grey', flex: 1 }} />
                    )}
                </Animated.View>
                {item.keyId === activeIndex ? (
                    <Animated.View
                        style={[styles.flatListButtonContainer, { transform: [{ translateX }] }]}
                    >
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
                                {i18n.t(`screens.navigationBar.${item.title}`)}
                            </Text>
                        </View>
                    </Animated.View>
                ) : (
                    <View style={styles.flatListButtonContainer}>
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
                                {i18n.t(`screens.navigationBar.${item.title}`)}
                            </Text>
                        </View>
                    </View>
                )}
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.statusBarContainer}>
            <View
                style={{ height: windowHeight / 7, justifyContent: 'center', alignItems: 'center' }}
            >
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
            <NavigationToggleButton onPress={() => {}} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    animatedViewContainer: {
        backgroundColor: GLOBAL_COLORS.secondary,
        height: '100%',
        right: 15,
        width: 15,
    },
    buttonContainer: {
        backgroundColor: GLOBAL_COLORS.secondary,
        flexDirection: 'row',
        width: 160,
    },
    flatListButtonContainer: {
        flex: 1,
        height: (windowHeight - windowHeight / 7) / 7,
        right: 5,
        top: 10,
    },

    flatListTextContainer: {
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'flex-start',
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
        width: 175,
    },
    pressedButtonContainer: {
        backgroundColor: GLOBAL_COLORS.extra,
        flexDirection: 'row',
        width: 175,
    },
    statusBarContainer: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.secondary,
        height: '100%',
        justifyContent: 'center',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
        width: 140,
    },
});

export default CustomizedDrawer;
