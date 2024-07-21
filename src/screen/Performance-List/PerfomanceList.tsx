import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FlashList } from '@shopify/flash-list'
import { stockData } from './constantData'
import StockMemoList from './StockMemoList'


const Width = Dimensions.get("screen").width
const PerfomanceList = () => {

  const [stockList, setStockList] = useState(new Map())

  const [oneFlag, setOneFlag] = useState(true)


  const renderIndexList = useCallback(({ item, index }) => {
    // const stockItem = item.next().value

    // console.log("stockItem-------------renderIndexList-----------", item.stockName)

    return (
      <StockMemoList item ={item} />

    )
  }, [])

  // const keyRender = ({item , index} : any)  =>  `${item.uniqueId}`


  // const a =  
  // console.log("stockList",stockList)

  function getRandomKey(map) {
    const keys = Array.from(map.keys());
    return keys[Math.floor(Math.random() * keys.length)];
  } 
  function getStockName(uniqueId) {
    const item = stockList.get(uniqueId) ;
    return item.stockName;
  } 



  const UpdateStockPrice = () => {
    // while (true && stockListMemo.length > 0) {

    // setTimeout(() => {
    //   console.log("UpdateStockPrice-----------------")
    
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * stockList.size);
      const randomChange = Math.random() > 0.5 ? 1 : -1; // Randomly increase or decrease price
      const randomAmount = Math.random() * 10; // Random amount between 0 and 10
      const uniqueId = getRandomKey(stockList)

      // Update the price of the randomly selected stock object
      // stockObjects[randomIndex].stockPrice += randomChange * randomAmount;

      stockList.set(uniqueId, {
        "stockName": getStockName(uniqueId) , "stockPrice": Math.floor(Math.random() * 2000) + 1, "uniqueId": uniqueId
      })

      setStockList(new Map(stockList))
      // console.log(`Updated ${stockObjects[randomIndex].stockName} price to ${stockObjects[randomIndex].stockPrice.toFixed(2)}`);
    }, 100);


    // setStockList((prevState) =>  new Map(prevState).set("517f25cc-55b0-4436-a32e-b5eaa5f7054a" , {
    //   "stockName": "Stock1", "stockPrice": Math.floor(Math.random() * 2000) + 1, "uniqueId": "517f25cc-55b0-4436-a32e-b5eaa5f7054a" 
    // }))

    // }, 300)
    // }
  }



  useEffect(() => {
    const stockTem = new Map()
    stockData.map((item) => {
      stockTem.set(item.uniqueId, item)
    })

    // console.log("stockTem-----",stockTem);


    setStockList(stockTem)



  }, [])


  // const stockListMemo = useMemo(() => { const temp: any = []; stockList.forEach((item) => temp.push(item)); return temp }, [stockList])

  useEffect(() => {
    if (stockList.size > 0 && oneFlag) {

      setOneFlag(false)
      // UpdateStockPrice()
    }

  }, [stockList])




  //   const stockObjects = [];

  // for (let i = 1; i <= 500; i++) {
  //     const uniqueId = generateUniqueId();
  //     const stockName = `Stock${i}`;
  //     const stockPrice = Math.floor(Math.random() * 1000) + 1;

  //     stockObjects.push({ uniqueId, stockName, stockPrice });
  // }

  // console.log(stockObjects);

  // function generateUniqueId() {
  //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //         const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
  //         return v.toString(16);
  //     });
  // }

  const keyRender = useCallback(((item, index) => index.toString()), [])



  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,


      }}>
        {
          stockList.size > 0 &&
          <FlashList
            data={Array.from(stockList.values())}
            renderItem={renderIndexList}
            keyExtractor={keyRender}
            estimatedListSize={{
              height: 40,
              width: Width
            }}
            // pagingEnabled
            removeClippedSubviews={true}
            drawDistance={2000}
            getItemType={(_, index) => {
              // Disables recycling of items by assigning a unique type to each item
              return index;
            }}
            // extraData={stockList}
            estimatedItemSize={40}
          />
        }
      </View>
    </View>

  )
}

export default PerfomanceList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    // alignItems: "center",
    // justifyContent: "center",
  },
})

// import { Dimensions, StyleSheet, Text, View } from 'react-native';
// import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
// import { FlashList } from '@shopify/flash-list';
// import { stockData } from './constantData';
// import StockMemoList from './StockMemoList';

// const Width = Dimensions.get("screen").width;

// const PerfomanceList = () => {
//   const [stockList, setStockList] = useState(new Map());
//   const intervalRef = useRef(null);

//   const renderIndexList = useCallback(({ item }) => {
//     return <StockMemoList item={item} />;
//   }, []);

//   const getRandomKey = useCallback((map) => {
//     const keys = Array.from(map.keys());
//     return keys[Math.floor(Math.random() * keys.length)];
//   }, []);

//   const getStockName = useCallback((uniqueId) => {
//     const item = stockList.get(uniqueId);
//     return item.stockName;
//   }, [stockList]);

//   const updateStockPrice = useCallback(() => {
//     intervalRef.current = setInterval(() => {
//       setStockList((prevStockList) => {
//         const newStockList = new Map(prevStockList);
//         const uniqueId = getRandomKey(newStockList);
//         if (uniqueId) {
//           const item = newStockList.get(uniqueId);
//           if (item) {
//             newStockList.set(uniqueId, {
//               ...item,
//               stockPrice: Math.floor(Math.random() * 2000) + 1,
//             });
//           }
//         }
//         return newStockList;
//       });
//     }, 10); // Adjust the interval as needed
//   }, [getRandomKey]);

//   useEffect(() => {
//     const stockTem = new Map();
//     stockData.forEach((item) => {
//       stockTem.set(item.uniqueId, item);
//     });
//     setStockList(stockTem);
//   }, []);

//   const stockListMemo = useMemo(() => {
//     return Array.from(stockList.values());
//   }, [stockList]);

//   useEffect(() => {
//     if (stockListMemo.length > 0 && !intervalRef.current) {
//       updateStockPrice();
//     }
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [stockListMemo, updateStockPrice]);

//   const keyRender = useCallback((item, index) => index.toString(), []);

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 1 }}>
//         {stockListMemo.length > 0 && (
//           <FlashList
//             data={stockListMemo}
//             renderItem={renderIndexList}
//             keyExtractor={keyRender}
//             estimatedListSize={{
//               height: 40,
//               width: Width,
//             }}
//             removeClippedSubviews={true}
//             estimatedItemSize={90}
//           />
//         )}
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#141414",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// })

// export default PerfomanceList

// import { Dimensions, StyleSheet, Text, View } from 'react-native';
// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { FlashList } from '@shopify/flash-list';
// import { stockData } from './constantData';
// import StockMemoList from './StockMemoList';

// const Width = Dimensions.get("screen").width;
// const PerfomanceList = () => {
//   const [stockList, setStockList] = useState(new Map());
//   const [oneFlag, setOneFlag] = useState(true);

//   const renderIndexList = useCallback(({ item }) => {
//     console.log("item?.stockName",item?.stockName)
//     return (
//       <StockMemoList item={item} />
//     );
//   }, []);

//   const getRandomKey = useCallback((map) => {
//     const keys = Array.from(map.keys());
//     return keys[Math.floor(Math.random() * keys.length)];
//   }, []);

//   const getStockName = useCallback((uniqueId) => {
//     const item = stockList.get(uniqueId);
//     return item.stockName;
//   }, [stockList]);

//   const UpdateStockPrice = useCallback(() => {
//     const interval = setInterval(() => {
//       if (stockList.size > 0) {
//         const randomChange = Math.random() > 0.5 ? 1 : -1;
//         const randomAmount = Math.random() * 10;
//         const uniqueId = getRandomKey(stockList);
//         const updatedItem = {
//           stockName: getStockName(uniqueId),
//           stockPrice: Math.floor(Math.random() * 2000) + 1,
//           uniqueId: uniqueId
//         };
//         setStockList(prevStockList => new Map(prevStockList).set(uniqueId, updatedItem));
//       }
//     }, 10); // Throttled to 1 second for better performance

//     return () => clearInterval(interval);
//   }, [getRandomKey, getStockName, stockList.size]);

//   useEffect(() => {
//     const stockTem = new Map();
//     stockData.forEach(item => stockTem.set(item.uniqueId, item));
//     setStockList(stockTem);
//   }, []);

//   const stockListMemo = useMemo(() => {
//     const temp = [];
//     stockList.forEach(item => temp.push(item));
//     return temp;
//   }, [stockList]);

//   useEffect(() => {
//     if (stockListMemo.length > 0 && oneFlag) {
//       setOneFlag(false);
//       UpdateStockPrice();
//     }
//   }, [stockListMemo, oneFlag, UpdateStockPrice]);

//   const keyRender = useCallback((item) => item.uniqueId, []);

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 1 }}>
//         {
//           stockListMemo.length > 0 &&
//           <FlashList
//             data={stockListMemo}
//             renderItem={renderIndexList}
//             keyExtractor={keyRender}
//             estimatedListSize={{ height: 40, width: Width }}
//             removeClippedSubviews
//             estimatedItemSize={90}
//           />
//         }
//       </View>
//     </View>
//   );
// };

// export default PerfomanceList;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#141414",
//   },
// });