import React from 'react';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import { StyleSheet, Text, View } from 'react-native';


import { Defs, LinearGradient, Stop } from 'react-native-svg';

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
const contentInset = { top: 0, bottom: 0 };
const Chart = () => {
    const Gradient = () => (
        <Defs key="gradient">
            <LinearGradient id="gradient" x1="0" x2="100%" y="0%" y2="0%">
                <Stop offset="0%" stopColor="rgb(134, 65, 244)" />
                <Stop offset="100%" stopColor="rgb(66, 194, 244)" />
            </LinearGradient>
        </Defs>
    );
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}> Axis 1 Chart</Text>
            </View>
            <View style={styles.chartGrafhContainer}>
                <YAxis
                    contentInset={contentInset}
                    data={data}
                    formatLabel={(value: number) => `${value}ºC`}
                    numberOfTicks={5}
                    style={styles.yAxisContainer}
                    svg={{
                        fill: GLOBAL_COLORS.darkText,
                        fontSize: 20,
                    }}
                />
                <View style={styles.chartContainer}>
                    <LineChart
                        data={data}
                        style={styles.chartValueContainer}
                        svg={{
                            strokeWidth: 5,
                            stroke: 'url(#gradient)',
                        }}
                    >
                        <Grid />
                        <Gradient />
                    </LineChart>
                </View>
            </View>
            <XAxis
                contentInset={{ left: 10, right: 10 }}
                data={data}
                formatLabel={(index: number) => index}
                style={styles.xAxisContainer}
                svg={{ fontSize: 20, fill: GLOBAL_COLORS.darkText }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        flex: 1,
    },
    chartGrafhContainer: {
        alignItems: 'center',
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
    },
    chartValueContainer: {
        backgroundColor: 'white',
        flex: 5,
    },
    container: {
        alignItems: 'center',
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
    titleContainer: {
        alignItems: 'center',
        flex: 2,
        justifyContent: 'center',
    },
    xAxisContainer: {
        backgroundColor: GLOBAL_COLORS.secondary,
        borderRadius: 20,
        flex: 1,
        textAlign: 'center',
        width: '80%',
    },
    yAxisContainer: {
        backgroundColor: GLOBAL_COLORS.secondary,
        borderRadius: 20,
    },
});
export default Chart;
