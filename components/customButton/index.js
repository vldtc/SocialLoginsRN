import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';

const CustomButton = props => {
  return (
    <View
      style={{
        marginTop: 24,
        width: '30%',
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          height: '80%',
          width: '100%',
          backgroundColor: '#30abf7',
          transform: [{rotate: '8deg'}],
          borderRadius: 2,
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          height: '80%',
          width: '100%',
          backgroundColor: '#83cdfb',
          transform: [{rotate: '6deg'}],
          borderRadius: 2,
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          height: '80%',
          width: '100%',
          backgroundColor: '#c0e6ff',
          transform: [{rotate: '4deg'}],
          borderRadius: 2,
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          height: '80%',
          width: '100%',
          backgroundColor: '#e4f4ff',
          transform: [{rotate: '2deg'}],
          borderRadius: 2,
        }}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          props.onButtonPress();
        }}
        style={{
          backgroundColor: '#ffffff',
          width: '97%',
          height: '75%',
          borderRadius: 2,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            color: '#000',
            fontWeight: '300',
            fontSize: 20,
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
