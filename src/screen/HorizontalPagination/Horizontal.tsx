/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {faker} from '@faker-js/faker';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';

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

export default function HorizontalScroll() {
  const layout = (data, index) => {
    console.log(
      'width',
      width,
      'index:',
      index,
      'offset:',
      width * index,
      index,
    );
    return {length: width, offset: width * index, index};
  };
  const [index, setIndex] = React.useState(0);

  const leftScroll = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };
  const rightScroll = () => {
    if (data.length - 1 === index) {
      return;
    }
    setIndex(index + 1);
  };

  const ref = React.useRef<FlatList>(null);
  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0,
    });
    return () => {};
  }, [index]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <FlatList
          ref={ref}
          // getItemLayout={layout}
          initialScrollIndex={index}
          style={{flexGrow: 0}}
          data={data}
          keyExtractor={item => item.key}
          // contentContainerStyle={{paddingLeft: _spacing}}
          showsHorizontalScrollIndicator={false}
          horizontal
          // scrollEventThrottle={250}
          // initialNumToRender={20}
          renderItem={({item, index: fIndex}) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    marginRight: _spacing,
                    padding: _spacing,
                    borderWidth: 2,
                    borderColor: _colors.active,
                    borderRadius: 12,
                    backgroundColor:
                      fIndex === index ? _colors.active : _colors.inactive,
                  }}>
                  <Text style={{color: '#36303F', fontWeight: '700'}}>
                    {item.job}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: _spacing * 10,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#36303F',
              fontWeight: '700',
              marginBottom: _spacing,
            }}>
            Scroll position
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Entypo name="align-left" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Entypo
                  name="align-horizontal-middle"
                  size={24}
                  color="#36303F"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <Entypo name="align-right" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{color: '#36303F', fontWeight: '700', marginBottom: 10}}>
              Navigation
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: width / 2,
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={leftScroll}>
                <View
                  style={{
                    padding: _spacing,
                    backgroundColor: '#FCD259',
                    borderRadius: _spacing,
                    marginRight: _spacing,
                  }}>
                  <Feather name="arrow-left" size={24} color="#36303F" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={rightScroll}>
                <View
                  style={{
                    padding: _spacing,
                    backgroundColor: '#FCD259',
                    borderRadius: _spacing,
                  }}>
                  <Feather name="arrow-right" size={24} color="#36303F" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
