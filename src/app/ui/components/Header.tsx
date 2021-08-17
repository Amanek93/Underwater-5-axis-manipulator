import React, {useState, useRef} from 'react';

import { Dimensions,  Text,  SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import {GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS} from '@ui/const';

import Icon from '@ui/components/Icon';

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
                        <Text style={styles.textButton}>Connected</Text>
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
                    <View style={styles.cinematicButtonContainer}>
                        <TouchableOpacity style={styles.cinematicButton}>
                            <Text>assdasdas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cinematicButton}>
                            <Text>assdasdas</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={styles.rightHeaderContainer}>
                <TouchableOpacity style={styles.connectedButton}>
                    <View style={styles.iconContainer}>
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={GLOBAL_ICONS.home}
                            size={42}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.textButton}>Connected</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.connectedButton}>
                    <View style={styles.iconContainer}>
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={GLOBAL_ICONS.home}
                            size={42}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.textButton}>Connected</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.connectedButton}>
                    <View style={styles.iconContainer}>
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={GLOBAL_ICONS.home}
                            size={42}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.textButton}>Connected</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.connectedButton}>
                    <View style={styles.iconContainer}>
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={GLOBAL_ICONS.home}
                            size={42}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.textButton}>Connected</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: GLOBAL_COLORS.secondary,
        flexDirection: 'row',
        height: windowHeight / 7,
        justifyContent: 'center',
        width: windowWidth,
    },
    leftHeaderContainer: {
        backgroundColor: 'green',
        flex: 2,
        flexDirection: 'row',
    },
    rightHeaderContainer: {
        backgroundColor: '#8a2be2',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    connectedContainer: {
        backgroundColor: 'red',
        flex:1,
        height: windowHeight / 7,
        flexDirection: 'row',

    },
    connectedButton: {
        width: windowHeight / 7,
        height: windowHeight / 7,
        backgroundColor: 'green',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

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
        backgroundColor: 'orange',
    },
    textButton:{
        flex: 1,
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
    },
    dropdownContainer: {
        flex:1,
        backgroundColor: 'yellow',
    },
    homeStopContainer: {
      flex:1,
      backgroundColor: 'pink',
    },
    cinematicContainer: {
        flex:1,
        backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cinematicButtonContainer: {
      width: '30%',
      backgroundColor: 'grey',
    },
    cinematicButton: {
      flex:1,
    },
});

export default Header;
