import React from 'react';
import {StyleProp,View, TouchableOpacity, Text, ViewStyle, StyleSheet} from "react-native";

import {GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES} from "../const";

type Props = {
    title: string | number;
    onPress?(): void;
    onLongPress?(): void;
    onLongPress?(): void;
    enabled?: boolean;
    style?: StyleProp<ViewStyle>;
    iconName?: string;
    iconSize?: 18 | 20 | 22 | 26 | 30 | 34 | 38 | 42 | 46 | 50;
    color?: string;
}
const BlueButton = ({title, onPress, color, enabled, style}: Props) => {
    return(
        <TouchableOpacity
            onPress={onPress}
            style={[style, styles.buttonContainer,{backgroundColor: color ? color : GLOBAL_COLORS.extra } ]}
            disabled={enabled === false}
        >
            {enabled === false ?
            <View style={styles.greyButton}>
                <Text style={styles.textTitle}>{title}</Text>
            </View> :
                <Text style={styles.textTitle}>{title}</Text>
            }
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent:'center',
        alignItems: 'center',
    },
    greyButton: {
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 10,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontFamily: GLOBAL_FONTS.ROBOTO_BOLD,
        fontSize: GLOBAL_FONTSIZES.header,
        color: GLOBAL_COLORS.text,
    }
})


export default BlueButton;
