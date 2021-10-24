import * as React from 'react';
import LogContainer from '@diagnostic/components/LogContainer';
import RemoveButton from '@diagnostic/components/RemoveButton';
import SearchInput from '../../ui/components/SearchInput';
import { GLOBAL_FONTS } from '@ui';
import { StyleSheet, Text, View } from 'react-native';
import {
    errorIcon,
    foldersIcon,
    historyIcon,
    messageIcon,
    warningsIcon,
} from '../../../assets/icons';
import { useEffect, useState } from 'react';

const SearchFilterBar = () => {
    const [searchText, onChangeSearchText] = useState<string>('');
    const [allLogsActive, setAllLogsActive] = useState<boolean>(false);
    const [errorsActive, setErrorsActive] = useState<boolean>(false);
    const [warningsActive, setWarningsActive] = useState<boolean>(false);
    const [infoActive, setInfoActive] = useState<boolean>(false);

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
                    count={50}
                    isActive={allLogsActive}
                    onPress={() => handleLogButton('all')}
                    sourceIcon={foldersIcon}
                    title="Wszystkie"
                    withBorder
                />
                <LogContainer
                    count={20}
                    isActive={errorsActive}
                    isCheckbox
                    onPress={() => handleLogButton('errors')}
                    sourceIcon={errorIcon}
                    title="Błędy"
                />
                <LogContainer
                    count={20}
                    isActive={warningsActive}
                    isCheckbox
                    onPress={() => handleLogButton('warnings')}
                    sourceIcon={warningsIcon}
                    title="Ostrzeżenia"
                />
                <LogContainer
                    count={10}
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
