import React from 'react';
import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { GLOBAL_FONTS } from '@ui';
import { checkIcon } from '../../../assets/icons';

type Props = {
    sourceIcon: ImageProps;
    color?: string;
    title?: string | number;
    onPress?(): void;
    count?: number;
    isActive?: boolean;
    isCheckbox?: boolean;
    withBorder?: boolean;
};

const LogContainer = ({
    color,
    onPress,
    title,
    sourceIcon,
    count,
    isActive,
    isCheckbox,
    withBorder,
}: Props) => {
    const isCount = count !== undefined && count >= 0;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.buttonContainer,
                { backgroundColor: color },
                withBorder && styles.borderContainer,
            ]}
        >
            {isCheckbox && (
                <View style={styles.checkboxContainer}>
                    {isActive && (
                        <Image resizeMode="contain" source={checkIcon} style={styles.checkIcon} />
                    )}
                </View>
            )}
            <Image resizeMode="contain" source={sourceIcon} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <View
                style={[
                    styles.counterContainer,
                    !isCount && { backgroundColor: 'transparent' },
                    isActive && { backgroundColor: 'rgba(65, 81, 113, 1)' },
                ]}
            >
                <Text style={[styles.counterText, isActive && { color: 'white' }]}>{count}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    borderContainer: {
        borderColor: 'rgba(0, 0, 0, 0.69)',
        borderRadius: 16,
        borderWidth: 1,
    },
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 57,
        paddingLeft: 25,
    },
    checkIcon: {
        height: 16,
        width: 16,
    },
    checkboxContainer: {
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.69)',
        borderRadius: 6,
        borderWidth: 0.5,
        height: 25,
        justifyContent: 'center',
        marginRight: 15,
        width: 25,
    },
    counterContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(196, 196, 196, 1)',
        height: 32,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 25,
        minWidth: 32,
    },
    counterText: {
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 13,
        padding: 5,
    },
    icon: {
        height: 24,
        width: 24,
    },
    title: {
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 16,
        paddingLeft: 10,
        paddingVertical: 19,
    },
});

export default LogContainer;
