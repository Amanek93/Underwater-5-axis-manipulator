import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import { Dimensions, Image, StyleSheet, View } from 'react-native';

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
            <View style={{ flex: 1 }}>
                <View style={{ width: 150, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Image
                        resizeMode="contain"
                        source={require('../../../assets/images/ocean-tech-logo.png')}
                        style={styles.imageContainer}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: GLOBAL_COLORS.secondary,
        height: windowHeight / 7,
        width: windowWidth,
    },
    imageContainer: {
        height: windowHeight / 7,
        margin: 5,
        width: 150,
    },
});

export default Header;
