import React, { useRef, useState } from 'react';
import { Animated, Easing, StyleProp, StyleSheet, ViewStyle } from 'react-native';

type Props = {
    widthSize?: number;
    handlerSize?: number;
    stepRate?: number;
    onValue?(x: any, y: any): any;
    autoCenter?: boolean;
    lockX?: boolean;
    lockY?: boolean;
    resetOnRelease?: boolean;
    axisPad?: StyleProp<ViewStyle>;
    axisPadContainer?: StyleProp<ViewStyle>;
};

const JoystickPad = ({
    widthSize,
    handlerSize,
    stepRate,
    onValue,
    autoCenter,
    lockX,
    lockY,
    resetOnRelease,
    axisPad,
    axisPadContainer,
}: Props) => {
    const [identifier, setIdentifier] = useState<number>(0);
    const [cx, setCx] = useState<number>(0);
    const [cy, setCy] = useState<number>(0);
    const [sx, setSx] = useState<number>(0);
    const [sy, setSy] = useState<number>(0);
    const [px, setPx] = useState<number>(0);
    const [py, setPy] = useState<number>(0);
    const [dx, setDx] = useState<number>(0);
    const [dy, setDy] = useState<number>(0);

    const width = widthSize ? widthSize : 300;
    const handler = handlerSize ? handlerSize : 100;
    const step = stepRate ? stepRate : 0;

    const handlerElement = useRef(null);
    const wrappedElement = useRef(null);

    const animCx = useRef(new Animated.Value(0)).current;
    const animCy = useRef(new Animated.Value(0)).current;
    const animPx = useRef(new Animated.Value(0)).current;
    const animPy = useRef(new Animated.Value(0)).current;

    const centerAnimate = () => {
        Animated.timing(animCx, {
            toValue: cx,
            duration: 300,
            easing: Easing.elastic(1),
            useNativeDriver: true,
        }).start();
        Animated.timing(animCy, {
            toValue: cy,
            duration: 300,
            easing: Easing.elastic(1),
            useNativeDriver: true,
        }).start();
    };

    const animate = () => {
        Animated.timing(animPx, {
            toValue: px,
            duration: 50,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true,
        }).start();
        Animated.timing(animPy, {
            toValue: py,
            duration: 50,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true,
        }).start();
    };

    const limiter = (input: number) => {
        const minimised = (input / width) * 2;
        const stepped = (x: number) => (step ? Math.floor(x / step) * step : x);
        const limited = (x: number) => Math.min(1, Math.max(-1, x));
        return (stepped(limited(minimised)) * width) / 2;
    };

    const sendValue = (x: number, y: number) => {
        //nie do końca rozumiem tę formułę
        onValue && onValue((x / width) * 2, (y / width) * 2);
    };

    const centerPosition = (pageX: number, pageY: number) => {
        //Gosc to deklarowal przez ref={} w widoku <Animated.View>. Nie wiem jak to zmienić
        handlerElement?.current.getNode().measure((width: number, px: number, py: number) => {
            setCx(pageX - px - width / 2);
            setCy(pageY - py - width / 2);
        }, centerAnimate());
    };

    const setPositon = (pageX: number, pageY: number, after: any) => {
        //Gosc to deklarowal przez ref={} w widoku <Animated.View>. Nie wiem jak to zmienić
        wrappedElement?.current
            .getNode()
            .measure((width: number, height: number, px: number, py: number) => {
                const cx = px + width / 2;
                const cy = py + height / 2;
                setSx(pageX - px - width / 2);
                setSy(pageY - py - width / 2);
                setPx(pageX - cx);
                setPy(pageY - cy);
            }, after);
    };

    const getTouchPoint = (touches: any, identifier: number) => {
        let touchItem = null;
        touches.map((item: any) => {
            if (item.identifier === identifier) {
                touchItem = item;
            }
        });
        return touchItem;
    };

    const onTouchStart = (evt: any) => {
        const identifier = evt.nativeEvent.identifier;
        const touchItem = getTouchPoint(evt.nativeEvent.touches, identifier);

        if (typeof identifier === 'number' && touchItem) {
            const { pageX, pageY } = touchItem;
            if (autoCenter) {
                centerPosition(pageX, pageY);
                sendValue(px, py);
                setIdentifier(identifier);
                setSx(pageX);
                setSy(pageY);
            } else {
                setPositon(pageX, pageY, () => {
                    sendValue(px, py);
                    animate();
                });
            }
        }
    };

    const onTouchMove = (evt: any) => {
        const touchItem = getTouchPoint(evt.nativeEvent.touches, identifier);

        if (touchItem) {
            const { pageX, pageY } = touchItem;

            let px = lockX ? 0 : pageX - sx + dx;
            let py = lockY ? 0 : pageY - sy + dy;

            px = lockX ? 0 : limiter(px);
            py = lockY ? 0 : limiter(py);
            sendValue(px, py);
            setPx(px);
            setPy(py);
            animate();
        }
    };

    const onTouchEnd = () => {
        if (resetOnRelease) {
            //px = 0;
            //py = 0;
            setPx(0);
            setPy(0);
        }
        if (autoCenter) {
            //dx = px;
            //dy = py;
            setDx(px);
            setDy(py);
        } else {
            //dx = 0;
            //dy = 0;
            setDx(0);
            setDy(0);
        }
        sendValue(px, py);
        setCx(0);
        setCy(0);
        setPx(px);
        setPy(py);
        setDx(dx);
        setDy(dy);
        centerAnimate();
        animate();
    };

    const onTouchCancel = () => {
        setCx(0);
        setCy(0);
        centerAnimate();
    };

    return (
        <Animated.View
            onTouchCancel={onTouchCancel}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
            onTouchStart={onTouchStart}
            ref={wrappedElement}
            style={[
                styles.AxisPadContainer,
                axisPadContainer ? axisPadContainer : {},
                {
                    width: handler,
                    height: handler,
                    transform: [
                        {
                            translateX: animCx,
                        },
                        {
                            translateY: animCy,
                        },
                    ],
                },
            ]}
        >
            <Animated.View
                ref={handlerElement}
                style={[
                    styles.AxisPad,
                    axisPad ? axisPad : {},
                    {
                        width: handler,
                        height: handler,
                        transform: [
                            {
                                translateX: animPx,
                            },
                            {
                                translateY: animPy,
                            },
                        ],
                    },
                ]}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    AxisPad: {
        alignItems: 'center',
        backgroundColor: '#00000066',
        borderRadius: 300,
        height: '60%',
        justifyContent: 'center',
        width: '60%',
    },
    AxisPadContainer: {
        alignItems: 'center',
        backgroundColor: '#00000033',
        borderRadius: 300,
        height: 300,
        justifyContent: 'center',
        width: 300,
    },
    mainContainer: {
        backgroundColor: 'red',
        height: 500,
        width: 500,
    },
});

export default JoystickPad;
