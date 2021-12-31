import React, { useState } from 'react';

import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '@ui/const';

import Icon from '@ui/components/Icon';
import i18n from '@shared/language/i18n';

import DropDownPicker from 'react-native-dropdown-picker';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

type Props = {
    resetHandler?(): void;
    homeHandler?(): void;
    memoHandler?(): void;
    stopHandler?(): void;
};

const Header = ({ resetHandler, homeHandler, memoHandler, stopHandler }: Props) => {
    const [open, setOpen] = useState(false);
    const [connected, setConnected] = useState<boolean>(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Banaana', value: 'banasna' },
    ]);

    return (
        <SafeAreaView style={styles.headerContainer}>
            <View style={styles.leftHeaderContainer}>
                <View style={styles.connectedContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setConnected(!connected);
                        }}
                        style={styles.connectedButton}
                    >
                        <View style={styles.iconContainer}>
                            <Icon
                                color={GLOBAL_COLORS.icon}
                                name={GLOBAL_ICONS.plug}
                                size={42}
                                style={styles.icon}
                            />
                        </View>
                        {connected ? (
                            <>
                                <Text style={styles.textButton}>
                                    {i18n.t('screens.header.connected')}
                                </Text>
                                <View style={styles.checkTickContainer}>
                                    <Icon
                                        color={GLOBAL_COLORS.connectedTickColor}
                                        name={GLOBAL_ICONS.checkCircle}
                                        size={20}
                                        style={{
                                            backgroundColor: GLOBAL_COLORS.primary,
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            </>
                        ) : (
                            <>
                                <Text style={styles.textButton}>
                                    {i18n.t('screens.header.disconnected')}
                                </Text>
                                <View style={styles.checkTickContainer}>
                                    <Icon
                                        color={GLOBAL_COLORS.disconnectedTickColor}
                                        name={GLOBAL_ICONS.checkCircle}
                                        size={20}
                                        style={{
                                            backgroundColor: GLOBAL_COLORS.primary,
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            </>
                        )}
                    </TouchableOpacity>
                    <View style={styles.dropdownContainer}>
                        <DropDownPicker
                            items={items}
                            open={open}
                            setItems={setItems}
                            setOpen={setOpen}
                            setValue={setValue}
                            value={value}
                        />
                    </View>
                </View>
                <View style={styles.cinematicContainer} />
            </View>
            <View style={styles.rightHeaderContainer}>
                {resetHandler && (
                    <TouchableOpacity onPress={resetHandler} style={styles.resetButton}>
                        <View style={styles.iconContainer}>
                            <Icon
                                color={GLOBAL_COLORS.icon}
                                name={GLOBAL_ICONS.syncAlt}
                                size={42}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.textButton}>{i18n.t('screens.header.reset')}</Text>
                    </TouchableOpacity>
                )}
                {homeHandler && (
                    <TouchableOpacity onPress={homeHandler} style={styles.homeButton}>
                        <View style={styles.iconContainer}>
                            <Icon
                                color={GLOBAL_COLORS.icon}
                                name={GLOBAL_ICONS.home}
                                size={42}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.textButton}>{i18n.t('screens.header.home')}</Text>
                    </TouchableOpacity>
                )}
                {memoHandler && (
                    <TouchableOpacity onPress={memoHandler} style={styles.memoButton}>
                        <View style={styles.iconContainer}>
                            <Icon
                                color={GLOBAL_COLORS.icon}
                                name={GLOBAL_ICONS.recycle}
                                size={42}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.textButton}>{i18n.t('screens.header.memory')}</Text>
                    </TouchableOpacity>
                )}
                {stopHandler && (
                    <TouchableOpacity onPress={stopHandler} style={styles.stopButton}>
                        <View style={styles.iconContainer}>
                            <Icon
                                color={GLOBAL_COLORS.icon}
                                name={GLOBAL_ICONS.stopCircle}
                                size={42}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.textButton}>{i18n.t('screens.header.stop')}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    checkTickContainer: {
        position: 'absolute',
        right: '30%',
        top: '20%',
    },
    cinematicContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    connectedButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 15,
        height: windowHeight / 7,
        justifyContent: 'center',
        paddingHorizontal: 5,
        width: windowHeight / 7,
    },
    connectedContainer: {
        flex: 1,
        flexDirection: 'row',
        height: windowHeight / 7,
    },
    dropdownContainer: {
        flex: 1,
        padding: 5,
        zIndex: 10,
    },
    headerContainer: {
        backgroundColor: GLOBAL_COLORS.primary,
        flexDirection: 'row',
        height: windowHeight / 7,
        justifyContent: 'center',
        width: windowWidth,
    },
    homeButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 15,
        height: windowHeight / 7,
        justifyContent: 'center',
        width: windowHeight / 7,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
    },
    leftHeaderContainer: {
        flex: 2,
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    memoButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 15,
        height: windowHeight / 7,
        justifyContent: 'center',
        width: windowHeight / 7,
    },
    resetButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 15,
        height: windowHeight / 7,
        justifyContent: 'center',
        width: windowHeight / 7,
    },
    rightHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    stopButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.stopBackground,
        borderRadius: 15,
        height: windowHeight / 7,
        justifyContent: 'center',
        width: windowHeight / 7,
    },
    textButton: {
        color: GLOBAL_COLORS.text,
        flex: 1,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
    },
});

export default Header;
