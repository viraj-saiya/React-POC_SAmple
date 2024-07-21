import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import SpecchtoTextComponent from "./SpeechToTextComponent";

export default function SpecchtoText ()  {
  const [spTextResult,setSpTextResult] = useState('')


  return (
    <View>
      <SpecchtoTextComponent result={(data)=>{setSpTextResult(data)}}/>
      <Text style={{color:'red'}}>{spTextResult}</Text>
    </View>

  )
}