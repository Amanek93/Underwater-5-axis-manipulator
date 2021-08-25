import React, {useState} from 'react';

import { Dimensions,  Text,  SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import {GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS} from '@ui/const';

import Icon from '@ui/components/Icon';
import i18n from '@shared/language/i18n';

import DropDownPicker from 'react-native-dropdown-picker';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Header = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple', },
        {label: 'Banana', value: 'banana'},
        {label: 'Banaana', value: 'banasna'}
    ]);


    return (
        <SafeAreaView style={styles.headerContainer}>
            <View style={styles.leftHeaderContainer}>
                <View style={styles.connectedContainer}>
                    <TouchableOpacity style={styles.connectedButton}>
                        <View style={styles.iconContainer}>
                            <Icon
                                color={GLOBAL_COLORS.icon}
                                name={GLOBAL_ICONS.home}
                                size={42}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.textButton}>{i18n.t('screens.header.connected')}</Text>
                    </TouchableOpacity>
                    <View style={styles.dropdownContainer}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>
                </View>
                <View style={styles.cinematicContainer}>
                    {/*<View style={styles.cinematicButtonContainer}>*/}
                    {/*    <TouchableOpacity style={styles.cinematicButton}>*/}
                    {/*        <Text style={styles.cinematicButtonText}>{i18n.t('screens.header.connected')}</Text>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*    <TouchableOpacity style={styles.cinematicButton}>*/}
                    {/*        <Text style={styles.cinematicButtonText}>{i18n.t('screens.header.connected')}</Text>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</View>*/}
                </View>
            </View>
            <View style={styles.rightHeaderContainer}>
                <TouchableOpacity style={styles.resetButton}>
                    <View style={styles.iconContainer}>
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={GLOBAL_ICONS.home}
                            size={42}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.textButton}>{i18n.t('screens.header.reset')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.homeButton}>
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
                <TouchableOpacity style={styles.memoButton}>
                    <View style={styles.iconContainer}>
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={GLOBAL_ICONS.home}
                            size={42}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.textButton}>{i18n.t('screens.header.memory')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stopButton}>
                    <View style={styles.iconContainer}>
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={GLOBAL_ICONS.home}
                            size={42}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.textButton}>{i18n.t('screens.header.stop')}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: GLOBAL_COLORS.primary,
        flexDirection: 'row',
        height: windowHeight / 7,
        justifyContent: 'center',
        width: windowWidth,
    },
    leftHeaderContainer: {
        flex: 2,
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    rightHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    connectedContainer: {
        flex:1,
        height: windowHeight / 7,
        flexDirection: 'row',
    },
    connectedButton: {
        width: windowHeight / 7,
        height: windowHeight / 7,
        backgroundColor:  GLOBAL_COLORS.extra,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    connectedButtonIcon: {

    },
    iconContainer: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        flex: 1,
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
    },
    dropdownContainer: {
        flex:1,
        padding: 5,
    },
    homeStopContainer: {
      flex:1,
    },
    cinematicContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cinematicButtonContainer: {
      width: '30%',
      backgroundColor: 'grey',
    },
    cinematicButton: {
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
    },
    cinematicButtonText: {
        textAlign: 'center',
    },
    resetButton:{
        width: windowHeight / 7,
        height: windowHeight / 7,
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeButton:{
        width: windowHeight / 7,
        height: windowHeight / 7,
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    memoButton:{
        width: windowHeight / 7,
        height: windowHeight / 7,
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stopButton:{
        width: windowHeight / 7,
        height: windowHeight / 7,
        backgroundColor: GLOBAL_COLORS.stopBackground,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Header;
