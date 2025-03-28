import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
const logo = require("../../../assets/images/logo.png");
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  return (
    <View style={styles.view1}>
      
      {/* Cabeçalho com o botão "Entrar" */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.entrarBtn}>
          <Text style={styles.entrarText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Container da Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      {/* Título */}
      <Text style={styles.texto1}>EcoMind</Text>

      {/* Texto explicativo */}
      <Text style={styles.text2}>
        É um jeito fácil de compensar o carbono que geramos no dia a dia. 
        {'\n'}Uma parte desse carbono é compensada naturalmente. A outra parte cabe a cada um decidir o que fazer.
      </Text>

      <Text style={styles.text3}>Se você decidir compensar, siga em frente!</Text>

      {/* Container verde englobando o ranking */}
      <View style={styles.rankingContainer}>
        <Text style={styles.rankingTitle}>Ranking</Text>
        <Text style={styles.rankingSubtitle}>
          Os líderes da sustentabilidade desse mês são:
        </Text>
        <Text style={styles.rankingItem}>🏆 1º Lugar - <Text style={styles.bold}>User01</Text> | 450 pts</Text>
        <Text style={styles.rankingItem}>🥈 2º Lugar - <Text style={styles.bold}>User02</Text> | 420 pts</Text>
        <Text style={styles.rankingItem}>🥉 3º Lugar - <Text style={styles.bold}>User03</Text> | 400 pts</Text>
      </View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="calculator" size={24} color="black" />
          <Text style={styles.navText}>Calculadora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="black" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={24} color="black" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 20,
    paddingBottom: 12, 
  },

  /* Novo estilo para o container da logo */
  logoContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    marginVertical: -22,

  },

  logo: {
    width: 290, 
    height: 180, 
    resizeMode: 'contain',
    marginVertical: -22,

    
  },

  headerContainer: {
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 5,
    alignItems: 'flex-end',
    marginVertical: -30
  },

  entrarBtn: {
    backgroundColor: '#71BE70',
    paddingVertical: 8,
    paddingHorizontal: 22,
    marginRight: -30,
    borderRadius: 20,
    marginTop: -50, // Adicione um valor negativo para subir o botão

    

  },

  entrarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#',
    marginVertical: 3,
    

  },

  texto1: {
    color: '#71BE70',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  

  },

  text2: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },

  text3: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 30,

    
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
    backgroundColor: '#F8F8F8', // Tom próximo ao branco, mas com leve destaque
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,          // Adiciona uma borda sutil para destacar a navbar
    borderTopColor: '#DADADA',  // Cor levemente mais escura para contraste
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