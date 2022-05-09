import React, { useState } from 'react'
import { TouchableOpacity, View, Text, SafeAreaView, Image, StatusBar, FlatList, StyleSheet } from "react-native"

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"

import { CircleLikeButton, CircleBackButton } from "../components/need_a_hand"
import { FocusedStatusBar } from "../components/nft"
import { COLORS, FONTS, SIZES } from "../constants"

const Profile = ({ route, navigation }) => { 
  const { popularDetails } = route.params

  const [bio, setBio] = useState(popularDetails.bio.slice(0, 100))
  const [readMore, setReadMore] = useState(false)

  const ReadMore = () => { 
    if (!readMore) {
      setBio(popularDetails.bio)
      setReadMore(true)
    } else {
      setBio(popularDetails.bio.slice(0, 100))
      setReadMore(false)
    }
  }

  const Header = (imageUrl) => ( 
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={{ uri: imageUrl}}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />

      <CircleBackButton
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

      <CircleLikeButton
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  )

  const ProfileView = () => ( 
    <View style={{ width: "100%", marginVertical: 10 }}>
      <TouchableOpacity style={styles.ratingsView}>
        <View style={styles.avatar}>
          <MaterialCommunityIcons name="account-circle" color={"#F2F2F2"} size={50}></MaterialCommunityIcons>
        </View>
        <View style={styles.details}>
          <Text style={styles.profileName}>{popularDetails.name}</Text>
          <Text style={styles.ratingsText}>⭐4.8 / 5 - 22 ratings</Text>
        </View>
        <View style={styles.forwardIcon}>
          <AntDesign name="right" color={"gray"} size={40}></AntDesign>
        </View>
      </TouchableOpacity>
      <View style={styles.bioView}>
        <Text style={styles.bioText}>
          {bio}
          {!readMore && "..."}
          <Text style={{ color: COLORS.primary, fontSize: SIZES.small, fontFamily: FONTS.semiBold, }} onPress={() => ReadMore()}>
            {readMore ? " Show Less" : " Read More"}
          </Text>
        </Text>
      </View>
    </View>
  )

  const MoreInfo = () => ( 
    <View style={styles.moreInfo}>
      <View style={styles.infoTexts}>
        <Text style={styles.firstText}>
          Want to know more about your handyman?
        </Text>
        <Text style={styles.secText}>
          Chat with them
        </Text>
      </View>
      <TouchableOpacity style={styles.nextIcon}>
        <Feather name="arrow-right-circle" color={"black"} size={30}></Feather>
      </TouchableOpacity>
    </View>
  )

  const HeaderItem = (imageUrl) => { 
    return(
      <>
        {Header(imageUrl)}
        {ProfileView()}
        {MoreInfo()}
      </>
    )  
  }

  const ListItem = (item) => {
    return(
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.listText}>{item.service}</Text>
          <Text style={styles.listText}>{`${(item.price + '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} tzs`}</Text>
        </View>         
      </View>
      
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true}/>

      <FlatList
        data={popularDetails.servicesData}
        renderItem={({ item }) => ListItem(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          //padding: 10,
        }}
        ListHeaderComponent={HeaderItem(popularDetails.uri)}
      />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  cardContainer: {
    height: 32,
    width: "100%",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: "100%",
    width: 300,
    borderRadius: 30,
    flexDirection: "row",
    padding: 5,
    borderWidth: 1,
    borderColor: "#ABABAB",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listText: {
    fontSize: 13,
    color: "#ABABAB",
  },

  ratingsView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  profileName: {
    fontSize: 20
  },
  ratingsText: {
    fontSize: 10
  },
  bioView: {
    paddingHorizontal: 20
  },
  bioText: {
    color: "#ABABAB"
  },

  moreInfo: {
    width: "95%",
    height: 77,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 13,
    backgroundColor: "lightblue",
    marginHorizontal: 10, 
    marginBottom: 5,
    padding: 10
  },
  firstText: {
    fontFamily: FONTS.semiBold,
    fontSize: 15
  },
  secText: {
    fontFamily: FONTS.semiBold,
    color: "#ABABAB",
    fontSize: 15,
  }

})