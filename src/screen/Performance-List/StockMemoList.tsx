import React from "react";
import { Text, View } from "react-native";

function StockMemoList({item}) {
  return (
    <View style={{ flex: 1, width: 412, marginBottom: 10, backgroundColor: 'cyan', paddingHorizontal: 15 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>

          <Text style={{ color: 'red', fontSize: 30 }} >{item?.stockName}</Text>
        </View>
        <View style={{ flex: 1 }}>
        <Text style={{ color: 'red', fontSize: 30 }} >{item?.stockPrice}</Text>
        </View>
      </View>

    </View>
  )


}

export default StockMemoList