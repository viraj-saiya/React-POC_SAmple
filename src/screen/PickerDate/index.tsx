import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

// import Picker from "./Picker";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     color: "white",
//     fontFamily: "SFProText-Semibold",
//     fontSize: 24,
//     marginBottom: 31,
//   },
// });

// function daysInMonth (month, year) {
//   return new Date(year, month, 0).getDate();
// }


// const start = 1900;
// const values = new Array(new Date().getFullYear() - start + 1)
//   .fill(0)
//   .map((_, i) => {
//     const value = start + i;
//     return { value, label: `${value}` };
//   })
//   .reverse();



//   const days = new Array(31).fill(0).map((_,i)=>{return(i+1)});


// const PickerDemo = () => {
//   const defaultValue = 1990 - start;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>What year were you born?</Text>
//       <Picker {...{ values, defaultValue }} />
//     </View>
//   );
// };

// export default PickerDemo;

export default function DatePickerMo() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View
      style={{ 
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Open" onPress={() => setOpen(true)} />

      <DatePicker
        // modal
        mode = {'date'}
        androidVariant='nativeAndroid'
        // open={open}
        theme='light'
        // textColor={'w'}

        date={date}
        onConfirm={date => {
          // setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          // setOpen(false);
        }}
        onDateChange={setDate}
      />

      <Text>index</Text>
    </View>
  );
}
