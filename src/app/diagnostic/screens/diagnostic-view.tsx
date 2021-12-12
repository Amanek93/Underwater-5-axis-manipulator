import * as React from 'react';
import moment from 'moment';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

import ConsoleWindow, { Signal, SignalType } from '@diagnostic/components/ConsoleWindow';
import Header from '../../ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import SearchFilterBar from '@diagnostic/components/SearchFilterBar';

type Props = {
    navigation: DrawerNavigationProp<any>;
};

const DATA = [
    { type: SignalType.info, date: '21-10-2021 22:37:01', title: 'Urządzenie podłączone' },
    {
        type: SignalType.warning,
        date: '21-10-2021',
        title: 'Przed rozpoczęciem pracy, sprawdź stan baterii',
    },
    { type: SignalType.error, date: '21-10-2021', title: 'Awaria silnika osi X' },
    { type: SignalType.error, date: '21-10-2021', title: 'Brak zasilania' },
    { type: SignalType.info, date: '21-10-2021', title: 'Urządzenie podłączone' },
    {
        type: SignalType.warning,
        date: '21-10-2021',
        title: 'Przed rozpoczęciem pracy, sprawdź stan baterii',
    },
    { type: SignalType.error, date: '21-10-2021', title: 'Awaria silnika osi X' },
    { type: SignalType.error, date: '21-10-2021', title: 'Brak zasilania' },
    { type: SignalType.info, date: '21-10-2021', title: 'Urządzenie podłączone' },
    {
        type: SignalType.warning,
        date: '21-10-2021',
        title: 'Przed rozpoczęciem pracy, sprawdź stan baterii',
    },
    { type: SignalType.error, date: '21-10-2021', title: 'Awaria silnika osi X' },
    { type: SignalType.error, date: '21-10-2021', title: 'Brak zasilania' },
    { type: SignalType.info, date: '21-10-2021', title: 'Urządzenie podłączone' },
    {
        type: SignalType.warning,
        date: '21-10-2021',
        title: 'Przed rozpoczęciem pracy, sprawdź stan baterii',
    },
    { type: SignalType.error, date: '21-10-2021', title: 'Awaria silnika osi X' },
    { type: SignalType.error, date: '21-10-2021', title: 'Brak zasilania' },
];

const DiagnosticView = ({ navigation }: Props) => {
    const [signalData, setSignalData] = useState<Array<Signal>>(DATA);
    const [filteredSignalData, setFilteredSignalData] = useState<Array<Signal>>([]);
    const [extraFilteredSignalData, setExtraFilteredSignalData] = useState<Array<Signal>>([]);
    const [searchByText, setSearchByText] = useState<boolean>(false);

    //TODO: dodać kolejny poziom filtrowania danych po filtrowaniu checkboxami, zeby filtrowac po wyszukiwanym tekscie

    useEffect(() => {
        const signalGenerator = setInterval(() => {
            const currentTime = moment().format('MM-DD-YYYY HH:mm:ss');
            const signal = {
                type: SignalType.error,
                date: currentTime,
                title: 'Brak połączenia z urządzeniem',
            };
            setSignalData(prevArray => [...prevArray, signal]);
        }, 1000);
        return () => {
            clearInterval(signalGenerator);
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <SearchFilterBar
                onExtraFilterSignalData={setExtraFilteredSignalData}
                onFilterSignalData={setFilteredSignalData}
                onSearchByText={setSearchByText}
                onSignalData={setSignalData}
                signalData={signalData}
            />
            <View style={styles.spacer} />
            <ConsoleWindow data={searchByText ? extraFilteredSignalData : filteredSignalData} />
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
