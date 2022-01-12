import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Image, StyleSheet, Switch, Text, View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

import DropDownPicker from 'react-native-dropdown-picker';
import Header from '@ui/components/Header';
import I18n from 'i18n-js';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import i18n from '@language/i18n';
import { AppState } from '@app/store/models';
import { ChangeLanguage, SettingsActionTypes } from '@settings';
import { GLOBAL_FONTS } from '@ui';
import { englandFlag, germanyFlag, polandFlag } from '../../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
    navigation: DrawerNavigationProp<any>;
};

const SettingsView = ({ navigation }: Props) => {
    const dispatch = useDispatch();
    const settings = useSelector((state: AppState) => state.settings);
    const [openLanguageDropdown, setOpenLanguageDropdown] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState('pl');
    const baseTranslationPath = 'screens.settingsView';
    const animateMoveDropdownValue = useRef<any>(new Animated.Value(0)).current;

    const LANGUAGES = [
        {
            label: i18n.t(`${baseTranslationPath}.polish`),
            value: 'pl',
            icon: () => <Image source={polandFlag} style={styles.iconStyle} />,
        },
        {
            label: i18n.t(`${baseTranslationPath}.english`),
            value: 'en',
            icon: () => <Image source={englandFlag} style={styles.iconStyle} />,
        },
        {
            label: i18n.t(`${baseTranslationPath}.germany`),
            value: 'GER',
            icon: () => <Image source={germanyFlag} style={styles.iconStyle} />,
        },
    ];

    const DATA = [
        {
            title: i18n.t(`${baseTranslationPath}.language`),
            description: 'wybór języka aplikacji',
            isToggleSwitch: false,
            toggleFunction: () => dispatch(new ChangeLanguage('język')),
            value: settings.language,
        },
        {
            title: i18n.t(`${baseTranslationPath}.sound`),
            description: 'tryb jasny lub ciemny',
            isToggleSwitch: true,
            toggleFunction: () => dispatch({ type: SettingsActionTypes.CHANGE_SOUND }),
            value: settings.sound,
        },
        {
            title: i18n.t(`${baseTranslationPath}.darkMode`),
            description: 'tryb jasny lub ciemny',
            isToggleSwitch: true,
            toggleFunction: () => dispatch({ type: SettingsActionTypes.CHANGE_DISPLAY_MODE }),
            value: settings.darkMode,
        },
    ];

    const handleOpenLanguageDropdown = (status: boolean | ((prevState: boolean) => boolean)) => {
        if (status) {
            Animated.timing(animateMoveDropdownValue, {
                toValue: -(180 / 2) + 5,
                useNativeDriver: false,
                duration: 300,
            }).start();
            setOpenLanguageDropdown(true);
        } else {
            Animated.timing(animateMoveDropdownValue, {
                toValue: 0,
                useNativeDriver: false,
                duration: 300,
            }).start();
            setOpenLanguageDropdown(false);
        }
    };

    useEffect(
        () =>
            navigation.addListener('beforeRemove', e => {
                e.preventDefault();
            }),
        [navigation],
    );

    useEffect(() => {
        dispatch(new ChangeLanguage(currentLanguage));
    }, [currentLanguage]);

    useEffect(() => {
        setCurrentLanguage(I18n.currentLocale());
    }, []);

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemTitleBox}>
                    <Text style={styles.itemTitleText}>{item.title}</Text>
                </View>
                <View style={styles.itemOptionsBox}>
                    {item.isToggleSwitch ? (
                        <Switch
                            onValueChange={item.toggleFunction}
                            style={{ transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }}
                            thumbColor={item.value ? 'rgba(3, 26, 66, 0.69)' : '#f4f3f4'}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            value={item.value}
                        />
                    ) : (
                        <Animated.View
                            style={{
                                justifyContent: 'center',
                                height: 180,
                                alignItems: 'center',
                                top: animateMoveDropdownValue,
                            }}
                        >
                            <DropDownPicker
                                containerStyle={{ width: 200 }}
                                items={LANGUAGES}
                                open={openLanguageDropdown}
                                setOpen={status => handleOpenLanguageDropdown(status)}
                                setValue={setCurrentLanguage}
                                value={currentLanguage}
                            />
                        </Animated.View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.contentContainer}>
                <FlatList data={DATA} keyExtractor={item => item.title} renderItem={renderItem} />
            </View>
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(3, 26, 66, 0.69)',
        flex: 1,
    },
    contentContainer: {
        backgroundColor: 'rgba(65, 81, 113, 0.69)',
        borderBottomLeftRadius: 200,
        flex: 1,
        paddingLeft: '15%',
        paddingTop: '5%',
    },
    iconStyle: {
        height: 24,
        width: 24,
    },
    itemContainer: {
        flexDirection: 'row',
        height: 160,
        marginTop: 30,
    },
    itemOptionsBox: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    itemTitleBox: {
        alignItems: 'center',
        borderBottomColor: 'rgba(255, 255, 255, 1)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        flex: 0.7,
    },
    itemTitleText: {
        color: 'white',
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 48,
    },
});

export default SettingsView;
