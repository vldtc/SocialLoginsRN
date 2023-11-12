import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {CustomInputField, CustomButton} from '../../components';

const LoginScreen = props => {
  return (
    <View style={style.screenContainer}>
      <View style={style.bodyItems}>
        <CustomInputField placeholder="Email" />
        <CustomInputField placeholder="Password" />
        <CustomButton
          title="Login"
          onButtonPress={() => {
            props.navigation.navigate('Home');
          }}
        />
      </View>
      {/* Background Items */}
      <View style={style.headerContainerShadow} />
      <View style={style.headerContainerMain}>
        <Text style={style.loginText}>Login</Text>
      </View>
      <View style={style.boxContainerShadow3} />
      <View style={style.boxContainerShadow2} />
      <View style={style.boxContainerShadow} />
      <View style={style.boxContainerMain}></View>
      <View style={style.footerContainerMain}>
        <Text style={style.footerAlternateText}>
          Alternatively, login using one of these methods
        </Text>
      </View>
      <View style={style.footerContainerShadow} />
    </View>
  );
};

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    //backgroundColor: '#34a2f6',
  },
  bodyItems: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  boxContainerMain: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '40%',
    backgroundColor: '#0091ff',
    borderRadius: 20,
    transform: [{rotate: '6deg'}],
  },
  boxContainerShadow: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '43%',
    backgroundColor: '#49adfa',
    borderRadius: 20,
    transform: [{rotate: '6deg'}],
  },
  boxContainerShadow2: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '40%',
    backgroundColor: '#6bc6ff',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}],
  },
  boxContainerShadow3: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '43%',
    backgroundColor: '#93d4ff',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}],
  },
  headerContainerMain: {
    position: 'absolute',
    top: -50,
    width: '150%',
    height: '20%',
    backgroundColor: '#0091ff',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}],
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerContainerShadow: {
    position: 'absolute',
    zIndex: -1,
    top: -50,
    width: '150%',
    height: '21%',
    backgroundColor: '#93d4ff',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}],
  },
  footerContainerMain: {
    position: 'absolute',
    bottom: -50,
    width: '150%',
    height: '20%',
    backgroundColor: '#0091ff',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}],
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footerContainerShadow: {
    position: 'absolute',
    zIndex: -1,
    bottom: -50,
    width: '150%',
    height: '21%',
    backgroundColor: '#93d4ff',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}],
  },
  loginText: {
    fontSize: 40,
    marginBottom: 32,
    color: '#fff',
    fontWeight: '200',
    transform: [{rotate: '6deg'}],
  },
  footerAlternateText: {
    fontSize: 14,
    fontWeight: 200,
    color: '#fff',
    marginTop: 24,
    transform: [{rotate: '6deg'}],
  },
});

export default LoginScreen;
