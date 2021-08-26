import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';


import {GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES} from '@ui';

type Props = {
    color?: string;

    enabled?: boolean;
    title?: string;
    style?: StyleProp<ViewStyle>;
    onPress(): void;
};

const MainButton = ({ color, enabled = true, onPress, style, title }: Props) => {
    return (
        <TouchableOpacity
            disabled={enabled === false}
            onPress={onPress}
            style={[styles.button, style, { backgroundColor: color ? color : GLOBAL_COLORS.extra }]}
        >
            {enabled === false ? (
                <View style={styles.greyButton}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            ) : !color ? (
                <LinearGradient
                    angle={45}
                    angleCenter={{ x: 0.6, y: 0.5 }}
                    colors={[GLOBAL_COLORS.secondary, GLOBAL_COLORS.extra]}
                    style={styles.gradient}
                    useAngle
                >
                    <Text style={styles.text}>{title}</Text>
                </LinearGradient>
            ) : (
                <View style={[styles.greyButton, { backgroundColor: color }]}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 56,
        elevation: 4,
        height: 56,
        justifyContent: 'center',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1,

    },
    gradient: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.secondary,
        borderRadius: 56,
        height: 56,
        justifyContent: 'center',
        width: '100%',
    },
    greyButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 56,
        height: 56,
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
    icon: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default MainButton;
