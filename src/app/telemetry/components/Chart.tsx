import React from 'react';
import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '@ui';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import { StyleSheet, Text, View } from 'react-native';

import { Defs, LinearGradient, Stop } from 'react-native-svg';


const contentInset = { top: 0, bottom: 0 };
type Props = {
    dataProps: object;
    title: string;
    unit: string;
}
const Chart = ({dataProps, title, unit}: Props) => {
    const Gradient = () => (
        <Defs key='gradient'>
            <LinearGradient id='gradient' x1='0' x2='100%'  y2='0%'>
                <Stop offset='0%' stopColor={GLOBAL_COLORS.secondary} />
                <Stop offset='100%' stopColor={GLOBAL_COLORS.primary} />
            </LinearGradient>
        </Defs>
    );
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>{`${title} chart`}</Text>
            </View>
            <View style={styles.chartGrafhContainer}>
                <View style={styles.yAxisContainerBox}>
                <Text style={styles.text}>{unit}</Text>
                <YAxis
                    contentInset={contentInset}
                    data={dataProps}
                    formatLabel={(value: number) => value}
                    numberOfTicks={5}
                    style={styles.yAxisContainer}
                    svg={{
                        fill: GLOBAL_COLORS.darkText,
                        fontSize: 20,
                    }}
                />
                </View>
                <View style={styles.chartContainer}>
                    <LineChart
                        data={dataProps}
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
            <View style={styles.xAxisContainerBox}>
            <XAxis
                contentInset={{ left: 10, right: 10 }}
                data={dataProps}
                formatLabel={(index: number) => index}
                style={styles.xAxisContainer}
                svg={{ fontSize: 20, fill: GLOBAL_COLORS.darkText }}
            />
                <View style={styles.xAxisText}>
                <Text style={styles.text}>[s]</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        flex: 20,
    },
    chartGrafhContainer: {
        alignItems: 'center',
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
    },
    yAxisContainerBox: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
    },
    chartValueContainer: {
        borderWidth:2,
        borderRadius: 10,
        flex: 5,
        margin: (GLOBAL_FONTSIZES.title + 3),
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
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'space-between',
        top: 20,
        width: '100%',
    },
    yAxisContainer: {
        borderRadius: 20,
    },
    text: {
        color: GLOBAL_COLORS.darkText,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header,
        justifyContent: 'center',
        letterSpacing: 0.09,
        textAlign: 'center',
        width: 100,
    },
    xAxisContainerBox: {
        flexDirection: 'row',
        borderRadius: 20,
        flex: 1,
        textAlign: 'center',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: 20,
    },
    xAxisText: {
    },
});
export default Chart;
