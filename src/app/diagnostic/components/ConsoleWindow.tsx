import * as React from 'react';
import SignalComponent from '@diagnostic/components/Signal';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GLOBAL_FONTS } from '@ui';
import { checkIcon } from '../../../assets/icons';
import { useState } from 'react';

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
    const flatList = React.useRef(null);
    const [isScrollEnabled, setIsScrollEnabled] = useState<boolean>(true);
    const signalHeight = 40;

    const renderSignal = ({ item }) => <SignalComponent item={item} />;

    const handleScrollToEnd = () => {
        if (isScrollEnabled) flatList?.current?.scrollToEnd();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setIsScrollEnabled(prevState => !prevState);
                }}
                style={styles.scrollButton}
            >
                <View style={styles.checkboxContainer}>
                    {isScrollEnabled && (
                        <Image resizeMode="contain" source={checkIcon} style={styles.checkIcon} />
                    )}
                </View>
                <Text style={styles.scrollButtonText}>Autoprzewijanie</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                getItemLayout={(data, index) => ({
                    length: signalHeight,
                    offset: signalHeight * index,
                    index,
                })}
                keyExtractor={(item, index) => String(index)}
                onContentSizeChange={handleScrollToEnd}
                ref={flatList}
                renderItem={renderSignal}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    checkIcon: {
        height: 16,
        width: 16,
    },
    checkboxContainer: {
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.69)',
        borderRadius: 6,
        borderWidth: 0.5,
        height: 25,
        justifyContent: 'center',
        marginRight: 15,
        width: 25,
    },
    container: {
        flex: 3,
        margin: '4%',
        marginLeft: '8%',
        marginTop: '1%',
    },
    scrollButton: {
        alignItems: 'center',
        flexDirection: 'row',
        width: 200,
    },
    scrollButtonText: {
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 16,
        paddingLeft: 10,
        paddingVertical: 19,
    },
});

export default ConsoleWindow;
