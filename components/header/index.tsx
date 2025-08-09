import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default function Header({ title = "EcoMind" }) {
  return (
    <View style={styles.viewLogo}>
      <View style={styles.viewImagemLogo}>
        <Image
          source={require("../../assets/images/logo-home.png")}
          style={styles.imageLogo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.nomeAppLogo}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewLogo: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    width: "100%",
  },

  imageLogo: {
    width: width * 0.16,
    height: width * 0.16,
  },

  viewImagemLogo: {
    marginRight: -10,
  },

  nomeAppLogo: {
    fontSize: 20,
    fontWeight: "700",
  },
});
