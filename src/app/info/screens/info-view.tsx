import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { observer } from 'mobx-react-lite';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

// import i18n from '@shared/language/i18n';
import {GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS} from '@ui';
//import { StackNavigationProp } from '@react-navigation/stack';

import Header from '../../ui/components/Header';
//import NavigationBar from '@ui/components/NavigationBar';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import FlatListButton from "@telemetry/components/FlatListButton";
const FlatListData = [
    {
        id: 0,
        title: 'Manipulator',
        key: 'manip',
    },
    {
        id: 1,
        title: 'Firma',
        key: 'firm',
    },
    {
        id: 2,
        title: 'Aplikacja',
        key: 'app',
    },

];

type Props = {
    navigation: DrawerNavigationProp<any>;
};

const InfoView = observer(function WelcomeView({ navigation }: Props) {
    const [isSelected, setIsSelected] = useState<boolean>(true);
    const [isActive, setIsActive] = useState<number>(0);
    const [activeKey, setActiveKey] = useState<string>('manip')

    useEffect(
        () =>
            navigation.addListener('beforeRemove', e => {
                e.preventDefault();
            }),
        [navigation],
    );
    useEffect( () => {
        console.log(activeKey)
    }, [activeKey])

    const handleFlatListButton = ({ item, index }: any) => {
        setIsSelected(!isSelected);
        setIsActive(index);
        setActiveKey(item.key)

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
            <LinearGradient
                angle={45}
                angleCenter={{ x: 0.6, y: 0.5 }}
                colors={[`rgba(155, 155, 155, 1)`, `rgba(225, 225, 225, 1)`]}
                useAngle
                style={styles.contentContainer}>
                <View style={styles.leftBoxContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Informacje</Text>
                    </View>
                    <FlatList
                        contentContainerStyle={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: '100%',
                            paddingBottom: '25%',
                        }}
                        data={FlatListData}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                    />
                </View>
                <View style={styles.rightBoxContainer}>
                    {activeKey === 'manip' ?
                        <View>
                            <Text>manip</Text>
                        </View>
                    : activeKey === 'firm' ?
                            <View>
                                <Text>firm</Text>
                            </View>
                        :
                        <View>
                            <Text>app</Text>
                        </View>
                    }
                </View>
            </LinearGradient>
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: `rgba(225, 225, 225, 1)`,
        flex: 1,

    },
    contentContainer: {
        backgroundColor: 'rgba(65, 81, 113, 0.69)',
        borderBottomLeftRadius: 200,
        flexDirection: 'row',
        flex: 1,
        padding: '2%',
    },
    leftBoxContainer: {
        borderBottomLeftRadius: 200,
        alignItems: 'center',
        flex:1,
    },
    rightBoxContainer: {
        backgroundColor: 'white',
        flex:1,
        borderRadius: 20,
        shadowOffset: {
            height: 5,
            width: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },
    titleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%',
    },
    titleText: {
        color: GLOBAL_COLORS.primary,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.title,
        fontWeight: 'bold' as const,
        justifyContent: 'center',
        letterSpacing: 0.09,
        textAlign: 'center',
        width: '100%'
    }
});

export default InfoView;
