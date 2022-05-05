import React, { useState, useRef } from 'react'
import { TextInput, Animated, SafeAreaView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import { NormalButton, Button } from "../components/need_a_hand"
import { COLORS, SIZES, FONTS, assets} from "../constants"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import DateTimePicker from '@react-native-community/datetimepicker'

const PersonalData = () => {
  const [ name, setName ] = useState('Maria')
  const [ surname, setSurname ] = useState('Lokodi')
  const [ dob, setDOB ] = useState(new Date())
  const [ email, setEmail ] = useState('example@example.com')
  const [ phone, setPhone ] = useState('0710503304')
  const [ bio, setBio ] = useState('')

  const [displaymode, setMode] = useState('date');
   const [isDisplayDate, setShow] = useState(false);
   const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setDOB(currentDate)
    setShow(false)
  };

  const showDateMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  };
  const displayDatepicker = () => {
    showDateMode('date')
  }

  const [ screen, setScreen ] = useState('Profile')
  const [ editScreen, setEditScreen ] = useState('Profile')

  const editAnim = useRef(new Animated.Value(0)).current
  const profileAnim = useRef(new Animated.Value(1)).current

  const showEditScreen = (value) => {
    if (value === "Bio") {
      setEditScreen('Bio')
    } else {
      setEditScreen('Profile')
    }

    setScreen('Edit')

    Animated.timing(editAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true 
    }).start()

    setTimeout(() => profileAnim.setValue(0), 1000)
  }

  const showProfileScreen = () => {
    setScreen('Profile')

    Animated.timing(profileAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true 
    }).start()

    setTimeout(() => editAnim.setValue(0), 1000)
  }

  const DatePickerField = () => { 
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        {isDisplayDate && (<DateTimePicker testID="dateTimePicker" value={dob} mode={displaymode} is24Hour={true} display="default" onChange={changeSelectedDate} />)}
      </View>
    )
  }

  const ProfileFields = () => { 
    return (
      <View style={styles.editContainer}>
        <View style={styles.editInputContainer}>
          <TextInput style={styles.inputField} onChangeText={setName} value={name} placeholder="Name"/>
          <TextInput style={styles.inputField} onChangeText={setSurname} value={surname} placeholder="Surname"/>
          <Button minWidth={120} fontSize={SIZES.font} text={"Select Date"} handlePress={()=> displayDatepicker()}/>
          <TextInput style={styles.inputField} onChangeText={setEmail} value={email} placeholder="E-mail"/>
          <TextInput style={styles.inputField} onChangeText={setPhone} value={phone} placeholder="Phone number"/>
          {DatePickerField()}
        </View>
        <View style={styles.editScreenBtn}>
          <NormalButton minWidth={130} fontSize={SIZES.font} text={"SAVE"}/>
        </View>
      </View>
    )
  }

  const BioFields = () => { 
    return (
      <View style={styles.editContainer}>
        <View style={styles.editInputContainer}>
          <TextInput style={styles.bioField} onChangeText={setBio} value={bio} multiline={true} placeholder="What are your passions or interests? Do you offer your services frequently? What are the advantages of hiring you for a job around the house?"/>
        </View>
        <View style={styles.editScreenBtn}>
          <NormalButton minWidth={130} fontSize={SIZES.font} text={"SAVE"}/>
        </View>
      </View>
    )
  }


  const EditScreen = () => { 
    return(
      <Animated.View style={{opacity: editAnim, width: "100%"}}>
        <View style={styles.editScreenTop}>
          {editScreen === "Profile" ? <Text style={styles.editScreenTitleText}>Edit</Text> : <Text style={styles.editScreenTitleText}>What can you tell the community about yourself?</Text>}
        </View>
        <View style={styles.editScreenBottom}>
          {editScreen === "Profile" ? ProfileFields() : BioFields()}
        </View>
        
      </Animated.View>
    )
  }

  const ScreenTitle = (title, icon) => { 
    return(
      <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
        <TouchableOpacity onPress={()=> showProfileScreen()}><MaterialIcons name={icon} color={"black"} size={25}></MaterialIcons></TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    )
  }

  const ProfileItem = (title, description) => { 
    return(
      <TouchableOpacity style={styles.listItem} onPress={()=> showEditScreen("Profile")}>
        <View>
          <Text>{title}</Text>
          <Text style={styles.descText}>{description}</Text>
        </View>
        <MaterialIcons name="chevron-right" color={"#ABABAB"} size={30}></MaterialIcons>
      </TouchableOpacity>
    )
  }

  const ProfileItemFooter = (description) => { 
    return (
      <>
        <View style={{borderBottomColor: "#ABABAB", borderBottomWidth: 1,width:"80%"}}/>
        <TouchableOpacity style={styles.listItem} onPress={()=> showEditScreen("Bio")}>
          <View>
            <Text style={styles.descText}>{description}</Text>
          </View>
          <MaterialIcons name="add-circle-outline" color={"#ABABAB"} size={30}></MaterialIcons>
        </TouchableOpacity>
      </>
    )
  }

  const Header = () => { 
    return(
      <View style={styles.avatar}>
        <View style={styles.avatarPic}>
          <Image source={assets.userUnknownAvatar} style={{  width: 170, height: 170 }}/>
          <View style={styles.addAvatar}><MaterialIcons name="add" color={"black"} size={35}></MaterialIcons></View>
        </View>
        <View style={styles.avatarTexts}>
          <Text style={styles.infoText}>username</Text>
        </View>
      </View>
    )
  }

  const ProfileScreen = () => { 
    return (
      <Animated.View style={{opacity: profileAnim, width: "100%"}}>
        {Header()}
        <View style={styles.list}>
          {ProfileItem("Name", name)}
          {ProfileItem("Surname", surname)}
          {ProfileItem("Date of birth", dob.toLocaleDateString())}
          {ProfileItem("E-mail", email)}
          {ProfileItem("Phone number", phone)}
          {ProfileItemFooter("Add a mini biography")}
        </View>
        <View style={styles.screenBottom}>
          <NormalButton minWidth={150} fontSize={SIZES.font} text={"LOG OUT"}/>
        </View>
      </Animated.View>
    )
  }


  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.backgroundView}></View>

        <View style={styles.screen}>
          <View style={styles.screenTop}>
            {screen === "Edit" ? ScreenTitle("", "close") : ScreenTitle("Personal Data", "arrow-back-ios")}
          </View>
          <View style={styles.screenContent} >
            {screen === "Profile" ? ProfileScreen() : EditScreen()}
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default PersonalData

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
  screen: {
    flex: 1,
    zIndex: 0,
    padding: 20
  },
  screenTop: {
    height: "5%", 
    width: "100%",
    alignItems: "center",
  },
  screenContent: {
    height: "95%", 
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
  },
  avatar:{
    height: "30%", 
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  avatarTexts: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%", 
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: "center",
  },
  screenBottom: {
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
  },
  editScreenTop:{
    height: "20%", 
    width: "100%",
  },
  editScreenBottom:{
    height: "80%", 
    width: "100%",
    alignItems: "center",
  },
  editScreenBtn:{
    paddingTop: 10,
  },
  editContainer: {
    height: "100%", 
    width: "100%",
    alignItems: "center",
  },
  editInputContainer:{
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: "100%",
    padding : 10,
  },
  inputField: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.appGray,
    padding: 10,
  },
  bioField: {
    height: 120,
  },
  editScreenTitleText : {
    fontFamily: FONTS.semiBold,
    fontSize: 26,
  },
  descText: {
    color: "#ABABAB"
  },
  addAvatar: {
    backgroundColor: "white", 
    borderRadius:10,
    width: 40, 
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: 20,
  }
  
})