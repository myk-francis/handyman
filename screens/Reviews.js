import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS, assets, reviewsData} from "../constants"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Reviews = () => {

  const [ reviews, setReviews ] = useState(reviewsData)

  const Header = () => { 
    return (
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <View style={styles.titleView}>
            <TouchableOpacity><MaterialIcons name="arrow-back-ios" color={"black"} size={25}></MaterialIcons></TouchableOpacity>
            <Text style={styles.titleText}>Reviews</Text>
          </View>
        </View>
        <View style={styles.headerBody}>
          <View style={styles.avatar}>
            <View style={styles.avatarPic}>
              <Image source={assets.userUnknownAvatar} style={{ width: 100, height: 100 }}/>
            </View>
            <View style={styles.avatarTexts}>
              <Text style={styles.infoText}>username</Text>
              <Text style={styles.infoText}>username@example.com</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const Item = (item) => { 
    return (
      <View style={styles.listItem}>
        <View style={styles.leftItem}>
          <View style={{ width: 40, height: 40 }}>
            <Image source={assets.personAvatar} resizeMode="contain" style={{ width: "100%", height: "100%" }}/>
          </View>
        </View>
        <View style={styles.rightItem}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemReview}>{item.review}</Text>
        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.backgroundView}></View>

        <View style={styles.upperView}>
          {Header()}
          <View style={styles.list}>
            <FlatList
              data={reviews}
              renderItem={({ item }) => Item(item)}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Reviews

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
    padding: 20
  },
  header: {
    height: "30%", 
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    height: 80, 
    width: "100%",
    alignItems: "center",
  },
  headerBody: {
    height: "60%", 
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar:{
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarTexts: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleView: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "100%", 
  },
  titleText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
  },
  list: {
    height: "70%", 
    width: "100%", 
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  listItem: {
    height: 100,
    width: "100%", 
    flexDirection: "row",
    paddingVertical: 5
  },
  leftItem: {
    height: "100%",
    width: 60, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rightItem: {
    height: "100%",
    width: "80%", 
    justifyContent: "center",
  },
  itemTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
  },
  itemReview: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.small,
    color: "#ABABAB"
  }
})