import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';

const Pad = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,

            onPanResponderMove: (evt, gestureState) => {
                console.log('współrzędne X ', pan.x, 'współrzędne Y ', pan.y);
                return Animated.event([null, { dx: pan.x, dy: pan.y }], {
                    useNativeDriver: false,
                })(evt, gestureState);
            },

            onPanResponderRelease: () => {
                Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
            },
        }),
    ).current;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Drag & Release this box!</Text>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }],
                }}
                {...panResponder.panHandlers}
            >
                <View style={styles.box} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'blue',
        borderRadius: 5,
        height: 150,
        width: 150,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 24,
    },
});

export default Pad;
