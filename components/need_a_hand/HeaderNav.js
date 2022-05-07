import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { assets } from "../../constants"

const HeaderNav = () => {
  return (
    <View style={styles.top}>
      <TouchableOpacity>
        <Image source={assets.menuIcon} style={{ width: 30, height: 30 }}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={assets.profileIcon} style={{ width: 40, height: 40 }}/>
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
})