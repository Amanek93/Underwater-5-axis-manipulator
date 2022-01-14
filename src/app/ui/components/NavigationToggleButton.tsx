import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { toggleButtonDetailsIcon } from '../../../assets/icons';

type Props = {
    onPress(): void;
};

const NavigationToggleButton = ({ onPress }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    onPress();
                }}
                style={styles.button}
            >
                <Image
                    resizeMode="contain"
                    source={toggleButtonDetailsIcon}
                    style={styles.imageContainer}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'rgba(65, 81, 113, 0.34)',
        borderBottomEndRadius: 56,
        borderTopEndRadius: 56,
        elevation: 4,
        height: 200,
        justifyContent: 'center',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1,
        width: 40,
    },
    container: {
        left: 0,
        position: 'absolute',
        top: '45%',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NavigationToggleButton;
