import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DiagnosticView from '@diagnostic/screens/diagnostic-view';
import HelpView from '@help//screens/help-view';
import HomeView from '@home/screens/home-view';
import Icon from '@ui/components/Icon';
import InfoView from '@info/screens/info-view';
import LiveStreamView from '@liveStream/screens/liveStream-view';
import SettingsView from '@settings/screens/settings-view';
import TelemetryView from '@telemetry/screens/telemetry-view';
import { GLOBAL_COLORS, GLOBAL_ICONS } from '@ui';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                component={HomeView}
                name="HomeView"
                options={{
                    tabBarColor: GLOBAL_COLORS.primary,
                    tabBarIcon: ({ color }) => (
                        <Icon color="green" name={GLOBAL_ICONS.cog} size={42} />
                    ),
                    tabBarLabel: 'elo',
                }}
            />
            <Tab.Screen component={SettingsView} name="SettingsView" />
            <Tab.Screen component={LiveStreamView} name="LiveStreamView" />
            <Tab.Screen component={DiagnosticView} name="DiagnosticView" />
            <Tab.Screen component={HelpView} name="HelpView" />
            <Tab.Screen component={InfoView} name="InfoView" />
            <Tab.Screen component={TelemetryView} name="TelemetryView" />
        </Tab.Navigator>
    );
};

export default HomeStack;
