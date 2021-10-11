import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import Icon from '@ui/components/Icon';
import { GLOBAL_COLORS, GLOBAL_ICONS } from '@ui';

const NAVIGATION_BAR_WIDTH = 175;

type Props = {
    onPress(): void;
};

const NavigationToggleButton = ({ onPress }: Props) => {
    const [progress] = useState<Animated.Value>(new Animated.Value(0));
    const isDrawerOpen = useIsDrawerOpen();

    const show = () => {
        Animated.timing(progress, {
            duration: 2,
            toValue: 1,
            useNativeDriver: false,
        }).start();
    };

    const hide = () => {
        Animated.timing(progress, {
            duration: 2,
            toValue: 0,
            useNativeDriver: false,
        }).start();
    };

    const toggleDrawer = () => {
        if (isDrawerOpen) hide();
        else show();
    };

    useEffect(() => {
        toggleDrawer();
    }, [isDrawerOpen]);

    const translateX = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [NAVIGATION_BAR_WIDTH, 0],
    });

    const opacity = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0.6, 0.5],
    });

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [{ translateX }],
                    opacity,
                },
            ]}
        >
            <TouchableOpacity
                onPress={() => {
                    toggleDrawer();
                    onPress();
                }}
                style={styles.button}
            >
                <Icon
                    color={GLOBAL_COLORS.darkIcon}
                    name={GLOBAL_ICONS.navigate}
                    size={42}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.third,
        borderBottomEndRadius: 56,
        borderTopEndRadius: 56,
        elevation: 4,
        height: 100,
        justifyContent: 'center',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },
    container: {
        left: 0,
        position: 'absolute',
        top: '45%',
    },
    icon: {},
});

export default NavigationToggleButton;
