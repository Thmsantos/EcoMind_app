import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import colors from '../components/colors/colors';

const logo = require('../assets/images/logo-home.png');

export default function Home() {
  return (
    <View style={styles.view1}>
      
      {/* Cabeçalho com o botão "Entrar" */}
      <View style={styles.headerContainer}></View>

      {/* Container da Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.container}>
        <Text style={styles.text3}>
          <Text style={styles.green}>Reduza sua pegada. </Text>{'\n'} 
          Aumente sua conscientização
        </Text>
      </View>

      <View style={styles.containerBotaos}>
        <TouchableOpacity
          style={styles.logarBtn}
          onPress={() => router.push("/(tabs)/cadastro")}
        >
          <Text style={styles.entrarText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.entrarBtn}
          onPress={() => router.push("/(tabs)/login")}
        >
          <Text style={styles.entrarText}>Logar</Text>
        </TouchableOpacity>
      </View>   
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400
  },

  containerBotaos: {
    display: "flex",
    gap: 10
  },

  view1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 20,
    paddingBottom: 12, 
  },

  logoContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    marginVertical: -22,
  },

  logo: {
    width: 200, 
    height: 180, 
    marginVertical: -22,    
  },

  headerContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 100,
  },

  entrarBtn: {
    width: 370,
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 30,
    borderWidth: 0,
    zIndex: 100, 
    alignItems: "center",
  },

  logarBtn: {
    width: 370,
    backgroundColor: 'transparent',
    padding: 12,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.tertiary,
    zIndex: 100, 
    alignItems: "center",
  },

  entrarText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.textPrimary,
    marginVertical: 3,
  },

  green: {
    color: colors.primary
  },

  text2: {
    color: colors.textPrimary,
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 10,
  },

  text3: {
    color: colors.textPrimary,
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 30,  
    fontWeight: '700',  
  },

  rankingContainer: {
    backgroundColor: colors.primary,
    width: '90%',
    maxWidth: 350, 
    padding: 10,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  rankingTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textDark,
    textAlign: 'center',
    marginBottom: 8,
  },

  rankingSubtitle: {
    fontSize: 20,
    color: colors.textPrimary,
    marginBottom: 3,
    textAlign: 'center',
    alignSelf: 'flex-start',
  },

  rankingItem: {
    fontSize: 20,
    color: colors.textPrimary,
    marginVertical: 4,
    textAlign: 'center',
    alignSelf: 'flex-start',
  },

  bold: {
    fontWeight: 'bold',
  },

  
});
