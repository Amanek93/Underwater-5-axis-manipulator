import React from 'react';
import {SafeAreaView, StyleProp, StyleSheet, Text, TextInput, View,TouchableOpacity, ViewStyle} from 'react-native';

import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';

type Props = {
    labelValue?: string;
    title?: string;
    subTitle?: string;
    placeHolder?: string;
    bgColor?: string;
    borderCl?: string;
    onChangeText?(userName: string): void;
    onSubmitEditing?(userName: string): void;
    secureTextEntry?: boolean;
    placeholderTextColor?: string;
    selectionColor?: string;
    onPressHideSecureText?(): void;
    wrongPassword?: boolean;
    showText?: string;
    wrongPasswordMessage?: string;
    style?: StyleProp<ViewStyle>;
};

const InputText = ({
    labelValue,
    title,
    placeHolder,
    bgColor,
    borderCl,
    onChangeText,
    onSubmitEditing,
    secureTextEntry,
    onPressHideSecureText,
    wrongPassword,
    showText,
    wrongPasswordMessage,
    style,
    ...rest
}: Props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.crossOutTitleContainer}>
                <Text style={styles.textContainer}>{title}</Text>
            </View>
            <View style={styles.inputContainer}>
                {wrongPassword === false ?
                    <>
                    <TextInput
                        autoCapitalize="none"
                        numberOfLines={1}
                        onChangeText={onChangeText}
                        placeholder={placeHolder}
                        secureTextEntry={secureTextEntry}
                        style={[{ backgroundColor: `${bgColor}`, borderColor: GLOBAL_COLORS.text}, styles.loginInputContainer]}
                        value={labelValue}
                        {...rest}
                    />
                    <TouchableOpacity style={styles.showButtonContainer} onPress={onPressHideSecureText}>
                        <Text style={styles.textContainer}>{showText}</Text>
                    </TouchableOpacity>
                    </>
                    :
                    <>
                        <TextInput
                            autoCapitalize="none"
                            numberOfLines={1}
                            onChangeText={onChangeText}
                            placeholder={placeHolder}
                            secureTextEntry={secureTextEntry}
                            style={[{ backgroundColor: `${bgColor}`, borderColor: borderCl ? borderCl : GLOBAL_COLORS.text},
                                styles.loginInputContainer]}
                            value={labelValue}
                            {...rest}
                        />
                        <View style={styles.wrongPasswordTextContainer}>
                            <Text style={styles.wrongPasswordText}>{wrongPasswordMessage}</Text>
                        </View>
                        <TouchableOpacity style={styles.showButtonContainer} onPress={onPressHideSecureText}>
                            <Text style={styles.textContainer}>{showText}</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        height: 88,
        width: 560,
    },
    loginInputContainer: {
        borderRadius: 10,
        borderWidth: 2,
        height: 88,
        paddingLeft: 15,
        width: 560,
        color: 'white',
        justifyContent:'center',
        alignItems:'center',
        fontSize: GLOBAL_FONTSIZES.header,
    },
    mainContainer: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    textContainer: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
    titleContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        left: 5,
        paddingVertical: 5,
    },
    showButtonContainer:{
        justifyContent:'center',
        left:-80,
    },
    crossOutTitleContainer: {
        backgroundColor: 'rgba(37, 55, 91, 1)',
        width: 150,
        height:20,
        bottom:-10,
        left:-150,
        zIndex:100,
        elevation:100,
    },
    wrongPasswordTextContainer: {
        position: 'absolute',
        width: '100%',
        bottom:-40,
    },
    wrongPasswordText: {
        fontFamily: GLOBAL_FONTS.ROBOTO_BOLD,
        fontSize: GLOBAL_FONTSIZES.header,
        color: GLOBAL_COLORS.red,
        justifyContent: 'center',
    }
});
export default InputText;
