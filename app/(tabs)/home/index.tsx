import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { router } from 'expo-router';
import Navbar from '../../../components/navbar/navbar';
const logo = require("../../../assets/images/logo-home.png");



export default function Home() {
  
  return (
    
    <View style={styles.view1}>
      
      {/* Cabeçalho com o botão "Entrar" */}
      <View style={styles.headerContainer}>
      </View>

      {/* Container da Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.container}>
        <Text style={styles.text3}><Text style={styles.green}>Reduza sua pegada. </Text>{'\n'} Aumente sua conscientização</Text>
      </View>


      <View style={styles.containerBotaos}>
        <TouchableOpacity
            style={styles.logarBtn}
            onPress={() => {
              console.log('Botão Entrar clicado!');
              router.push("/(tabs)/cadastro");
            }}
          >
            <Text style={styles.entrarText}>Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.entrarBtn}
            onPress={() => {
              console.log('Botão Entrar clicado!');
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
    backgroundColor: '#71BE70',
    padding: 10,
    paddingVertical: 12,
    paddingHorizontal:10,
    borderRadius: 30,
    borderWidth: 0,
    zIndex: 100, 
    alignItems: "center",
},

logarBtn: {
  width: 370,
  backgroundColor: 'transparent',
  padding: 10,
  paddingVertical: 12,
  paddingHorizontal:10,
  borderRadius: 30,
  borderWidth: 2,
  zIndex: 100, 
  alignItems: "center",
},

  entrarText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#',
    marginVertical: 3,
  },

  green: {
    color: '#71BE70'
  },

  text2: {
    color: '#000',
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 10,
  },

  text3: {
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 30,  
    fontWeight: 700,  
  },

  rankingContainer: {
    backgroundColor: '#71BE70',
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
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,

  },

  rankingSubtitle: {
    fontSize: 20,
    color: '#00000',
    marginBottom: 3,
    textAlign: 'center',
    alignSelf: 'flex-start',


  },

  rankingItem: {
    fontSize: 20,
    color: '#00000',
    marginVertical: 4,
    textAlign: 'center',
    alignSelf: 'flex-start',
  },

  bold: {
    fontWeight: 'bold',
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F8F8F8', 
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,          
    borderTopColor: '#DADADA', 
},
navItem: {
    alignItems: 'center',
},
navText: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
},
});