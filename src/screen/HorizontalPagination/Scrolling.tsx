import { FlatList, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

export default function Scrolling() {

  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const [colorTabIndex, setColorTabIndex] = useState(0)
  const [xTabIndex, setXTabIndex] = useState(0)

  const [yScrollData, setYScrollData] = useState(
    [{ id: 1, title: "Indices" }, { id: 2, title: "News" }, { id: 3, title: "Announcement" }, { id: 4, title: "Live Pulse" }, { id: 5, title: "NFO" }, { id: 6, title: "OFS" }]

  )
  const [xScrollData, setXScrollData] = useState(
    [{ id: 1, title: "Indices" }, { id: 2, title: "News" }, { id: 3, title: "Announcement" }, { id: 4, title: "Live Pulse" }, { id: 5, title: "NFO" }, { id: 6, title: "OFS" }]

  )



  const ref = React.useRef<FlatList>(null);
  const xRef = React.useRef<FlatList>(null);

  const QuickLinks = ({ item, index }) => {
    return (
      <Pressable onPress={() => { setSelectedTabIndex(index) ; setColorTabIndex(index)  }} style={{ backgroundColor: (index == colorTabIndex) ? "red" : "yellow", padding: 10, }}>
        <Text style={{ color: 'black' }}>{item.title}</Text>
      </Pressable>
    )
  }
  const Card = ({ item, index }) => {
    return (
      <Pressable onLayout={(events) => onlayoutEvents(events, item)} style={{ padding: 10, backgroundColor: 'cyan', height: 200, width: "50%", margin: 10 }}>
        <Text style={{ color: 'black' }}>{item.title}</Text>
      </Pressable>
    )
  }
  useEffect(() => {
    ref.current?.scrollToIndex({
      index: selectedTabIndex,
      animated: true,
      viewPosition: 0,
    });
    return () => { };
  }, [selectedTabIndex]);

  // useEffect(() => {
  //   xRef.current?.scrollToIndex({
  //     index: xTabIndex,
  //     animated: true,
  //     viewPosition: 0.5,
  //   });
  //   return () => { };
  // }, [xTabIndex]);


  const onScrollEvents = (events) => {
    // console.log("------events----", events.nativeEvent)
    // console.log(

    // "getNativeScrollRef", ref.current?.getNativeScrollRef(),
    // "getScrollResponder", ref.current?.getScrollResponder(),
    // ".getScrollableNode", ref.current?.getScrollableNode(),
    // )

  }
  const onlayoutEvents = (events, item) => {
    console.log("----onlayoutEvents--events----", events.nativeEvent, item)


  }
  // const onlayoutEventsFalt = (events) => {
  //   console.log("----onlayoutEventsFalt--events----", events.nativeEvent)

  // }

  const onViewableItemsChanged = useRef(({ viewableItems, changed }: { viewableItems: any[], changed: string[] }) => {
    console.log("viewableItems", viewableItems);
    const indexArray = viewableItems?.map((value) => {
      console.log("value.isViewable",value.isViewable)
      if (value.isViewable) {
        console.log("value.key map",value.key)
        return value.key
      }
    }
    
  )
    setXTabIndex(indexArray[0])
    setColorTabIndex(indexArray[0]-1)
    console.log("indexArray", indexArray);
    console.log("changed", changed);
  });



  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <Text>Scrolling</Text>
      <View>
        <FlatList
          initialScrollIndex={xTabIndex}
          ref={xRef}
          horizontal
          data={xScrollData}
          renderItem={QuickLinks}
        />
      </View>
      <View style={{ marginBottom: 10, flex: 1 }}>
        <FlatList
          onScroll={onScrollEvents}
          viewabilityConfig={{
            // minimumViewTime: 200,
            // viewAreaCoveragePercentThreshold:100,
            itemVisiblePercentThreshold: 50,
            waitForInteraction: true

          }}
          onViewableItemsChanged={onViewableItemsChanged.current}
          // onLayout={onlayoutEventsFalt}
          ref={ref}
          initialScrollIndex={selectedTabIndex}

          data={yScrollData}
          renderItem={Card}


        />

      </View>


    </View>
  )
}

const styles = StyleSheet.create({

})