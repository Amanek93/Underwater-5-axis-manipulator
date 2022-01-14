import React from 'react';
import { GLOBAL_FONTS } from '..';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { searchInputIcon } from '../../../assets/icons';

type Props = {
    labelValue?: string;
    title?: string;
    subTitle?: string;
    placeHolder?: string;
    placeHolderColor?: string;
    bgColor?: string;
    onChangeText(userName: string): void;
    onSubmitEditing?(userName: string): void;
    secureTextEntry?: boolean;
};

const InputText = ({
    labelValue,
    title,
    subTitle,
    placeHolder,
    placeHolderColor,
    bgColor,
    onChangeText,
    onSubmitEditing,
    secureTextEntry,
    ...rest
}: Props) => {
    return (
        <View style={styles.inputContainer}>
            <Image resizeMode="contain" source={searchInputIcon} style={styles.icon} />
            <TextInput
                autoCapitalize="none"
                numberOfLines={1}
                onChangeText={onChangeText}
                placeholder={placeHolder}
                placeholderTextColor={placeHolderColor}
                secureTextEntry={secureTextEntry}
                style={[{ backgroundColor: `${bgColor}` }, styles.loginInputContainer]}
                value={labelValue}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        height: 32,
        left: 20,
        position: 'absolute',
        width: 32,
    },
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    loginInputContainer: {
        borderColor: 'rgba(0, 0, 0, 0.69)',
        borderRadius: 16,
        borderWidth: 1,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 16,
        height: 57,
        paddingLeft: 70,
        width: 321,
    },
});
export default InputText;
