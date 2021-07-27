
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from '@home/screens/home-view';
import SettingsView from '@settings/screens/settings-view';
import LiveStreamView from '@liveStream/screens/liveStream-view';
import DiagnosticView from '@diagnostic/screens/diagnostic-view';
import HelpView from '@help//screens/help-view';
import InfoView from '@info/screens/info-view';
import TelemetryView from '@telemetry/screens/telemetry-view';


const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen component={HomeView} name="HomeView" />
            <Stack.Screen component={SettingsView} name="SettingsView" />
            <Stack.Screen component={LiveStreamView} name="LiveStreamView" />
            <Stack.Screen component={DiagnosticView} name="DiagnosticView" />
            <Stack.Screen component={HelpView} name="HelpView" />
            <Stack.Screen component={InfoView} name="InfoView" />
            <Stack.Screen component={TelemetryView} name="TelemetryView" />

        </Stack.Navigator>
    );
};

export default HomeStack;
