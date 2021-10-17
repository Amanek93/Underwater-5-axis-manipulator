import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

type Props = {};

const ConsoleWindow = ({}: Props) => {
    return <View style={styles.container} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
});

export default ConsoleWindow;
