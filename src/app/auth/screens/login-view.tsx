import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import i18n from '@shared/language/i18n';
import { GLOBAL_COLORS, GLOBAL_FONTSIZES } from '@ui';

import MainButton from '@ui/components/MainButton';

type Props = {
    example: boolean;
};

const LoginView = observer(function LoginView({ example }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{i18n.t('screens.loginView.test')}</Text>
            <MainButton
                onPress={() => console.warn('test')}
                style={styles.button}
                title="elo elo"
            />
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    button: {
        width: 200,
    },
    container: {
        backgroundColor: GLOBAL_COLORS.primary,
        flex: 1,
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontSize: GLOBAL_FONTSIZES.header,
    },
});

export default LoginView;
