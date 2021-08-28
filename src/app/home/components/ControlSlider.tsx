import CircularSlider from '../../ui/components/CircularSlide';
import MainButton from '../../ui/components/MainButton';
import React, { useState } from 'react';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '../../ui';
import { HomeActionTypes } from '../actions';
import { StyleSheet, Text, View } from 'react-native';
import { getSpeed } from '../selectors';
import { useDispatch, useSelector } from 'react-redux';

type Props = {};

const ControlSlider = ({}: Props) => {
    const [count, setCount] = useState<number>(0);

    const speed = useSelector(getSpeed);
    const dispatch = useDispatch();

    const handleAddSpeed = () => {
        dispatch({ type: HomeActionTypes.ADD_SPEED });
    };

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
                onChange={(count: number) => setCount(count)}
                openingRadian={Math.PI / 2}
                step={1}
                strokeWidth={15}
                value={count}
            >
                <Text style={styles.text}>Axis 1</Text>
            </CircularSlider>
            <View style={styles.countContainer}>
                <MainButton
                    iconName={GLOBAL_ICONS.angleLeft}
                    iconSize={20}
                    onPress={handleAddSpeed}
                    style={styles.countButton}
                />
                <MainButton
                    enabled
                    onPress={() => {
                        console.log('elo');
                    }}
                    style={styles.countMeter}
                    title={speed}
                />
                <MainButton
                    iconName={GLOBAL_ICONS.angleRight}
                    iconSize={20}
                    onPress={() => setCount(count + 1)}
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
        backgroundColor: 'red',
        bottom: 90,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        width: 250,
    },
    countMeter: {
        height: 40,
        width: 100,
    },
    progressCircleContainer: {
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

export default ControlSlider;
