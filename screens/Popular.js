import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, TextInput, Image, FlatList } from 'react-native'
import { HeaderNav } from "../components/need_a_hand"
import { assets, SIZES } from "../constants"
import React from "react"
import { useNavigation } from "@react-navigation/native"


const Popular = ({ isFetching, popularData, handleSearch, onRefresh }) => {
  const navigation = useNavigation()

  const ListHeader = () => { 
    return(
      <View style={styles.headerContainer}>
        <View style={styles.textView}>
          <Text style={styles.userText}>Hello Michael 👋</Text>
          <Text style={styles.descText}>Let's Find You A Handyman 😊</Text>
        </View>
        <View style={styles.inputView}>
          <Image source={assets.search} resizeMode="contain" style={{ width: 20, height: 20, marginRight: SIZES.base }}/>
          <TextInput placeholder="Search" style={{ flex: 1 }} onChangeText={handleSearch}/>
        </View>
      </View>
    )
  }

  const ListItem = (item) => { 
    return(
      <TouchableOpacity style={styles.personCard} onPress={()=> navigation.navigate("Profile", { popularDetails: item })}>
        <Image source={{ uri: item.uri}} resizeMode="cover" style={styles.personUrlBackground}></Image> 
        <Text style={styles.personCaption}>{item.name}</Text>
        <Text style={styles.personPrice}>{item.description}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundView}></View>
      <View style={styles.topView}>
        <View style={styles.middle}>
          <FlatList
            onRefresh={() => onRefresh()}
            refreshing={isFetching}
            stickyHeaderIndices={[0]}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={popularData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => ListItem(item)}
            ListHeaderComponent={ ListHeader() }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Popular

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundView: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "white",
    zIndex: -1
  },
  topView: {
    flex: 1,
    zIndex: 0,
  },
  middle: {
    height: "100%",
    
  }, 
  headerContainer: {
    backgroundColor: "white",
    padding: 10
  },
  textView: {
    marginVertical: 5,
  },
  userText: {
    fontSize: SIZES.small,
    color: "black",
  },
  descText: {
    fontWeight: "bold",
    fontSize: SIZES.large,
    color: "black",
    marginTop: 4,
  },
  inputView: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },

  personCard: {
    height: 195,
    width: 200,
    padding: 10
  },
  personUrlBackground: {
    width: "100%",
    height: "80%",
    borderRadius: 20, 
    overflow: 'hidden',
  },  
  personCaption: {
    fontSize: 15,
    fontWeight: "bold",
  },
  personPrice: {
    fontSize: 10,
    fontWeight: "bold",
  },
})