import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomizedDrawer from '@navigation/components/CustomizedDrawer';
import DiagnosticView from '@diagnostic/screens/diagnostic-view';
import HelpView from '@help//screens/help-view';
import HomeView from '@home/screens/home-view';
import InfoView from '@info/screens/info-view';
import LiveStreamView from '@liveStream/screens/liveStream-view';
import NavigationBar from '@navigation/components/NavigationBar';
import SettingsView from '@settings/screens/settings-view';
import TelemetryView from '@telemetry/screens/telemetry-view';

const Drawer = createDrawerNavigator();

const HomeStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomizedDrawer {...props} />}
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { width: 140, height: 80 },
            }}
            drawerStyle={{
                width: 150,
            }}
            drawerType={"permanent"}
            initialRouteName="Home"
        >
            <Drawer.Screen component={HomeView} name="HomeView" />
            <Drawer.Screen component={SettingsView} name="SettingsView" />
            <Drawer.Screen component={LiveStreamView} name="LiveStreamView" />
            <Drawer.Screen component={DiagnosticView} name="DiagnosticView" />
            <Drawer.Screen component={HelpView} name="HelpView" />
            <Drawer.Screen component={InfoView} name="InfoView" />
            <Drawer.Screen component={TelemetryView} name="TelemetryView" />
        </Drawer.Navigator>
    );
};

export default HomeStack;
