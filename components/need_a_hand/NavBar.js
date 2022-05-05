import React, { useState } from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import Foundation from "react-native-vector-icons/Foundation"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"

export default function NavBar({selected}) {
  const [page, setPage] = useState(selected)

  const handlePress = (value) => {
    setPage(value)
  }

  return (
    <View>
      <View style={styles.iconView}>
        <TouchableOpacity style={styles.icon} onPress={()=> handlePress("Home")}>
          <Foundation name="home" color={page === "Home" ? "black" : "#ABABAB"} size={30}></Foundation>
          <View style={{borderBottomColor: page === "Home" ? "black" : "white", borderBottomWidth: 2,width:"20%", paddingTop: 2}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={()=> handlePress("Popular")}>
          <Entypo name="grid" color={page === "Popular" ? "black" : "#ABABAB"} size={30}></Entypo>
          <View style={{borderBottomColor: page === "Popular" ? "black" : "white", borderBottomWidth: 2,width:"20%", paddingTop: 2}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={()=> handlePress("Fav")}>
          <FontAwesome name="heart" color={page === "Fav" ? "black" : "#ABABAB"} size={30}></FontAwesome>
          <View style={{borderBottomColor: page === "Fav" ? "black" : "white", borderBottomWidth: 2,width:"20%", paddingTop: 2}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={()=> handlePress("Cart")}>
          <Ionicons name="cart" color={page === "Cart" ? "black" : "#ABABAB"} size={30}></Ionicons>
          <View style={{borderBottomColor: page === "Cart" ? "black" : "white", borderBottomWidth: 2,width:"20%", paddingTop: 2}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconView: {
    flexDirection: "row",
    height: 80, 
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-around"
  },
  icon: {
    height: "100%",
    width: "25%",
    alignItems: "center",
    justifyContent: "center"
  }
})