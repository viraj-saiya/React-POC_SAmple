import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({onPress, title}: { onPress: Function; title: string}) => {
  const _colors = {
    active: `#FCD259ff`,
    inactive: `#FCD25900`,
  };
  const _spacing = 10;

  return (
   
      <View
        style={{
          padding: _spacing,
          borderWidth: 2,
          borderColor: _colors.active,
          borderRadius: 12,
          backgroundColor: _colors.active,
        }}>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: '#36303F', fontWeight: '700'}}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Button;
