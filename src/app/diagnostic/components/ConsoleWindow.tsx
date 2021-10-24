import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { GLOBAL_FONTS } from '@ui';
import { errorIcon, messageIcon, warningsIcon } from '../../../assets/icons';

export enum SignalType {
    info = 'info',
    warning = 'warning',
    error = 'error',
}

export type Signal = {
    type: SignalType;
    date: string;
    title: string;
};

type Props = { data: Array<Signal> };

const ConsoleWindow = ({ data }: Props) => {
    const renderSignal = ({ item }: any) => {
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
                <Image
                    resizeMode="contain"
                    source={parseIcon(item.type)}
                    style={styles.signalIcon}
                />
                <Text style={styles.signalTextDate}>{item.date}</Text>
                <Text style={styles.signalTextTitle}>{item.title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{ flexDirection: 'column-reverse' }}
                data={data}
                inverted
                renderItem={renderSignal}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        margin: '4%',
        marginLeft: '8%',
    },
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

export default ConsoleWindow;
