/* eslint-disable prettier/prettier */
/* eslint-disable semi */


import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import OTPInput from './component/OTPInput';
import { FlashList } from '@shopify/flash-list';

export default function OTPINPUT() {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;

  const newPinReady = useRef(false)

  const renderIndexList = useCallback(({ item, index }) => {
    return (<View style={{flex:1,height:20,width:412,marginBottom:10,backgroundColor:'cyan'}}><Text  style={{ color: 'red',textAlign:'center' }}>{index}</Text>{console.log(index)}</View>)

  }, [])
  const keyRender = useCallback((item, index) => {
    return index.toString()

  }, [])

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 1, 1, 1, 1, 1, 1, 12, 2, 3, 3, , 2, 2, 2, 1, 1, 1, 2, 5, 55, 1, 51, 51, 5, 1, 21, 21, 2, 1, 515, 5, 15, 1, 1, 51, 51, 51, 51, 51, 51, 51, 51, 5, 8, 88, 78, 78, 78, 787, 7, 7]

  useEffect(() => {
    setOTPCode('00000')
    setIsPinReady(true)
    // newPinReady.current = true
    // setTimeout(() => {

    //   newPinReady.current = false
    //   setTimeout(() => {
    //   newPinReady.current = true
    //   console.log("After 2100ms")

    //   }, 2100);
    //   console.log("After 2000ms")
    //   setOTPCode('1111')

    // }, 2000);
  }, [])

  return (
    <View style={styles.container}>
      {/* <OTPInput 
        code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}

        
        
        />
        <OTPInput 
        code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
        
        
      /> */}
      {console.log("----------------Hello newPinReady.current----newPinReady.current--------------", newPinReady.current)}
      <View style={{flex:1,width:412}}>

        {/* { isPinReady &&  <FlatList 
        data={data}
        // initialNumToRender={data.length}
        // extraData={newPinReady.current}
        // maxToRenderPerBatch={40}
        // windowSize={3}
        
        removeClippedSubviews= {true}
        keyExtractor={keyRender}
        renderItem={renderIndexList}
        />
      } */}

        
          <FlashList
            data={data}
            alwaysBounceVertical
            drawDistance={10}
            renderItem={renderIndexList}
            keyExtractor={keyRender}
            estimatedListSize={{
              height:20,
              width:412
            }}
        
            estimatedItemSize={90}
          />
        {/* } */}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
