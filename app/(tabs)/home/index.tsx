import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import colors from "../../../components/colors/colors";

const logo = require("../../../assets/images/logo-home.png");

export default function Home() {
  return (
    <View style={styles.view1}>
      {/* Cabeçalho */}
      <View style={styles.headerContainer}></View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      {/* Texto de conscientização */}
      <View style={styles.container}>
        <Text style={styles.text3}>
          <Text style={styles.green}>Reduza sua pegada. </Text>
          {"\n"}Aumente sua conscientização
        </Text>
      </View>

      {/* Botões de ação */}
      <View style={styles.containerBotoes}>
        <TouchableOpacity
          style={styles.logarBtn}
          onPress={() => {
            console.log("Botão Cadastre-se clicado!");
            router.push("/(tabs)/cadastro");
          }}
        >
          <Text style={styles.logarText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.entrarBtn}
          onPress={() => {
            console.log("Botão Logar clicado!");
            router.push("/(tabs)/login");
          }}
        >
          <Text style={styles.entrarText}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingBottom: 12,
    backgroundColor: colors.background,
  },

  headerContainer: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 100,
  },

  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: -22,
  },

  logo: {
    width: 200,
    height: 180,
    marginVertical: -22,
  },

  container: {
    width: 400,
  },

  containerBotoes: {
    display: "flex",
    gap: 10,
    marginTop: 10,
  },

  entrarBtn: {
    width: 370,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 0,
    zIndex: 100,
    alignItems: "center",
  },

  logarBtn: {
    width: 370,
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primary,
    zIndex: 100,
    alignItems: "center",
  },

  entrarText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.textSecondary,
    marginVertical: 3,
  },

  logarText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.primary,
    marginVertical: 3,
  },

  green: {
    color: colors.primary,
  },

  text3: {
    color: colors.textPrimary,
    fontSize: 25,
    textAlign: "center",
    marginVertical: 30,
    fontWeight: "700",
  },

  rankingContainer: {
    backgroundColor: colors.primary,
    width: "90%",
    maxWidth: 350,
    padding: 10,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },

  rankingTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textDark,
    textAlign: "center",
    marginBottom: 8,
  },

  rankingSubtitle: {
    fontSize: 20,
    color: colors.textPrimary,
    marginBottom: 3,
    textAlign: "center",
    alignSelf: "flex-start",
  },

  rankingItem: {
    fontSize: 20,
    color: colors.textPrimary,
    marginVertical: 4,
    textAlign: "center",
    alignSelf: "flex-start",
  },

  bold: {
    fontWeight: "bold",
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.navbarBackground,
    paddingVertical: 10,
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: colors.navbarBorder,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 14,
    color: colors.textPrimary,
    marginTop: 5,
  },
});
