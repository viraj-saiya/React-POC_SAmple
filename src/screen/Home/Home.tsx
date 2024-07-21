/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import {faker} from '@faker-js/faker';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from 'src/component/Button';

const {width, height} = Dimensions.get('screen');

faker.seed(10);

const data = [...Array(20).keys()].map(() => ({
  key: faker.string.uuid(),
  job: faker.animal.crocodilia(),
}));

const _colors = {
  active: `#FCD259ff`,
  inactive: `#FCD25900`,
};
const _spacing = 10;

export default function Home() {
  const {navigate} = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Button
        title={'Horizontal Page'}
        onPress={() => {
          navigate('HorizontalScroll');
        }}></Button>
      <View style={{marginVertical: 10}}>
        <Button
          title={'Horizontal Animation Scroll'}
          onPress={() => {
            navigate('HorizontalAnimationScroll');
          }}></Button>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title={'Calender'}
          onPress={() => {
            navigate('CalenderTest');
          }}></Button>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title={'FCM'}
          onPress={() => {
            navigate('FCM');
          }}></Button>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title={'OTP Input'}
          onPress={() => {
            navigate('OTPINPUT');
          }}></Button>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title={'SQL'}
          onPress={() => {
            navigate('SQL');
          }}></Button>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title={'Scrolling'}
          onPress={() => {
            navigate('Scrolling');
          }}></Button>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title={'SpecchtoText'}
          onPress={() => {
            navigate('SpecchtoText');
          }}></Button>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title={'PerfomanceList'}
          onPress={() => {
            navigate('PerfomanceList');
          }}></Button>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title={'PopoverComponent'}
          onPress={() => {
            navigate('PopoverComponent');
          }}></Button>
      </View>
    </View>
  );
}
