import React from "react"
import { TouchableOpacity, Text } from "react-native"

import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import { COLORS, SIZES, FONTS, SHADOWS } from "../../constants"

export const Button = ({ minWidth, fontSize, text, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.orange,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export const NormalButton = ({ minWidth, fontSize, text, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.orange,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export const CircleLikeButton = ({ imgUrl, ...props }) => {

  const [liked, setLiked] = React.useState(false)

  const handlePress = () => {
    setLiked(!liked)
  }

  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: "#F2F2F2",
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={()=> handlePress()}
    >
      <FontAwesome name="heart" color={liked === true ? "red" : "#D9CDBF"} size={24}></FontAwesome>
    </TouchableOpacity>
  )
}

export const CircleBackButton = ({ handlePress, ...props }) => {

  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: "#F2F2F2",
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={()=> handlePress()}
    >
      <MaterialIcons name="arrow-back-ios" color={"black"} size={24}></MaterialIcons>
    </TouchableOpacity>
  )
}


