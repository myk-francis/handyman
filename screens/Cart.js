import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, Modal, Pressable  } from 'react-native'
import { HeaderNav, NormalButton, Button } from "../components/need_a_hand"
import { FONTS, SIZES, COLORS, SHADOWS } from "../constants"
import React from "react"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Cart = ({ modalVisible, setModalVisible, servicesSelected, removeService, servicesTotal }) => {

  const ListItem = (item) => {
    return(
      <View style={styles.card}>
        <View style={styles.urlView}>
          <Image source={{ uri: item.uri}} resizeMode="cover" style={styles.url}></Image>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.name}>{item.service}</Text>
          <Text style={styles.price}>{`${(item.price + '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} tzs`}</Text>
        </View>
        <TouchableOpacity style={styles.icon} onPress={() => removeService(item.id)}>
          <MaterialIcons name="remove-circle-outline" color={"#ABABAB"} size={40}></MaterialIcons>
        </TouchableOpacity>
      </View>
    )
  }

  const checkoutModalContent = (total) => { 
    return(
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.presssable} onPress={() => setModalVisible(false)}></TouchableOpacity>
        <View style={styles.modalCheckOutContainer}>
          <View style={styles.modalTextView}>
            <Text style={styles.modalTotal}>Total:</Text>
            <Text style={styles.modalPrice}>{`${(total + '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} tzs`}</Text>
          </View>
          <View style={styles.modalBtn}>
            <Button text={"CHECK OUT"} minWidth={100} fontSize={SIZES.large} handlePress={() => setModalVisible(false)} />
          </View>
        </View>
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
            data={servicesSelected}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => ListItem(item)}
          />
          <View style={styles.bottomView}>
            <Button text={"View Cart"} minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} handlePress={() => setModalVisible(true)} />
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent(servicesTotal)}
      </Modal>
    </SafeAreaView>
  )
}

export default Cart

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
    position: "absolute",
    bottom: 50,
    right: 20,
  },
  bottomView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.3)",
    zIndex: 1,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  presssable: {
    height: "85%"
  },
  modalCheckOutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //height: 150,
    height: "15%",
    width: "100%",
    backgroundColor: "#D9CDBF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 16,
  },
  modalTotal: {
    color: "white", 
    fontFamily: FONTS.medium,
    fontSize: 15
  },
  modalPrice: {
    color: "white", 
    fontFamily: FONTS.bold,
    fontSize: 20
  },
})