import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

import { GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES } from '../const';

type Props = {
  labelValue?: string;
  title?: string;
  subTitle?: string;
  placeHolder?: string;
  bgColor?: string;
};

const InputText = ({labelValue, title, subTitle, placeHolder, bgColor, ...rest}: Props) => {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textContainer}>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[{backgroundColor: `${bgColor}`}, styles.loginInputContainer]}
          numberOfLines={1}
          value={labelValue}
          placeholder={placeHolder}
          {...rest}
        />
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTextContainer}>{subTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  titleContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    left: 5,
    paddingVertical: 5,
  },
  subTitleContainer: {
    alignItems: 'flex-end',
    right: 70,
  },
  inputContainer: {
    alignSelf: 'center',
  },
  loginInputContainer: {
    width: 338,
    height: 47,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    paddingLeft: 15,
  },
  subTextContainer: {
    color: 'black',
    fontSize: 11,
  },
  textContainer: {
    color: GLOBAL_COLORS.text,
    fontFamily: GLOBAL_FONTS.ROBOTO,
    fontSize: GLOBAL_FONTSIZES.header,
    fontWeight: 'bold' as const,
    letterSpacing: 0.09,
    textAlign: 'center',
  },
});
export default InputText;
