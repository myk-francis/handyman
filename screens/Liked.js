import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import { HeaderNav } from "../components/need_a_hand"
import { assets, COLORS, likesData } from "../constants"
import React from "react"
import AntDesign from "react-native-vector-icons/AntDesign"

const Liked = () => {

  const ListItem = (item) => {
    return(
      <View style={styles.card}>
        <View style={styles.urlView}>
          <Image source={{ uri: item.uri}} resizeMode="cover" style={styles.url}></Image>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.service}>{item.service}</Text>
        </View>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="plus" color={"#D9CDBF"} size={30}></AntDesign>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundView}></View>
      <View style={styles.topView}>
        <HeaderNav/>
        <View style={styles.middle}>
          <FlatList
            data={likesData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => ListItem(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Liked

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 10,
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
  topView: {
    flex: 1,
    zIndex: 0,
  },
  middle: {
    height: "90%",
    padding: 10
  },
  card: {
    height: 144,
    width: 380,
    borderRadius: 20,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    marginVertical: 10
  },
  urlView: {
    height: "100%",
    width: "30%",
    borderRadius: 20,
    flexDirection: "row",
  },
  url: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: 'hidden',
  },
  infoView: {
    height: "70%",
    width: "70%",
    paddingLeft: 10,
    justifyContent: "space-around"
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 13,
    color: "gray",
  },
  service: {
    fontSize: 13,
  },
  icon: {
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#D9CDBF",
    borderRadius: 20,
    backgroundColor: "#F2F2F2",

    position: "absolute",
    bottom: -10,
    right: 20,
  },
})