import * as React from 'react';
import Icon from '../../ui/components/Icon';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import LinearGradient from 'react-native-linear-gradient';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

type Props = {
    color?: string;
    iconName?: IconProp | undefined;
    iconSize?: 18 | 20 | 22 | 26 | 30 | 34 | 38 | 42 | 46 | 50;
    enabled?: boolean;
    title?: string | number;
    style?: StyleProp<ViewStyle>;
    onPress?(): void;
    activeId?: number;
    indexId?: number;
};

const FlatListButton = ({ color, iconName, iconSize, enabled, title, style, onPress, activeId, indexId}: Props) => (
    <TouchableOpacity
        disabled={enabled === false}
        onPress={onPress}
        style={[
            styles.flatListButton,
            style,
            { backgroundColor: color ? color : GLOBAL_COLORS.extra },
        ]}
    >
        {activeId === indexId ? (
            <View style={styles.greyButton}>
                <View style={styles.iconContainer}>
                    <Icon
                        color={GLOBAL_COLORS.icon}
                        name={iconName}
                        size={iconSize}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.flatListText}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        ) : !color ? (
            <LinearGradient
                angle={45}
                angleCenter={{ x: 0.6, y: 0.5 }}
                colors={[GLOBAL_COLORS.secondary, GLOBAL_COLORS.extra]}
                style={styles.gradient}
                useAngle
            >
                <View style={styles.iconContainer}>
                    <Icon
                        color={GLOBAL_COLORS.icon}
                        name={iconName}
                        size={iconSize}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.flatListText}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </LinearGradient>
        ) : (
            <View style={[styles.greyButton, { backgroundColor: color }]}>
                <View style={styles.iconContainer}>
                    <Icon
                        color={GLOBAL_COLORS.icon}
                        name={iconName}
                        size={iconSize}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.flatListText}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        )}
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    flatListButton: {
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1,
        width: 400,
    },
    flatListText: {
        alignItems: 'flex-start',
        flex: 5,
        justifyContent: 'center',
        paddingLeft: 50,
    },
    gradient: {
        backgroundColor: GLOBAL_COLORS.secondary,
        borderRadius: 10,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
    },
    greyButton: {
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        height: 56,
        justifyContent: 'center',
        width: '100%',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ scale: 4 }],
    },
    iconContainer: {
        alignItems: 'center',
        flex: 3,
        height: '100%',
        justifyContent: 'center',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        justifyContent: 'center',
        letterSpacing: 0.09,
        textAlign: 'center',
    },
});
export default FlatListButton;
