import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import { observer } from 'mobx-react-lite';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';

import Header from '../../ui/components/Header';
import MainButton from '@ui/components/MainButton';
import NavigationToggleButton from '@ui/components/NavigationToggleButton';
import { HomeActionTypes} from '@home';
import Slider from '@react-native-community/slider';
import {useSelector, useDispatch} from "react-redux";
import { AppState } from '@app/store/models';

const DATA = [
    {
        id: 'bd7',
        title: 'Axis 1',
        addActionType:{ type: HomeActionTypes.ADD_AXIS1 },
        subtractActionType:{ type: HomeActionTypes.SUBTRACT_AXIS1 },
        payload: HomeActionTypes.NEW_VALUE_AXIS1,
        devKey: 'axialRadius1',
    },
    {
        id: 'db8',
        title: 'Axis 2',
        addActionType:{ type: HomeActionTypes.ADD_AXIS2 },
        subtractActionType:{ type: HomeActionTypes.SUBTRACT_AXIS2 },
        payload: HomeActionTypes.NEW_VALUE_AXIS2,
        devKey: 'axialRadius2',
    },
    {
        id: 'db9',
        title: 'Axis 3',
        addActionType:{ type: HomeActionTypes.ADD_AXIS3 },
        subtractActionType:{ type: HomeActionTypes.SUBTRACT_AXIS3 },
        payload: HomeActionTypes.NEW_VALUE_AXIS3,
        devKey: 'axialRadius3',
    },
    {
        id: 'db10',
        title: 'Axis 4',
        addActionType:{ type: HomeActionTypes.ADD_AXIS4 },
        subtractActionType:{ type: HomeActionTypes.SUBTRACT_AXIS4 },
        payload: HomeActionTypes.NEW_VALUE_AXIS4,
        devKey: 'axialRadius4',
    },
    {
        id: 'db11',
        title: 'Axis 5',
        addActionType:{ type: HomeActionTypes.ADD_AXIS5 },
        subtractActionType:{ type: HomeActionTypes.SUBTRACT_AXIS5 },
        payload: HomeActionTypes.NEW_VALUE_AXIS5,
        devKey: 'axialRadius5',
    },
    {
        id: 'db12',
        title: 'Speed',
        addActionType: {type: HomeActionTypes.ADD_SPEED},
        subtractActionType: {type: HomeActionTypes.SUBTRACT_SPEED},
        payload: HomeActionTypes.NEW_VALUE_SPEED,
        devKey: 'speed',
    },
];

type Props = {
    navigation: DrawerNavigationProp<never>;
};

const HomeView = observer(function WelcomeView({ navigation }: Props) {
    const dispatch = useDispatch();
    const deviceValue = useSelector((state: AppState) => state.home);

    useEffect(() => {
        console.log(deviceValue)
    },[deviceValue])

    useEffect(
        () =>
            navigation.addListener('beforeRemove', e => {
                e.preventDefault();
            }),
        [navigation],
    );

    const Item = ({item}: any) => {
        return (
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 100, marginVertical: 10, paddingRight: 15}}>
                <View style={{justifyContent: 'center', alignItems:'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center', }}>
                <TouchableOpacity style={{width: 50, height:50, borderRadius: 5, backgroundColor: 'white', justifyContent:'center',alignItems:'center'}}
                                  onPress={()=>dispatch(item.subtractActionType)}
                >
                    <LinearGradient
                        angle={45}
                        angleCenter={{ x: 0.6, y: 0.5 }}
                        colors={['rgba(65, 81, 113, 1)',`rgba(65, 81, 113, 0)`]}
                        style={styles.gradient}
                        useAngle
                    >
                        <Text style={styles.textButton}>-</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{width:'60%',justifyContent: 'center', alignItems: 'center'}}>
                    <Slider
                        style={{width: '80%'}}
                        minimumValue={-90}
                        maximumValue={90}
                        value={deviceValue.device[item.devKey]}
                        onValueChange={(value)=>dispatch({type: item.payload, payload: value})}
                        step={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                </View>
                <TouchableOpacity style={{width: 50, height:50, borderRadius: 5, backgroundColor: 'white', justifyContent:'center',alignItems:'center'}}
                                  onPress={()=>dispatch(item.addActionType)}
                >
                    <LinearGradient
                        angle={45}
                        angleCenter={{ x: 0.6, y: 0.5 }}
                        colors={['rgba(65, 81, 113, 1)',`rgba(65, 81, 113, 0)`]}
                        style={styles.gradient}
                        useAngle
                    >
                    <Text style={styles.textButton}>+</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
                    <View style={{justifyContent:'center', alignItems:'center', bottom:'5%'}}>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                </View>
                <View>
                    <TextInput style={{width: 50, height: 50, borderRadius: 5, backgroundColor: 'white', textAlign:'center'}}
                        value={`${deviceValue.device[item.devKey]}`} editable={false}
                    />
                    <View style={{justifyContent:'center', alignItems:'center', bottom:'5%'}}>
                        <Text/>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.contentContainer}>
                <View style={styles.leftContentContainer} />
                <View style={styles.rightContentContainer}>
                    <View style={styles.rightContentTitleContainer}>
                        <Text style={styles.textTitle}>Control Sliders Box</Text>
                    </View>
                    <View style={styles.rightContentBodyContainer}>
                        <FlatList data={DATA} renderItem={Item} keyExtractor={item => item.id}/>
                    </View>
                    <View style={styles.rightContentResetContainer}>
                        <TouchableOpacity  onPress={()=> {
                            dispatch({ type: HomeActionTypes.RESET_AXIS1 })
                            dispatch({ type: HomeActionTypes.RESET_AXIS2 })
                            dispatch({ type: HomeActionTypes.RESET_AXIS3 })
                            dispatch({ type: HomeActionTypes.RESET_AXIS4 })
                            dispatch({ type: HomeActionTypes.RESET_AXIS5 })
                            dispatch({ type: HomeActionTypes.RESET_SPEED })
                        }} style={{width: 200, height:60,justifyContent: 'center', alignItems:'center',  backgroundColor: '#FF000080', borderRadius:10, borderWidth:1}}>
                            <Text style={styles.text}>RESET</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <NavigationToggleButton onPress={() => navigation.toggleDrawer()} />
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL_COLORS.primary,
        flex: 1,
    },
    contentContainer: {
        backgroundColor: `#ffffff`,
        flexDirection: 'row',
        flex: 1,
    },
    flatListContainer: {
        flex: 1,
    },
    leftContentContainer: {
        //backgroundColor: `#ff0000`,
        flex: 10,
    },
    mainButton: {
        width: 100,
    },
    renderItemContainer: {
        width: 230,
    },
    rightContentButtonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        width: '80%',
    },
    rightContentContainer: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.leftViewContainer,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        flex: 5,
        justifyContent: 'center',
    },
    rightContentRotaryContainer: {
        alignItems: 'center',
        flex: 8,
        justifyContent: 'center',
        width: '100%',
    },
    rightContentTitleContainer: {
        width: '100%',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    rightContentBodyContainer:{
        justifyContent: 'center',
        width: '100%',
        flex: 10,
    },
    rightContentResetContainer: {
        width: '100%',
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'center',
    },
    gradient: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height:'100%',
        borderRadius: 5,
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
    textButton: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.title,
        fontWeight: 'bold' as const,
        justifyContent: 'center',
        letterSpacing: 0.09,
        textAlign: 'center',
        width: '100%',
    },
    text: {
        color: GLOBAL_COLORS.darkText,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.info,
        fontWeight: 'bold' as const,
        justifyContent: 'center',
        letterSpacing: 0.09,
        textAlign: 'center',
        width: '100%',
    }

});

export default HomeView;
