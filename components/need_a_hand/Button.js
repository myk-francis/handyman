import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../../constants";

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
  );
};

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
  );
};


