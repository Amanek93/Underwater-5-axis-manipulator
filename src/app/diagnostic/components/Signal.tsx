import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { GLOBAL_FONTS } from '@ui';
import { Signal, SignalType } from './ConsoleWindow';
import { errorIcon, messageIcon, warningsIcon } from '../../../assets/icons';

type Props = {
    item: Signal;
};

const SignalComponent = ({ item }: Props) => {
    const parseIcon = (type: SignalType) => {
        switch (type) {
            case SignalType.info:
                return messageIcon;
            case SignalType.error:
                return errorIcon;
            case SignalType.warning:
                return warningsIcon;
            default:
                return null;
        }
    };

    return (
        <View style={styles.signalContainer}>
            <Image resizeMode="contain" source={parseIcon(item.type)} style={styles.signalIcon} />
            <Text style={styles.signalTextDate}>{item.date}</Text>
            <Text style={styles.signalTextTitle}>{item.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    signalContainer: {
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 40,
        paddingHorizontal: '2%',
        width: '100%',
    },
    signalIcon: {
        height: 16,
        width: 16,
    },
    signalTextDate: { fontFamily: GLOBAL_FONTS.ROBOTO, paddingHorizontal: 10 },
    signalTextTitle: { fontFamily: GLOBAL_FONTS.ROBOTO },
});

const equal = (prev, next) => {
    if (prev.item?.date !== next.item?.date) {
        return false;
    }
    return true;
};

export default React.memo(SignalComponent, equal);
