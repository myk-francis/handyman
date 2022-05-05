import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, Image  } from "react-native";
import { FocusedStatusBar } from "../components/nft";
import { Button } from "../components/need_a_hand";
import { COLORS, SIZES, FONTS, assets} from "../constants";


const Logo = () => { 
  return (
    <View style={styles.logoContainer}>
      <Image source={assets.logoOne} style={{ width: 120, height: 120 }}/>
    </View>
  )
 }


const Info = () => { 
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Do You Need A Hand?</Text>
      <View style={styles.infoBody}>
        <Text style={styles.infoText}>Brows through countles specialists in a vatiety of categories until you find your match.</Text>
        <Button minWidth={200} fontSize={SIZES.font} text={"WHAT WE OFFER"}/>
      </View>
    </View>
  )
 }


const StartPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar backgroundColor={COLORS.orange} />
      <View style={styles.container}>
        <View style={styles.backgroundView}></View>

        <View style={styles.upperView}>
          <View style={styles.upperTopView}>{Logo()}</View>
          <View style={styles.upperBottomView}>{Info()}</View>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1
    },
    upperView: {
      flex: 1,
      zIndex: 0,
    },
    upperTopView: {
      height: "30%", 
      backgroundColor: COLORS.orange,
      alignItems: "center",
      justifyContent: "center"
    },
    upperBottomView: {
      height: "70%", 
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      backgroundColor: COLORS.appGray
    },
    backgroundView: {
      flex: 1,
      backgroundColor: COLORS.orange,
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: -1
    },
    infoContainer: {
      height: "50%",
      width: "80%",
    },
    infoTitle: {
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.extraLarge,
      textAlign: "center"
    },
    infoBody: {
      height: "90%",
      alignItems: "center",
      justifyContent: "space-between"
    },
    infoText: {
      textAlign: "center",
      fontFamily: FONTS.light,
      fontSize: SIZES.medium,
    },
    logoContainer: {
      height: 120,
      width: 120,
    }
  });

export default StartPage