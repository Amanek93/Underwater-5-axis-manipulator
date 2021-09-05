import CircularSlider from '../../ui/components/CircularSlide';
import LinearGradient from 'react-native-linear-gradient';
import MainButton from '../../ui/components/MainButton';
import React, {useEffect, } from 'react';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '@ui';
import { HomeActionTypes } from '@home';
import { StyleSheet, Text, View, TextInput } from 'react-native';


import {getDevice} from '@home';
import { useDispatch, useSelector } from 'react-redux';


type Props = {
    circularTitle?: string;
    addValue?: string;
    subtractValue?: string;
    dispatchName?: symbol;
};

let timer: any;

//Problem z typowaniem timera

const ControlSlider = ({circularTitle, addValue, subtractValue, dispatchName}: Props) => {
    const device = useSelector(getDevice);
    const dispatch = useDispatch();


    const handleAdd = () => {
        addValue;
    };
    const handleSubtract = () => {
        dispatch({ type: HomeActionTypes.SUBTRACT_SPEED });
    };


    useEffect (()=>{
        if (device.speed === -90 || device.speed === 90) {
            cleanup()
            if (device.speed === 90) console.warn('You have reached your limit!');
        }
    }, [device.speed, handleAdd])


    const _handleLongPress = (type: string) => {
       timer = setInterval( () => {
            if (type === 'plus') {
                handleAdd()
            } else if (type === 'minus') {
                handleSubtract()
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
                        onChage={device.speed}
                        openingRadian={Math.PI / 2}
                        step={1}
                        strokeWidth={15}
                        value={device.speed}
                        >
                        <Text style={styles.text}>{circularTitle}</Text>
                </CircularSlider>
            <View style={styles.countContainer}>
                <MainButton
                    iconName={GLOBAL_ICONS.angleLeft}
                    enabled={device.speed !== -90}
                    iconSize={20}
                    onLongPress={() => _handleLongPress('minus')}
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
                        value={device.speed.toString()}
                    />
                </LinearGradient>
                <MainButton
                    iconName={GLOBAL_ICONS.angleRight}
                    enabled={device.speed !==90}
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
        bottom: 90,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 250,
    },
    countMeter: {
        height: 40,
        width: 100,
    },
    progressCircleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        transform:[{
            scale: 0.8,
        }],
        height: 250,
    },
    text: {
        color: GLOBAL_COLORS.primary,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
        bottom: 20,
    },
    textInputContainer:{
        width: 100,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        color: GLOBAL_COLORS.text,
    },
    gradient: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.secondary,
        borderRadius: 56,
        height: 56,
        justifyContent: 'center',
        width: 100,
    },
});

export default ControlSlider;
