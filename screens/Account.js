import React, { useState, useRef } from 'react'
import { Animated, Switch, SafeAreaView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import { NormalButton, NavBar } from "../components/need_a_hand"
import { COLORS, SIZES, FONTS, assets} from "../constants"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


export default function Account() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const [ screen, setScreen ] = useState('Account')
  const settingsAnim = useRef(new Animated.Value(0)).current
  const accountsAnim = useRef(new Animated.Value(1)).current

  const showSettings = () => {
    setScreen('Settings')

    Animated.timing(settingsAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true 
    }).start()

    setTimeout(() => accountsAnim.setValue(0), 3000)
  }

  const showAccounts = () => {
    setScreen('Account')

    Animated.timing(accountsAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true 
    }).start()

    setTimeout(() => settingsAnim.setValue(0), 3000)
  }

  const AccountList = () => { 
    return (
      <Animated.View style={[ styles.list, {opacity: accountsAnim} ]}>
        <View style={styles.listItem}>
          <Text style={{color: isEnabled ? "#ABABAB" : "black"}}>Client</Text>
          <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}/>
          <Text style={{color: !isEnabled ? "#ABABAB" : "black"}}>Handyman</Text>
        </View>
        <View style={{borderBottomColor: "#ABABAB", borderBottomWidth: 1,width:"80%"}}/>
        <TouchableOpacity style={styles.listItem}>
          <Text>Messages</Text>
          <MaterialIcons name="chevron-right" color={"#ABABAB"} size={30}></MaterialIcons>
        </TouchableOpacity>
        <View style={{borderBottomColor: "#ABABAB", borderBottomWidth: 1,width:"80%"}}/>
        <TouchableOpacity style={styles.listItem}>
          <Text>Payments</Text>
          <MaterialIcons name="chevron-right" color={"#ABABAB"} size={30}></MaterialIcons>
        </TouchableOpacity>
        <View style={{borderBottomColor: "#ABABAB", borderBottomWidth: 1,width:"80%"}}/>
        {isEnabled &&
         <>
          <TouchableOpacity style={styles.listItem} onPress={()=> showSettings()}>
            <Text>Reviews</Text>
            <MaterialIcons name="chevron-right" color={"#ABABAB"} size={30}></MaterialIcons>
          </TouchableOpacity>
          <View style={{borderBottomColor: "#ABABAB", borderBottomWidth: 1,width:"80%"}}/>
         </>
        }
        <TouchableOpacity style={styles.listItem} onPress={()=> showSettings()}>
          <Text>Settings</Text>
          <MaterialIcons name="chevron-right" color={"#ABABAB"} size={30}></MaterialIcons>
        </TouchableOpacity>
        <View style={{borderBottomColor: "#ABABAB", borderBottomWidth: 1,width:"80%"}}/>
        <TouchableOpacity style={styles.listItem}>
          <Text>About</Text>
          <MaterialIcons name="chevron-right" color={"#ABABAB"} size={30}></MaterialIcons>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  const SettingsList = () => { 
    return (
      <Animated.View style={[ styles.list, {opacity: settingsAnim} ]}>
        <TouchableOpacity style={styles.listItem}>
          <Text>Personal Data</Text>
          <MaterialIcons name="chevron-right" color={"#ABABAB"} size={30}></MaterialIcons>
        </TouchableOpacity>
        <View style={{borderBottomColor: "#ABABAB", borderBottomWidth: 1,width:"80%"}}/>
        <TouchableOpacity style={styles.listItem}>
          <Text>Services</Text>
          <MaterialIcons name="chevron-right" color={"#ABABAB"} size={30}></MaterialIcons>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.backgroundView}></View>

        <View style={styles.upperView}>
          <View style={styles.upperTop}>
            {
              screen === "Account" ? <Text style={styles.titleText}>Profile</Text> :
              <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 20}}>
                <TouchableOpacity onPress={()=> showAccounts()}><MaterialIcons name="arrow-back-ios" color={"black"} size={25}></MaterialIcons></TouchableOpacity>
                <Text style={styles.titleText}>Settings</Text>
              </View>
            }
          </View>
          <View style={styles.upperMiddle}>
            <View style={styles.avatar}>
              <View style={styles.avatarPic}>
                <Image source={assets.userUnknownAvatar} style={{ width: 75, height: 75 }}/>
              </View>
              <View style={styles.avatarTexts}>
                <Text style={styles.infoText}>username</Text>
                <Text style={styles.infoText}>username@example.com</Text>
              </View>
            </View>
            {screen === "Account" ? AccountList() : SettingsList()}
            <View style={styles.logOutBtn}>
              <NormalButton minWidth={150} fontSize={SIZES.font} text={"LOG OUT"}/>
            </View>
          </View>
          <NavBar selected={""}/>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

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
    backgroundColor: COLORS.appGray,
    zIndex: -1
  },
  upperView: {
    flex: 1,
    zIndex: 0,
  },
  upperTop: {
    height: "10%", 
    width: "100%",
    alignItems: "center",
  },
  upperMiddle: {
    height: "80%", 
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding : 20,
  },
  titleText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    paddingTop: 20
  },
  avatar:{
    height: "20%", 
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarTexts: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    width: "100%", 
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: "center",
  },
  logOutBtn: {
    height: "10%", 
    width: "100%", 
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    height: 60,
    width: "80%", 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
  
})