import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { GLOBAL_FONTS } from '@ui';
import { removeIcon } from '../../../assets/icons';

type Props = {
    color?: string;
    title?: string | number;
    onPress(): void;
};

const RemoveButton = ({ color, onPress, title }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonContainer, { backgroundColor: color }]}
        >
            <Text style={styles.title}>{title}</Text>
            <Image resizeMode="contain" source={removeIcon} style={styles.icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.69)',
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: 'row',
        height: 57,
    },
    icon: {
        height: 24,
        marginRight: 29,
        width: 24,
    },
    title: {
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 16,
        paddingLeft: 29,
        paddingRight: 10,
        paddingVertical: 19,
    },
});

export default RemoveButton;
