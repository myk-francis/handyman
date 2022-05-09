import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { assets } from "../../constants"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const HeaderNav = () => {
  return (
    <View style={styles.top}>
      <TouchableOpacity style={styles.menuIcon}>
        <View style={styles.lineOne}></View>
        <View style={styles.lineOne}></View>
        <View style={styles.lineTwo}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="account-circle" color={"#8C8068"} size={40}></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderNav

const styles = StyleSheet.create({
  top: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 10,
  },
  menuIcon: {
    height: 30,
    width: 30,
    justifyContent: "space-between"
  },
  lineOne: {
    width: "100%",
    borderWidth: 2,
  },
  lineTwo: {
    width: "50%",
    borderWidth: 2,
  },
})