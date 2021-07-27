
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import { StyleSheet, View, Image,  Dimensions  } from 'react-native';

import { GLOBAL_COLORS } from '@ui/const';

// import Icon from '@ui/components/Icon';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;



type Props = {
    onPress?(): void;
    navigation?: StackNavigationProp<any>;
};

const Header = ({}: Props) => {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <View style={{flex:1}}>
                <View style={{width: 150,justifyContent:'center', alignItems:'flex-start',}}>
                    <Image
                        style={styles.imageContainer}
                        resizeMode={'contain'}
                        source={require('../../../assets/images/ocean-tech-logo.png')}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: windowHeight/7,
        width: windowWidth,
        backgroundColor: GLOBAL_COLORS.secondary,
    },
    greyButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 56,
        height: 56,
        justifyContent: 'center',
        width: '100%',
    },
    iconContainer: {
        height: windowHeight/7,
    },
    imageContainer: {
        width: 150,
        height: windowHeight/7,
        margin:5,
    }
});

export default Header;
