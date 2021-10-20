import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

// import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '@ui';

// eslint-disable-next-line import/no-unresolved
import Chart from '@telemetry/components/Chart';
import FlatListButton from '@telemetry/components/FlatListButton';
import Header from '../../ui/components/Header';
import MainButton from '@ui/components/MainButton';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';
const FlatListData = [
    {
        id: 0,
        title: 'Voltage',
        data: [1,100,2,],
        units: '[V]',
    },
    {
        id: 1,
        title: 'Amperage',
        data: [1,2,3,4,5,6,7,8,9,],
        units: '[A]',
    },
    {
        id: 2,
        title: 'Speed',
        data: [1,2,3,4,5,6,7,8,9,],
        units: '[m/s]',
    },
    {
        id: 3,
        title: 'Power',
        data: [1,2,3,4,5,6,7,8,9,],
        units: '[W]',
    },
    {
        id: 4,
        title: 'Translation',
        data: [1,2,3,4,5,6,723,8,9,],
        units: '[mm]',
    },
    {
        id: 5,
        title: 'Torque',
        data: [1,22,3,4,5,16,7,8,9,],
        units: '[Nm]',
    },
];
type Props = {
    navigation: DrawerNavigationProp<never>;
};

const TelemetryView = observer(function WelcomeView({ navigation }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const [isSelected, setIsSelected] = useState<boolean>(true);
    const [chartData, setChartData] = useState<object>([]);
    const [isActive, setIsActive] = useState<number>(0);
    const [chartTitle, setChartTitle] = useState<string>('');
    const [chartUnit, setChartUnit] = useState<string>('')
    const [value, setValue] = useState('Axis 1');
    const [items, setItems] = useState([
        { label: 'Axis 1', value: 'Axis 1' },
        { label: 'Axis 2', value: 'Axis 2' },
        { label: 'Axis 3', value: 'Axis 3' },
        { label: 'Axis 4', value: 'Axis 4' },
        { label: 'Axis 5', value: 'Axis 5' },
        { label: 'Axis 6', value: 'Axis 6' },
        { label: 'All Axis', value: 'All Axis' },
    ]);
    useEffect(
        () =>
            navigation.addListener('beforeRemove', e => {
                e.preventDefault();
            }),
        [navigation],
    );
    const handleFlatListButton = ({ item, index }: any) => {
        setIsSelected(!isSelected);
        setIsActive(index);
        setChartData(item.data);
        setChartTitle(item.title);
        setChartUnit(item.units);
    };
    const renderItem = ({ item, index }: any) => (
        <FlatListButton
            activeId={isActive}
            enabled
            iconName={GLOBAL_ICONS.home}
            indexId={item.id}
            onPress={() => handleFlatListButton({ item, index })}
            title={item.title}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.contentContainer}>
                <NavigationToggleButton
                    onPress={() => navigation.toggleDrawer()}
                />
                <View style={styles.leftContentContainer}>
                    <View style={styles.leftTopContentContainer}>
                        <View style={styles.dropDownPickerContainer}>
                            <DropDownPicker
                                items={items}
                                open={open}
                                setItems={setItems}
                                setOpen={setOpen}
                                setValue={setValue}
                                style={styles.dropDownPicker}
                                value={value}
                            />
                        </View>
                    </View>
                    <View style={styles.leftMiddleContentContainer}>
                        <Chart unit={chartUnit} dataProps={chartData} title={chartTitle}/>
                    </View>
                    <View style={styles.leftBottomContentContainer} >
                        <MainButton onPress={()=>console.log('elo1')} title={'Seconds'} style={styles.timeButton}/>
                        <MainButton onPress={()=>console.log('elo1')} title={'Minutes'} style={styles.timeButton}/>
                        <MainButton onPress={()=>console.log('elo1')} title={'Hours'} style={styles.timeButton}/>
                        <MainButton onPress={()=>console.log('elo1')} title={'Days'} style={styles.timeButton}/>
                    </View>
                </View>
                <View style={styles.rightContentContainer}>
                    <View style={styles.rightTitleContentContainer}>
                        <Text style={styles.textTitle}>{value}</Text>
                    </View>
                    <View style={styles.rightFlatListContentContainer}>
                        <View style={styles.flatListContainer}>
                            <FlatList
                                contentContainerStyle={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    height: '100%',
                                }}
                                data={FlatListData}
                                keyExtractor={item => item.id.toString()}
                                renderItem={renderItem}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    dropDownPicker: {},
    dropDownPickerContainer: {
        position: 'absolute',
        width: '80%',
    },
    flatListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        width: '100%',
    },
    leftBottomContentContainer: {
        alignItems: 'center',
        backgroundColor: `#1e90ff`,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 70,
    },
    leftContentContainer: {
        flex: 10,
    },
    leftMiddleContentContainer: {
        borderRadius: 20,
        flex: 7,
    },
    leftTopContentContainer: {
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        left: 120,
        top: 50,
        zIndex: 5,
    },
    rightContentContainer: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.leftViewContainer,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        flex: 5,
        justifyContent: 'center',
    },
    rightFlatListContentContainer: {
        alignItems: 'center',

        flex: 8,
        justifyContent: 'center',
        width: '100%',
    },
    rightTitleContentContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    textTitle: {
        color: GLOBAL_COLORS.primary,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.title,
        fontWeight: 'bold' as const,
        justifyContent: 'center',
        letterSpacing: 0.09,
        textAlign: 'center',
        width: '100%',
    },
    timeButton: {
        height: 56,
        width: 160,
    },
});

export default TelemetryView;
