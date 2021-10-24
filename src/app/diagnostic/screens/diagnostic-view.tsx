import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';

import ConsoleWindow from '@diagnostic/components/ConsoleWindow';
import Header from '../../ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import SearchFilterBar from '@diagnostic/components/SearchFilterBar';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type Props = {
    navigation: DrawerNavigationProp<any>;
};

const DiagnosticView = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <SearchFilterBar />
            <View style={styles.spacer} />
            <ConsoleWindow />
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    spacer: {
        backgroundColor: 'rgba(106, 106, 106, 0.1)',
        borderBottomColor: 'rgba(0, 0, 0, 0.34)',
        borderBottomWidth: 2,
        borderTopColor: 'rgba(0, 0, 0, 0.34)',
        borderTopWidth: 2,
        flex: 0.4,
    },
});

export default DiagnosticView;
