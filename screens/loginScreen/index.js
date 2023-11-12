import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Platform} from 'react-native';
import {CustomInputField, CustomButton} from '../../components';

const LoginScreen = props => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  const onNavigatePress = btn => {
    if (isLoginScreen && btn === 'right') {
      setIsLoginScreen(false);
    } else {
      setIsLoginScreen(true);
    }
  };

  const boxContainerMainStyles = isLoginScreen
    ? style.boxContainerMain
    : style.boxContainerMainRegister;

  const boxContainerShadowStyles = isLoginScreen
    ? style.boxContainerShadow
    : style.boxContainerShadowRegister;

  const boxContainerShadow2Styles = isLoginScreen
    ? style.boxContainerShadow2
    : style.boxContainerShadow2Register;

  const boxContainerShadow3Styles = isLoginScreen
    ? style.boxContainerShadow3
    : style.boxContainerShadow3Register;

  const boxContainerShadow4Styles = isLoginScreen
    ? style.boxContainerShadow4
    : style.boxContainerShadow4Register;
  return (
    <View style={style.screenContainer}>
      {isLoginScreen ? (
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
      ) : (
        <View style={style.bodyItemsRegister}>
          <CustomInputField placeholder="First name" />
          <CustomInputField placeholder="Last name" />
          <CustomInputField placeholder="Email" />
          <CustomInputField placeholder="Password" />
          <CustomInputField placeholder="Conf pass" />
          <CustomButton
            title="Login"
            onButtonPress={() => {
              props.navigation.navigate('Home');
            }}
          />
        </View>
      )}

      {/* Background Items */}
      <View style={style.headerContainerShadow} />
      <View style={style.headerContainerMain}>
        <View style={style.headerContentRow}>
          <TouchableOpacity
            activeOpacity={1}
            style={{flex: 1}}
            onPress={() => {
              onNavigatePress('left');
            }}>
            <Text style={{textAlign: 'left', color: '#fff'}}>
              {isLoginScreen ? '' : '<Login/>'}
            </Text>
          </TouchableOpacity>
          <Text style={style.loginText}>
            {isLoginScreen ? 'Login' : 'Register'}
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            style={{flex: 1}}
            onPress={() => {
              onNavigatePress('right');
            }}>
            <Text style={{textAlign: 'right', color: '#fff'}}>
              {isLoginScreen ? '<Register/>' : ''}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={boxContainerShadow4Styles} />
      <View style={boxContainerShadow3Styles} />
      <View style={boxContainerShadow2Styles} />
      <View style={boxContainerShadowStyles} />
      <View style={boxContainerMainStyles}></View>
      {isLoginScreen ? (
        <View style={style.footerContainerMain}>
          <Text style={style.footerAlternateText}>
            Alternatively, login using one of these methods
          </Text>
        </View>
      ) : null}
      {isLoginScreen ? <View style={style.footerContainerShadow} /> : null}
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
    backgroundColor: '#f3f9fd',
  },
  bodyItems: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bodyItemsRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    transform: [{translateY: 50}],
  },
  boxContainerMain: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '40%',
    backgroundColor: '#0077ff',
    borderRadius: 20,
    transform: [{rotate: '6deg'}],
  },
  boxContainerMainRegister: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '60%',
    backgroundColor: '#0077ff',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}, {translateY: 50}],
  },
  boxContainerShadow: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '43%',
    backgroundColor: '#30abf7',
    borderRadius: 20,
    transform: [{rotate: '6deg'}],
  },
  boxContainerShadowRegister: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '63%',
    backgroundColor: '#30abf7',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}, {translateY: 50}],
  },
  boxContainerShadow2: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '40%',
    backgroundColor: '#83cdfb',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}],
  },
  boxContainerShadow2Register: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '60%',
    backgroundColor: '#83cdfb',
    borderRadius: 20,
    transform: [{rotate: '6deg'}, {translateY: 50}],
  },
  boxContainerShadow3: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '43%',
    backgroundColor: '#c0e6ff',
    borderRadius: 20,
    transform: [{rotate: '-6deg'}],
  },
  boxContainerShadow3Register: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '63%',
    backgroundColor: '#c0e6ff',
    borderRadius: 20,
    transform: [{rotate: '6deg'}, {translateY: 50}],
  },
  boxContainerShadow4: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '46%',
    backgroundColor: '#e4f4ff',
    borderRadius: 20,
    transform: [{rotate: '6deg'}],
  },
  boxContainerShadow4Register: {
    position: 'absolute',
    zIndex: -1,
    width: '150%',
    height: '66%',
    backgroundColor: '#e4f4ff',
    borderRadius: 20,
    transform: [{rotate: '6deg'}, {translateY: 50}],
  },
  headerContainerMain: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? -80 : -110,
    width: '100%',
    height: '20%',
    backgroundColor: '#0077ff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  headerContentRow: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainerShadow: {
    position: 'absolute',
    zIndex: -1,
    top: Platform.OS === 'ios' ? -80 : -110,
    width: '102%',
    height: '21%',
    backgroundColor: '#c0e6ff',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  footerContainerMain: {
    position: 'absolute',
    bottom: -50,
    width: '100%',
    height: '20%',
    backgroundColor: '#0077ff',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  footerContainerShadow: {
    position: 'absolute',
    zIndex: -1,
    bottom: -50,
    width: '102%',
    height: '21%',
    backgroundColor: '#c0e6ff',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  loginText: {
    flex: 1,
    fontSize: 30,
    color: '#fff',
    fontWeight: '200',
    textAlign: 'center',
    marginBottom: 8,
  },
  footerAlternateText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#fff',
    marginTop: 16,
  },
});

export default LoginScreen;
