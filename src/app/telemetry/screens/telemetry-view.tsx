import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from '@ui/components/Icon';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

// import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS } from '@ui';

// eslint-disable-next-line import/no-unresolved
import Chart from '@telemetry/components/Chart';
import Header from '../../ui/components/Header';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
const FlatListData = [
    {
        id: 'key1',
        title: 'Voltage',
    },
    {
        id: 'key2',
        title: 'Amperage',
    },
    {
        id: 'key3',
        title: 'Speed',
    },
    {
        id: 'key4',
        title: 'Power',
    },
    {
        id: 'key5',
        title: 'Translation',
    },
    {
        id: 'key6',
        title: 'Torque',
    },
];
type Props = {
    navigation: DrawerNavigationProp<never>;
};

const TelemetryView = observer(function WelcomeView({ navigation }: Props) {
    const [open, setOpen] = useState(false);
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

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.flatListButton}>
            <View style={styles.iconContainer}>
                <Icon
                    color={GLOBAL_COLORS.icon}
                    name={GLOBAL_ICONS.recycle}
                    size={42}
                    style={styles.icon}
                />
            </View>
            <View style={styles.flatListText}>
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
            <View style={styles.contentContainer}>
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
                        <Chart arrData={data} />
                    </View>
                    <View style={styles.leftBottomContentContainer} />
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
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                            />
                        </View>
                    </View>
                </View>
            </View>
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
        width: '80%',
    },
    flatListButton: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        width: 400,
    },
    flatListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    flatListText: {
        backgroundColor: 'green',
        flex: 5,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        backgroundColor: 'blue',
        flex: 1,
    },
    leftBottomContentContainer: {
        backgroundColor: 'purple',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
    },
    leftContentContainer: {
        flex: 10,
    },
    leftMiddleContentContainer: {
        borderRadius: 20,
        flex: 7,
    },
    leftTopContentContainer: {
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        justifyContent: 'center',
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
        backgroundColor: 'yellow',
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
});

export default TelemetryView;
