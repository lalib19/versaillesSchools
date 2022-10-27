import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface PropType {
  title: string;
  size?: number;
  color?: string;
  type?: string;
  onPress: (params: any) => void;
}

export default function CustomButton({
  title,
  size,
  color,
  type,
  onPress,
}: PropType) {
  {
    switch (type) {
      case 'submit':
        return (
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: color || 'dodgerblue',
                height: (size && size * 10) || 50,
                width: (size && size * 20) || '80%',
              },
            ]}
            onPress={onPress}>
            <Text style={{color: 'white', fontSize: (size && size * 4) || 20}}>
              {title}
            </Text>
          </TouchableOpacity>
        );
        break;
      default:
        return (
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: color || 'salmon',
                height: (size && size * 10) || 70,
                width: (size && size * 20) || 140,
              },
            ]}
            onPress={onPress}>
            <Text style={{color: 'white', fontSize: (size && size * 4) || 30}}>
              {title}
            </Text>
          </TouchableOpacity>
        );
    }
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 5
  },
});
