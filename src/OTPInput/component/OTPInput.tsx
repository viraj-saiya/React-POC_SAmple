/* eslint-disable prettier/prettier */
import React, { useRef, useState, useEffect } from 'react';
import { Pressable, StyleSheet, TextInput, View, Text, Linking } from 'react-native';

const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef<any>([]);
  const viewref = useRef<any>([]);
  const [digits, setDigits] = useState("")
  const ItemSperator = () => (<View style={{ flex: 1, backgroundColor: 'yellow', paddingHorizontal: 10 }} />)


  console.log("---------------",viewref.current)


  const handleChangeText = (text:string, index:number) => {
    // console.log("index",index,"maximumLength",maximumLength,"maximumLength-1",maximumLength-1)

    if (index <= maximumLength-1 ) {
      const newDigits =  text;
      let codeSplit = digits.split("");
      codeSplit[index] = newDigits;
      console.log("codeSplit[index]",codeSplit[index],"index",index)

      setDigits(codeSplit.join(""));
      if (text.length>0 && index != maximumLength-1) {
        inputRef.current[index + 1].focus()
      }

    }


  }

  const handleKeyPressTextInput = (key,index) => {
    if(key === 'Backspace') {
      console.log("digits[index]",digits[index],"index",index)
      if (!digits[index] && index > 0) {
        handleChangeText('',index)
        inputRef.current[index - 1].focus()

    }
    }

  }

  console.log(inputRef.current)

  // eslint-disable-next-line react/no-unstable-nested-components
  const InputTextBox = (item: any, index: any, array) => {
    // console.log("index", index, "item", item)
    // console.log('inputRef.current',inputRef.current)
    // style={{marginLeft:((array.lenght-1) === index || index ===0 ) ? 0 :20  }}
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View key={index} >

        <TextInput
          inputMode={'numeric'}
          style={styles.textInputHidden}
          ref={(el) => (inputRef.current[index] = el)}
          // value={code}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={({ nativeEvent: { key } }) => { handleKeyPressTextInput(key,index) }}
          maxLength={1}
          // onBlur={handleOnBlur}
          keyboardType="numeric"
        />
      </View>
    );
  };


  return (
    <View ref={viewref} style={{}}>
      {/* <Pressable onPress={handleOnPress} style={styles.SplitOTPBoxesContainer}>
      </Pressable> */}
      <View style={styles.SplitOTPBoxesContainer}>
        {boxArray.map(InputTextBox)}
      </View>

      {/* <Pressable onPress={openMap}>
        <Text>Press Me to open map</Text>
      </Pressable> */}

    </View>
  );
};

export const styles = StyleSheet.create({
  otpInputContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
  },
  textInputHidden: {
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 5,
    color: 'red',
    width: 50,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center'
  },
  SplitOTPBoxesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical:10,
    flex: 1,
    flexDirection: 'row',
    columnGap: 15,

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
    borderColor: 'red',
    backgroundColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    minWidth: 50,
  },


});

export default OTPInput;
