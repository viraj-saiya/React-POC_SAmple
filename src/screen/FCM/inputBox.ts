import React, { useRef, useState,useEffect } from "react";
import { Pressable, StyleSheet, TextInput, View, Text, Linking } from 'react-native';

const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef();
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const openMap = () => {
    Linking.openURL("geo:23.0333694,72.5709562")
  }


  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    console.log("Hello")
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };


  const boxDigit = (_, index) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;


    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const StyledSplitBoxes =
      isInputBoxFocused && isValueFocused
        ? styles.SplitBoxShadowFoused
        : styles.SplitBoxes;

    return (
      <View style={StyledSplitBoxes} key={index}>
        <Text style={styles.SplitBoxText}>{digit}</Text>
      </View >
    );
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  return (
    <View style={styles.otpInputContainer}>
      <Pressable onPress={handleOnPress} style={styles.SplitOTPBoxesContainer}>
        {boxArray.map(boxDigit)}
      </Pressable>

      <TextInput
        style={styles.textInputHidden}
        ref={inputRef}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        onBlur={handleOnBlur}
        keyboardType="numeric"
      />
      {/* <Pressable onPress={openMap}>
        <Text>Press Me to open map</Text>
      </Pressable> */}

    </View>
  );
};

export const styles = StyleSheet.create({
  otpInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textInputHidden: {
    width: 300,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15
  },
  SplitOTPBoxesContainer: {
    marginVertical:10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '80%'
  },
  SplitBoxes: {
    borderColor: 'cyan',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    minWidth: 50,
    // marginHorizontal:15
  },
  SplitBoxText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#e5e5e5',

  },
  SplitBoxShadowFoused: {
    borderColor: "red",
    backgroundColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    minWidth: 50,
  }


})

export default OTPInput;