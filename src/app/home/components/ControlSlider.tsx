import CircularSlider from '../../ui/components/CircularSlide';
import LinearGradient from 'react-native-linear-gradient';
import MainButton from '../../ui/components/MainButton';
import React, { useEffect } from 'react';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '@ui';
import { HomeActionTypes, getDevice } from '@home';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
type Props = {
    circularTitle?: string;
    addValue?: string;
    subtractValue?: string;
    dispatchName?: symbol;
    addActionType?: HomeActionTypes;
    subtractActionType?: HomeActionTypes;
    deviceKey?: string | undefined;

};

let timer: any;

const ControlSlider = ({ circularTitle, addActionType, subtractActionType, deviceKey }: Props) => {
    const device = useSelector(getDevice);
    const dispatch = useDispatch();
    const key = deviceKey;

    const handleAdd = () => {
        dispatch({ type: addActionType });
    };
    const handleSubtract = () => {
        dispatch({ type: subtractActionType });
    };

    useEffect(() => {
        if (device[deviceKey] === -90 || device[deviceKey] === 90) {
            cleanup();
            if (device[deviceKey] === 90) console.warn('You have reached your limit!');
        }
    }, [device[deviceKey], handleAdd]);

    const _handleLongPress = (type: string) => {
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
        <View style={styles.progressCircleContainer}>
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
                onChage={device[deviceKey]}
                openingRadian={Math.PI / 2}
                step={1}
                strokeWidth={15}
                value={device[deviceKey]}
            >
                <Text style={styles.text}>{circularTitle}</Text>
            </CircularSlider>
            <View style={styles.countContainer}>
                <MainButton
                    enabled={device[deviceKey] !== -90}
                    iconName={GLOBAL_ICONS.angleLeft}
                    iconSize={20}
                    onLongPress={() => _handleLongPress('minus')}
                    onPress={() => console.log(circularTitle)}
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
                    <TextInput style={styles.textInputContainer} value={device[deviceKey]} />
                </LinearGradient>
                <MainButton
                    enabled={device[deviceKey] !== 90}
                    iconName={GLOBAL_ICONS.angleRight}
                    iconSize={20}
                    onLongPress={() => _handleLongPress('plus')}
                    onPress={handleAdd}
                    onPressOut={cleanup}
                    style={styles.countButton}
                />
            </View>
        </View>
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
        height: 250,
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
