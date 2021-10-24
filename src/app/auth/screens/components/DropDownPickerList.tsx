import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import i18n from "../../../shared/language/i18n";
import {GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES} from "../../../ui";
import DropDownPicker from 'react-native-dropdown-picker';

type Props = {
    open: boolean;
    setOpen: any;
    value: string;
    setValue: any;
    items: object;
    setItems: any;
}

const DropDownPickerList = ({open, setOpen, value, setValue, items, setItems} : Props) => {
    return(
        <>
        <DropDownPicker
            items={items}
            open={open}
            setItems={setItems}
            setOpen={setOpen}
            setValue={setValue}
            style={styles.dropDownPicker}
            value={value}
            itemSeparatorStyle={{
                backgroundColor: 'white',
                margin: 12,
            }}
            dropDownContainerStyle={{
                backgroundColor: 'rgba(37, 55, 91, 1)',
                width: 374,
                height: 193,
                left: 75,
                borderWidth: 2,
                borderColor: 'white',
                top:133,
            }}
            itemSeparator={true}
            textStyle={{
                fontSize: 20,
                color: 'white',
            }}
            showArrowIcon={true}
            arrowIconStyle={{
                width: 30,
                height: 30,
            }}
            tickIconStyle={{
                width: 30,
                height: 30,
            }}
        />
            <View style={styles.crossOutTitleContainer}>
                <Text style={styles.textContainer}>{i18n.t('screens.loginView.user')}</Text>
            </View>
            </>
    );
};
    const styles = StyleSheet.create({
    dropDownPicker: {
        backgroundColor: 'rgba(37, 55, 91, 1)',
        borderColor: 'white',
        borderWidth: 2,
        width: 374,
        height: 88,
        left: 75,
        position:'absolute',
        zIndex:1,
        elevation:1,
        top: 48,
    },
    crossOutTitleContainer: {
        backgroundColor: 'rgba(37, 55, 91, 1)',
        width: 150,
        height:20,
        left: 130,
        top: 38,
        zIndex:6000,
        elevation:6000,
        position: 'absolute',
    },
    textContainer: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
})
export default DropDownPickerList;