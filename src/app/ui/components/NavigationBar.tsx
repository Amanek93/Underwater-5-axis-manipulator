
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
// import i18n from '@shared/language/i18n';

import { StyleSheet, Text, TouchableOpacity, View, FlatList, Dimensions  } from 'react-native';

import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES, GLOBAL_ICONS  } from '../const';

import Icon from '@ui/components/Icon';

const windowHeight = Dimensions.get('window').height;


let DATA:
{
    icon: any,
    iconColor: string,
    title: string,
    navigationId: string,
    isActive: boolean,
}[]= [
        {
            icon: GLOBAL_ICONS.home,
            iconColor: GLOBAL_COLORS.icon,
            //title: 'screen.navigationBar.home',
            title: 'HOME',
            navigationId: 'HomeView',
            isActive: true,
        },
        {
            icon: GLOBAL_ICONS.gamepad,
            iconColor: GLOBAL_COLORS.icon,
            //title: 'screen.test.test',
            title: 'lIVE STREAM',
            navigationId: 'liveStream',
            isActive: false,
        },
        {
            icon: GLOBAL_ICONS.cog,
            iconColor: GLOBAL_COLORS.icon,
            //title: 'screen.navigationBar.settings',
            title: 'SETTINGS',
            navigationId: 'SettingsView',
            isActive: false,
        },
        {
            icon: GLOBAL_ICONS.telemetry,
            iconColor: GLOBAL_COLORS.icon,
            //title: 'screen.navigationBar.telemetry',
            title: 'TELEMETRY',
            navigationId: 'telemetry',
            isActive: false,
        },
        {
            icon: GLOBAL_ICONS.stethoscope,
            iconColor: GLOBAL_COLORS.icon,
            //title: 'screen.navigationBar.diagnostic',
            title: 'DIAGNOSTIC',
            navigationId: 'diagnostic',
            isActive: false,
        },
        {
            icon: GLOBAL_ICONS.question,
            iconColor: GLOBAL_COLORS.icon,
            //title: 'screen.navigationBar.info',
            title: 'INFO',
            navigationId: 'info',
            isActive: false,
        },
        {
            icon: GLOBAL_ICONS.help,
            iconColor: GLOBAL_COLORS.icon,
            //title: 'screen.navigationBar.help',
            title: 'HELP',
            navigationId: 'help',
            isActive: false,
        },

    ];

interface Props {
    navigation: StackNavigationProp<any>;
}


const NavigationBar = ({ navigation }: Props) => {
    const renderItem = ({item}: any) => {
        return (
            <TouchableOpacity
                style={
                    item.isActive ?
                        styles.pressedButtonContainer
                        :
                        styles.buttonContainer
                }
                onPress={() => navigation.navigate(item.navigationId)}>

                <View {...{backgroundColor: GLOBAL_COLORS.secondary, width: 15, height: '100%'}} >
                    {item.isActive &&
                    <View style={{backgroundColor: 'grey', flex:1}}/>
                    }
                </View>
                <View style={{flex:1,top: 10,}}>
                <View style={styles.iconContainer}>
                        <View style={{justifyContent: 'center', alignItems: 'center', }}>
                        <Icon
                            style={styles.iconCont}
                            color={item.iconColor}
                            name={item.icon}
                            size={42}
                        />
                        </View>
                </View>
                <View style={styles.flatListTextContainer}>
                    <Text style={styles.text}>
                        {/*{i18n.t(item.title)}*/}
                        {item.title}
                    </Text>
                </View>
               </View>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.statusBarContainer}>
            <FlatList data={DATA} renderItem={renderItem} numColumns={1}  />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    statusBarContainer: {
        height: '100%',
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greyButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 56,
        height: 56,
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
        width: 130,
    },
    iconContainer: {
    flex:0.5,
        justifyContent:'center',
        alignItems: 'center',

    },
    buttonContainer: {
        backgroundColor:GLOBAL_COLORS.secondary,
        height: windowHeight/7.5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: 150,
    },
    pressedButtonContainer: {
        backgroundColor:GLOBAL_COLORS.extra,
        height: windowHeight/7.5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: 150,
    },
    flatListTextContainer: {
        justifyContent:'flex-start',
        alignItems: 'center',
        flex:0.5,
    },
    iconCont:{
        justifyContent:'center',
        alignItems: 'center',
        flex:0.5,

    },
    imageContainer: {
        justifyContent:'center',
        alignItems:'center',
        width: 150,
    },
});

export default NavigationBar;
