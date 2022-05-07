import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity, ImageBackground, FlatList, SectionList } from 'react-native'
import { NormalButton, NavBar, } from "../components/need_a_hand"
import React from 'react'
import { COLORS, SIZES, FONTS, assets, stories, popular, categories} from "../constants"

const image = { uri: "https://media.istockphoto.com/photos/brick-wall-picture-id497944862?b=1&k=20&m=497944862&s=170667a&w=0&h=Fm5cJDh74st0zuSJ_SW78l8GXu5cfkfCCmjQmrTTr6U=" }

const Discovery = () => {

  const HeaderNav = () => { 
    return(
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

  const ListItem = (item) => { 
    if (item.title === "Stories") {
      return(
        <View style={[styles.storiesCard, item.id > 1 && { marginLeft: 10 }]}>
          <ImageBackground source={{ uri: item.uri}} resizeMode="cover" style={styles.storiesUrlBackground}>
            <Text style={styles.storiesCaption}>{item.caption}</Text>
            <Text style={styles.storiesSubCaption}>{item.subCaption}</Text>
          </ImageBackground> 
        </View>
      )
    } else if (item.title === "Popular") {
      return(
        <View style={[styles.popCard, item.id > 1 && { marginLeft: 10 }]}>
          <ImageBackground source={{ uri: item.uri}} resizeMode="cover" style={styles.popUrlBackground}>
            <Text style={styles.popCaption}>{item.name}</Text>
            <Text style={styles.popPrice}>{item.price}</Text>
          </ImageBackground> 
        </View>
      )
    } else {
      return(
        <View style={[styles.personCard, item.id > 1 && { marginLeft: 10 }]}>
          <Image source={{ uri: item.uri}} resizeMode="cover" style={styles.personUrlBackground}></Image> 
          <Text style={styles.personCaption}>{item.name}</Text>
          <Text style={styles.personPrice}>{item.price}</Text>
        </View>
      )
    }
  }


  const ListSection = () => { 
    return(
      <View style={styles.middle}>
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={categories}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section }) => (
            <View style={{ marginVertical:10 }}>
              <View style={styles.sectionTitle}>
                <Text style={styles.sectionTitleText}>{section.title}</Text>
              </View>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => ListItem(item)}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </View>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return SectionItem(section)
          }}
        />
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundView}></View>
      <View style={styles.topView}>
        {HeaderNav()}
        {ListSection()}
        <View style={styles.bottom}>
          <NavBar selected={"Home"}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Discovery

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
  top: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },
  middle: {
    height: "80%",
    padding: 10
  }, 
  storiesView: {
    height: 200,
    width: "100%",
  },
  storiesTitle: {
    height: "15%",
    width: "100%",
  },
  storiesTitleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  storiesCard: {
    height: 170,
    width: 300,
  },
  storiesUrlBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 20, 
    overflow: 'hidden',
  },  
  storiesCaption: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 30,
    left: 10
  },
  storiesSubCaption: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    left: 10
  },

  popView: {
    height: 400,
    width: "100%",
  },
  popTitle: {
    height: "10%",
    width: "100%",
  },
  popTitleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  popCard: {
    height: 360,
    width: 300,
  },
  popUrlBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 20, 
    overflow: 'hidden',
  },  
  popCaption: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 30,
    left: 10
  },
  popPrice: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    left: 10
  },

  sectionView: {
    height: 200,
    width: 400,
  },
  sectionTitle: {
    height: 30,
    width: "100%",
  },
  sectionTitleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  personCard: {
    height: 170,
    width: 150,
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
  bottom: {
    height: "10%",
  },
})