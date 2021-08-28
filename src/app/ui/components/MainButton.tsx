import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import Icon from '@ui/components/Icon';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    color?: string;
    iconName?: IconProp;
    iconSize?: 18 | 20 | 22 | 26 | 30 | 34 | 38 | 42 | 46 | 50;
    enabled?: boolean;
    title?: string | number;
    style?: StyleProp<ViewStyle>;
    onPress(): void;
};

const MainButton = ({
    color,
    iconName,
    iconSize,
    enabled = true,
    onPress,
    style,
    title,
}: Props) => {
    return (
        <TouchableOpacity
            disabled={enabled === false}
            onPress={onPress}
            style={[styles.button, style, { backgroundColor: color ? color : GLOBAL_COLORS.extra }]}
        >
            {enabled === false ? (
                <View style={styles.greyButton}>
                    {iconName ? (
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={iconName}
                            size={iconSize}
                            style={styles.icon}
                        />
                    ) : (
                        <Text style={styles.text}>{title}</Text>
                    )}
                </View>
            ) : !color ? (
                <LinearGradient
                    angle={45}
                    angleCenter={{ x: 0.6, y: 0.5 }}
                    colors={[GLOBAL_COLORS.secondary, GLOBAL_COLORS.extra]}
                    style={styles.gradient}
                    useAngle
                >
                    {iconName ? (
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={iconName}
                            size={iconSize}
                            style={styles.icon}
                        />
                    ) : (
                        <Text style={styles.text}>{title}</Text>
                    )}
                </LinearGradient>
            ) : (
                <View style={[styles.greyButton, { backgroundColor: color }]}>
                    {iconName ? (
                        <Icon
                            color={GLOBAL_COLORS.icon}
                            name={iconName}
                            size={iconSize}
                            style={styles.icon}
                        />
                    ) : (
                        <Text style={styles.text}>{title}</Text>
                    )}
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
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
});

export default MainButton;
