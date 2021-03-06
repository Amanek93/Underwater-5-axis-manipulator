import * as React from 'react';
import LogContainer from '@diagnostic/components/LogContainer';
import RemoveButton from '@diagnostic/components/RemoveButton';
import SearchInput from '../../ui/components/SearchInput';
import i18n from '@language/i18n';
import useDebounce from '@shared/utils/debounce';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GLOBAL_FONTS } from '@ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Signal, SignalType } from '@diagnostic/components/ConsoleWindow';
import {
    errorIcon,
    foldersIcon,
    historyIcon,
    messageIcon,
    warningsIcon,
} from '../../../assets/icons';
import { windowWidth } from '@ui/components/Header';

type Props = {
    onFilterSignalData: Dispatch<SetStateAction<Array<Signal>>>;
    onExtraFilterSignalData: Dispatch<SetStateAction<Array<Signal>>>;
    onSignalData: Dispatch<SetStateAction<Array<Signal>>>;
    onSearchByText: Dispatch<SetStateAction<boolean>>;
    signalData: Array<Signal>;
};

const baseTranslationPath = 'screens.diagnosticView';

const SearchFilterBar = ({
    onFilterSignalData,
    onExtraFilterSignalData,
    onSignalData,
    onSearchByText,
    signalData,
}: Props) => {
    const [searchText, onChangeSearchText] = useState<string>('');
    const [allLogsActive, setAllLogsActive] = useState<boolean>(false);
    const [errorsActive, setErrorsActive] = useState<boolean>(false);
    const [warningsActive, setWarningsActive] = useState<boolean>(false);
    const [infoActive, setInfoActive] = useState<boolean>(false);
    const debouncedSearchValue = useDebounce(searchText, 800);

    const signalCounter = (type: SignalType) => {
        if (signalData.length > 0) {
            return signalData.filter(function (item) {
                return item.type === type;
            }).length;
        } else return 0;
    };

    const errorCount = signalCounter(SignalType.error);
    const infoCount = signalCounter(SignalType.info);
    const warningCount = signalCounter(SignalType.warning);
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

    const handleExtraFilterSignalData = value => {
        onSearchByText(true);
        const newSignalData = signalData.filter(item => {
            return item ? item.title.toLowerCase().includes(value.toLowerCase()) : null;
        });
        onExtraFilterSignalData(newSignalData);
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
                console.log('historia log??w');
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

    const handleRemoveSignalData = () => {
        onSignalData([]);
        onExtraFilterSignalData([]);
        onSearchByText(false);
        onChangeSearchText('');
    };

    useEffect(() => {
        if (debouncedSearchValue === '') onSearchByText(false);
        else handleExtraFilterSignalData(debouncedSearchValue);
    }, [debouncedSearchValue]);

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

        //TODO: fix it - delete if
        if (debouncedSearchValue === '') handleFilterSignalData(filters[0], filters[1], filters[2]);
    }, [infoActive, errorsActive, warningsActive, signalData]);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Text style={styles.title}>{i18n.t(`${baseTranslationPath}.diagnostic`)}</Text>
                <SearchInput
                    bgColor="transparent"
                    labelValue={searchText}
                    onChangeText={onChangeSearchText}
                    placeHolder={i18n.t(`${baseTranslationPath}.searchError`)}
                    placeHolderColor="rgba(0, 0, 0, 0.69)"
                />
                <RemoveButton
                    color="rgba(255, 0, 0, 0.5)"
                    onPress={handleRemoveSignalData}
                    title={i18n.t(`${baseTranslationPath}.clearLogs`)}
                />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollFilterContainer}
            >
                <View style={styles.filterContainer}>
                    <LogContainer
                        count={summarySignalCount}
                        isActive={allLogsActive}
                        onPress={() => handleLogButton('all')}
                        sourceIcon={foldersIcon}
                        title={i18n.t(`${baseTranslationPath}.all`)}
                        withBorder
                    />
                    <LogContainer
                        count={errorCount}
                        isActive={errorsActive}
                        isCheckbox
                        onPress={() => handleLogButton('errors')}
                        sourceIcon={errorIcon}
                        title={i18n.t(`${baseTranslationPath}.errors`)}
                    />
                    <LogContainer
                        count={warningCount}
                        isActive={warningsActive}
                        isCheckbox
                        onPress={() => handleLogButton('warnings')}
                        sourceIcon={warningsIcon}
                        title={i18n.t(`${baseTranslationPath}.warnings`)}
                    />
                    <LogContainer
                        count={infoCount}
                        isActive={infoActive}
                        isCheckbox
                        onPress={() => handleLogButton('info')}
                        sourceIcon={messageIcon}
                        title={i18n.t(`${baseTranslationPath}.info`)}
                    />
                    <LogContainer
                        onPress={() => handleLogButton('history')}
                        sourceIcon={historyIcon}
                        title={i18n.t(`${baseTranslationPath}.history`)}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filterContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        // width: windowWidth,
    },
    scrollFilterContainer: { flex: 1, width: windowWidth },
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
