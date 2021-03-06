import CircularSlider from '../../ui/components/CircularSlide';
import LinearGradient from 'react-native-linear-gradient';
import MainButton from '../../ui/components/MainButton';
import React, { useEffect } from 'react';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '@ui';
import { HomeActionTypes, getDevice } from '@home';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
type Props = {
    circularTitle?: string;
    addValue?: string;
    subtractValue?: string;
    dispatchName?: symbol;
    addActionType?: HomeActionTypes;
    subtractActionType?: HomeActionTypes;
    deviceKey: string;
};

let timer: any;

const ControlSlider = ({ circularTitle, addActionType, subtractActionType, deviceKey }: Props) => {
    const device = useSelector(getDevice);
    const dispatch = useDispatch();


    const handleAdd = () => {
        dispatch({ type: addActionType });
    };
    const handleSubtract = () => {
        dispatch({ type: subtractActionType });
    };

    useEffect(() => {
        if (
            device[deviceKey as keyof typeof device] === -90 ||
            device[deviceKey as keyof typeof device] === 90
        ) {
            cleanup();
            if (device[deviceKey as keyof typeof device] === 90)
                console.warn('You have reached your limit!');
        }
    }, [device[deviceKey as keyof typeof device], handleAdd]);

    const handleLongPress = (type: string) => {
        timer = setInterval(() => {
            if (type === 'plus') {
                handleAdd();
            } else if (type === 'minus') {
                handleSubtract();
            }
        }, 100);
    };
    function cleanup() {
        clearInterval(timer);
    }
    return (
        <SafeAreaView style={styles.progressCircleContainer}>
            <CircularSlider
                buttonBorderColor="#3FE3EB"
                buttonFillColor="#fff"
                buttonRadius={5}
                buttonStrokeWidth={15}
                contentContainerStyle={styles.contentContainerStyle}
                linearGradient={[
                    { stop: '0%', color: GLOBAL_COLORS.secondary },
                    { stop: '100%', color: GLOBAL_COLORS.extra },
                ]}
                max={90}
                min={-90}
                onChange={() => setCircularSliderValue(device[deviceKey as keyof typeof device])}
                openingRadian={Math.PI / 2}
                step={1}
                strokeWidth={15}
                value={device[deviceKey as keyof typeof device]}
            >
                <Text style={styles.text}>{circularTitle}</Text>
            </CircularSlider>
            <View style={styles.countContainer}>
                <MainButton
                    enabled={device[deviceKey as keyof typeof device] !== -90}
                    iconName={GLOBAL_ICONS.angleLeft}
                    iconSize={20}
                    onLongPress={() => handleLongPress('minus')}
                    onPress={handleSubtract}
                    onPressOut={cleanup}
                    style={styles.countButton}
                />
                <LinearGradient
                    angle={45}
                    angleCenter={{ x: 0.6, y: 0.5 }}
                    colors={[GLOBAL_COLORS.secondary, GLOBAL_COLORS.extra]}
                    style={styles.gradient}
                    useAngle
                >
                    <TextInput
                        style={styles.textInputContainer}
                        value={device[deviceKey as keyof typeof device].toString()}
                    />
                </LinearGradient>
                <MainButton
                    enabled={device[deviceKey as keyof typeof device] !== 90}
                    iconName={GLOBAL_ICONS.angleRight}
                    iconSize={20}
                    onLongPress={() => handleLongPress('plus')}
                    onPress={handleAdd}
                    onPressOut={cleanup}
                    style={styles.countButton}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    countButton: {
        height: 40,
        width: 70,
    },
    countContainer: {
        alignItems: 'center',
        bottom: 90,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        width: 250,
    },
    gradient: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.secondary,
        borderRadius: 56,
        height: 56,
        justifyContent: 'center',
        width: 100,
    },
    progressCircleContainer: {
        alignItems: 'center',
        height: 230,
        justifyContent: 'center',
        transform: [
            {
                scale: 0.8,
            },
        ],
    },
    text: {
        bottom: 20,
        color: GLOBAL_COLORS.primary,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
    textInputContainer: {
        alignItems: 'center',
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        height: 56,
        justifyContent: 'center',
        letterSpacing: 0.09,
        textAlign: 'center',
        width: 100,
    },
});

export default ControlSlider;
