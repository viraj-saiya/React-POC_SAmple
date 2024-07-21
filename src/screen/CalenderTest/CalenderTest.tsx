import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

export default function CalenderTest() {
  LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    monthNamesShort: [
      'Janv.',
      'Févr.',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juil.',
      'Août',
      'Sept.',
      'Oct.',
      'Nov.',
      'Déc.',
    ],
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    // dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['S.', 'M', 'T.', 'W.', 'TH.', 'F.', 'S.'],
    // today: "Aujourd'hui"
  };
  // LocaleConfig.defaultLocale = 'fr';
  const [selected, setSelected] = useState('27-10-2023');

  return (
    <View>
      <Calendar
        style={{justifyContent: 'center', alignItems: 'center'}}
        dayComponent={item => {
          console.log(item);
          return (
            <View
              style={{
                height:40,width:40,
                backgroundColor: 'green',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  backgroundColor: 'red',
                }}>
                {item.date.day}
              </Text>
            </View>
          );
        }}
        markingType="custom"
        enableSwipeMonths={true}
        hideExtraDays={true}
        // hideDayNames={true}
        // Show week numbers to the left. Default = false
        // showWeekNumbers={true}
        theme={{
          selectedDayBackgroundColor: 'blue',
          textDayStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',

            // backgroundColor: 'blue',
            // paddingHorizontal:5,
            // paddingVertical:10
          },
          // contentStyle:{
          //   backgroundColor:'yellow',
          //   // paddingLeft:100
          // },
          
          // 'stylesheet.day.basic': {
          //   base:{
          //     width:40,
          //     height:40,
          //     justifyContent: 'center',
          //   alignItems: 'center',
          //   alignContent: 'center',
              
          //   },
          //   text:{
          //     margin:0,
          //     color:'black'


          //   }

            // header:{
            //   backgroundColor:'green'
            // },

            // week: {
            //   flexDirection: 'row',
            //   justifyContent: 'space-between',
            //   backgroundColor:'red'
            // },
            // dayHeader:{
            //   backgroundColor:'blue'
            // },
            // partialWeek:{
            //   backgroundColor:'orange'
            // }
          // },
          // weekVerticalMargin:20,
          // stylesheet:{

          // }
        }}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            dotColor: 'white',
            marked: true,
            disableTouchEvent: true,

            // selectedDotColor: 'orange',
            customStyles: {
              container: {
                justifyContent: 'center',
                backgroundColor: 'blue',
                height: 40,
                width: 40,
                borderRadius: 80,
              },
              text: {},
            },
          },
        }}
        // dayComponent={({date, state}) => {
        //   return (
        //     <View>
        //       <Text
        //         style={{
        //           textAlign: 'center',
        //           color: state === 'disabled' ? 'gray' : 'black',
        //         }}>
        //         {date.day}
        //       </Text>
        //     </View>
        //   );
        // }}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
        }}
      />
    </View>
  );
}
