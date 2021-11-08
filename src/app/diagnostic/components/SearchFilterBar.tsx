import * as React from 'react';
import LogContainer from '@diagnostic/components/LogContainer';
import RemoveButton from '@diagnostic/components/RemoveButton';
import SearchInput from '../../ui/components/SearchInput';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GLOBAL_FONTS } from '@ui';
import { Signal, SignalType } from '@diagnostic/components/ConsoleWindow';
import { StyleSheet, Text, View } from 'react-native';
import {
    errorIcon,
    foldersIcon,
    historyIcon,
    messageIcon,
    warningsIcon,
} from '../../../assets/icons';

type Props = {
    infoCount: number;
    warningCount: number;
    errorCount: number;
    onFilterSignalData: Dispatch<SetStateAction<Array<Signal>>>;
    signalData: Array<Signal>;
};

const SearchFilterBar = ({
    infoCount,
    warningCount,
    errorCount,
    onFilterSignalData,
    signalData,
}: Props) => {
    const [searchText, onChangeSearchText] = useState<string>('');
    const [allLogsActive, setAllLogsActive] = useState<boolean>(false);
    const [errorsActive, setErrorsActive] = useState<boolean>(false);
    const [warningsActive, setWarningsActive] = useState<boolean>(false);
    const [infoActive, setInfoActive] = useState<boolean>(false);

    const summarySignalCount = infoCount + warningCount + errorCount;

    const handleFilterSignalData = (
        type1: SignalType | null,
        type2: SignalType | null,
        type3: SignalType | null,
    ) => {
        const newSignalData = signalData.filter(
            item => item.type === type1 || item.type === type2 || item.type === type3,
        );
        onFilterSignalData(newSignalData);
    };

    const handleLogButton = (type: string) => {
        switch (type) {
            case 'all':
                setAllLogsActive(prevState => !prevState);
                break;
            case 'errors':
                setErrorsActive(prevState => !prevState);
                break;
            case 'warnings':
                setWarningsActive(prevState => !prevState);
                break;
            case 'info':
                setInfoActive(prevState => !prevState);
                break;
            case 'history':
                console.log('historia logów');
                break;
        }
    };

    const handleAllLogs = () => {
        if (allLogsActive) {
            setErrorsActive(true);
            setWarningsActive(true);
            setInfoActive(true);
        } else {
            setErrorsActive(false);
            setWarningsActive(false);
            setInfoActive(false);
        }
    };

    useEffect(() => {
        handleAllLogs();
    }, [allLogsActive]);

    useEffect(() => {
        const filters = [];
        if (infoActive) filters.push(SignalType.info);
        else filters.push(null);
        if (errorsActive) filters.push(SignalType.error);
        else filters.push(null);
        if (warningsActive) filters.push(SignalType.warning);
        else filters.push(null);

        handleFilterSignalData(filters[0], filters[1], filters[2]);
    }, [infoActive, errorsActive, warningsActive, signalData]);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Text style={styles.title}>Diagnostyka</Text>
                <SearchInput
                    labelValue={searchText}
                    onChangeText={onChangeSearchText}
                    placeHolder="Szukaj błędu..."
                    placeHolderColor="rgba(0, 0, 0, 0.69)"
                />
                <RemoveButton
                    color="rgba(255, 0, 0, 0.5)"
                    onPress={() => console.log('remove logs')}
                    title="Wyczyść logi"
                />
            </View>
            <View style={styles.filterContainer}>
                <LogContainer
                    count={summarySignalCount}
                    isActive={allLogsActive}
                    onPress={() => handleLogButton('all')}
                    sourceIcon={foldersIcon}
                    title="Wszystkie"
                    withBorder
                />
                <LogContainer
                    count={errorCount}
                    isActive={errorsActive}
                    isCheckbox
                    onPress={() => handleLogButton('errors')}
                    sourceIcon={errorIcon}
                    title="Błędy"
                />
                <LogContainer
                    count={warningCount}
                    isActive={warningsActive}
                    isCheckbox
                    onPress={() => handleLogButton('warnings')}
                    sourceIcon={warningsIcon}
                    title="Ostrzeżenia"
                />
                <LogContainer
                    count={infoCount}
                    isActive={infoActive}
                    isCheckbox
                    onPress={() => handleLogButton('info')}
                    sourceIcon={messageIcon}
                    title="Komunikaty"
                />
                <LogContainer
                    onPress={() => handleLogButton('history')}
                    sourceIcon={historyIcon}
                    title="HISTORIA"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filterContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
    },
    searchContainer: {
        alignItems: 'center',
        borderBottomColor: 'rgba(0, 0, 0, 0.34)',
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
    },
    title: {
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: 35,
    },
});

export default SearchFilterBar;
