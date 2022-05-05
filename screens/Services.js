import React, { useState, useRef } from 'react'
import { FlatList, TextInput, SafeAreaView, StyleSheet, Text, View, Alert, StatusBar, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import { COLORS, SIZES, FONTS, servicesData} from "../constants"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Services = () => {

  const [ service, setService ] = useState('')
  const [ services, setServices ] = useState(servicesData)

  const addToServices = () => {
    if (service.includes(",") === false) {
      alertMsg('Please add amount', 'Amount Missing')
      return
    }
    if (service !== '') {
      setServices([...services, {id: Math.max.apply(Math, services.map(function(o) { return o.id; })) + 1, service: service.split(",")[0], amount: service.split(",")[1]}])
    }
    Keyboard.dismiss()
  }

  const removeService = (id) => {
    setServices(services.filter(item => item.id !== id))
  }

  const alertMsg = (text, title) => {
    Alert.alert(
      title,
      text,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  const Item = (item) => { 
    return (
      <View style={styles.listItem}>
        <View style={styles.textView}>
          <Text style={styles.serviceDesc}>{item.service}</Text>
          <Text style={styles.amount}>{`${item.amount} TZS`}</Text>
        </View>
        {services.length > 1 &&
        <TouchableOpacity onPress={()=> removeService(item.id)}>
          <MaterialIcons name="remove-circle-outline" color={"#ABABAB"} size={30}></MaterialIcons>
        </TouchableOpacity>
        }
      </View>
    )
  }

  const ListFooter = () => { 
    return (
      <>
        <View style={{borderBottomColor: "#ABABAB", borderBottomWidth: 1,width:"80%"}}/>
        <View style={styles.listItem}>
          <TextInput style={styles.textInput} onChangeText={setService} value={service} placeholder="Cooking, 50000"/>
          <TouchableOpacity onPress={()=> addToServices()}>
            <MaterialIcons name="add-circle-outline" color={"#ABABAB"} size={30}></MaterialIcons>
          </TouchableOpacity>
        </View>
      </>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.backgroundView}></View>

        <View style={styles.upperView}>
          <KeyboardAvoidingView style={styles.upperTitle} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.titleView}>
              <TouchableOpacity><MaterialIcons name="arrow-back-ios" color={"black"} size={25}></MaterialIcons></TouchableOpacity>
              <Text style={styles.titleText}>Services</Text>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.upperBody}>
            <View style={styles.list}>
              <FlatList
                data={services}
                renderItem={({ item }) => Item(item)}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={services.length < 7 && ListFooter()} 
                keyboardShouldPersistTaps="always"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Services

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
  upperTitle: {
    height: "10%", 
    width: "100%",
    alignItems: "center",
  },
  upperBody: {
    height: "90%", 
    width: "100%",
    alignItems: "center",
    paddingHorizontal : 20,
  },
  titleView: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "100%", 
    padding: 20
  },
  titleText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
  },
  list: {
    width: "100%", 
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: "center",
  },
  listItem: {
    height: 60,
    width: 300, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textView: {
    justifyContent: "space-between",
  },
  serviceDesc: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
  },
  amount: {
    fontFamily: FONTS.light,
    fontSize: SIZES.small,
    color: "#ABABAB"
  },
  textInput: {
    width: 250,
    fontFamily: FONTS.light,
    fontSize: SIZES.small,
    color: "#ABABAB"
  }
})