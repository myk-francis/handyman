import React, { useState, useRef } from 'react'
import { Animated, SafeAreaView, StyleSheet, Text, View, Image, StatusBar, TextInput } from 'react-native'
import { Button, NormalButton } from "../components/need_a_hand";
import { COLORS, SIZES, FONTS, assets} from "../constants";


const AuthScreen = () => {

  const [ screen, setScreen ] = useState('Avatar')

  const resetAnim = useRef(new Animated.Value(0)).current
  const registerAnim = useRef(new Animated.Value(0)).current
  const fadeAnim = useRef(new Animated.Value(0)).current

  const [ username, setUserName ] = useState('')
  const [ password, setUserPassword ] = useState('')

  const [ email, setUserEmail ] = useState('')
  const [ passwordOne, setUserPasswordOne ] = useState('')
  const [ passwordTwo, setUserPasswordTwo ] = useState('')

  const showLogin = () => {
    // Will change fadeAnim value to 1 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true 
    }).start()

    setScreen('LogIn')
  }

  const showRegister = () => {
    Animated.timing(registerAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true 
    }).start()

    setScreen('Register')
  }

  const showReset = () => {
    Animated.timing(resetAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true 
    }).start()

    setScreen('Reset')
  }


  const ResetPassword = () => { 
    return (
      <Animated.View style={[ styles.logInContainer, {opacity: resetAnim} ]}>
        <View style={styles.logInInputContainer}>
          <TextInput style={styles.inputLogin} onChangeText={setUserName} value={username} placeholder="Username"/>
          <TextInput style={styles.inputLogin} onChangeText={setUserEmail} value={email} placeholder="E-mail"/>
        </View>
        <View style={styles.logInBtn}>
          <NormalButton minWidth={200} fontSize={SIZES.font} text={"RESET PASSWORD"}/>
        </View>
      </Animated.View>
    )
  }

  const Register = () => { 
    return (
      <Animated.View style={[ styles.logInContainer, {opacity: registerAnim} ]}>
        <View style={styles.logInInputContainer}>
          <TextInput style={styles.inputLogin} onChangeText={setUserName} value={username} placeholder="Username"/>
          <TextInput style={styles.inputLogin} onChangeText={setUserEmail} value={email} placeholder="E-mail"/>
          <TextInput style={styles.inputLogin} onChangeText={setUserPasswordOne} value={passwordOne} placeholder="Password"/>
          <TextInput style={styles.inputLogin} onChangeText={setUserPasswordTwo} value={passwordTwo} placeholder="Retype Password"/>
        </View>
        <View style={styles.logInBtn}>
          <NormalButton minWidth={170} fontSize={SIZES.font} text={"REGISTER"}/>
        </View>
      </Animated.View>
    )
  }

  const LogIn = () => { 
    return (
      <Animated.View style={[ styles.logInContainer, {opacity: fadeAnim} ]}>
        <View style={styles.logInInputContainer}>
          <TextInput style={styles.inputLogin} onChangeText={setUserName} value={username} placeholder="Username"/>
          <TextInput style={styles.inputLogin} onChangeText={setUserPassword} value={password} placeholder="Password"/>
        </View>
        <View style={styles.textLogInContainer}>
          <Text style={styles.newAccountText} onPress={()=> showRegister()}>Create new account</Text>
          <Text style={styles.forgotPassText} onPress={()=> showReset()}>Forgot Password?</Text>
        </View>
        <View style={styles.logInBtn}>
          <NormalButton minWidth={150} fontSize={SIZES.font} text={"LOG IN"}/>
        </View>
      </Animated.View>
    )
  }


  const Avatar = () => { 
    return (
      <View style={styles.authInfoContainer}>
        <View style={styles.avatarContainer}>
          <Image source={assets.userUnknownAvatar} style={{ width: 150, height: 150 }}/>
        </View>
        <Button minWidth={200} fontSize={SIZES.font} text={"SIGN IN"} handlePress={() => showLogin()}/>
        <Text style={styles.infoText}>Create New Account</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.backgroundView}>
          <View style={styles.bgTop}>
            <Image source={assets.backgroundPicOne} style={{ width: "100%", height: 605 }}/>
          </View>
          <View style={styles.bgBottom}></View>
        </View>

        <View style={styles.upperView}>
          <View style={styles.upperTop}></View>
          <View style={styles.upperBottom}>
            {
              screen === "LogIn" ? LogIn() :
              screen === "Register" ? Register() : 
              screen === "Reset" ? ResetPassword() :
              screen === "Avatar" ? Avatar() :
              Avatar()
            }
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1
  },
  backgroundView: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1
  },
  upperView: {
    flex: 1,
    zIndex: 0,
  },
  upperTop: {
    height: "40%", 
    backgroundColor: "rgba(0,0,0,0)",
  },
  upperBottom: {
    height: "60%", 
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: COLORS.appGray
  },
  authInfoContainer: {
    height: "50%", 
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoText: {
    textAlign: "center",
    fontFamily: FONTS.light,
    fontSize: SIZES.medium,
  },
  logInContainer: {
    height: "80%", 
    width: "100%",
    alignItems: "center",
  },
  logInInputContainer:{
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: "80%",
    padding : 10,
  },
  inputLogin: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.appGray,
    padding: 10,
  },
  textLogInContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingTop: SIZES.small
  },
  newAccountText: {
    fontFamily: FONTS.light,
    fontSize: SIZES.small,
    color: "#8C8068"
  },
  forgotPassText: {
    fontFamily: FONTS.light,
    fontSize: SIZES.small,
  },
  logInBtn: {
    paddingTop: SIZES.extraLarge
  },
    
})