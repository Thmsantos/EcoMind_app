import React from 'react';
import { Text, View, StyleSheet, Image  } from 'react-native';
import { TouchableOpacity } from 'react-native';
const logo = require("../../../assets/images/logo.png")
import Icon from 'react-native-vector-icons/FontAwesome';<Icon name="home" size={30} color="#4CAF50" />



export default function Home() {
  return (

    <View style={styles.view1}>
        <View style={styles.headerContainer}><Image source={logo} style={styles.logo} />
            

            
            
        

             {/* Cabeçalho (Imagem + Botão Entrar) */}
      
        <TouchableOpacity style={styles.entrarBtn}>
          <Text style={styles.entrarText}>Entrar</Text>
        </TouchableOpacity>
      </View>


        
       




               {/* Título */}
        <Text style={ styles.texto1}>EcoMind</Text>

            {/* Texto explicativo */}
        <Text style={ styles.text2}>É um jeito facil de compensar o carbono que geramos no dia a dia. 
{'\n'}Uma parte desse carbono é compensado naturalmente.  A outtra parte cabe a cada um decidir o que fazer .
</Text>

<Text style={ styles.text3}>Se você decidir compensar siga em frente!</Text>

          {/* Container verde englobando o ranking */}
      <View style={styles.rankingContainer}>
        <Text style={styles.rankingTitle}>Ranking</Text>
        <Text style={styles.rankingSubtitle}>
          Os líderes da sustentabilidade desse mês são:
        </Text>

        <Text style={styles.rankingItem}>
          🏆 1º Lugar - <Text style={styles.bold}>User01</Text> | 450 pts
        </Text>
        <Text style={styles.rankingItem}>
          🥈 2º Lugar - <Text style={styles.bold}>User02</Text> | 420 pts
        </Text>
        <Text style={styles.rankingItem}>
          🥉 3º Lugar - <Text style={styles.bold}>User03</Text> | 400 pts
        </Text>
      </View>


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
            padding: 20,


            },

            
            headerContainer:{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 10,
                display: 'flex',
                justifyContent: 'flex-end',
                

            },
            
            entrarBtn: {
                backgroundColor: '#71BE70',
                paddingVertical: 8,
                paddingHorizontal: 22,
                alignSelf: 'flex-start',
                borderRadius: 20,
            },

            logo:{
                width: 120,
                height: 50,
                resizeMode: 'contain',

            },

            entrarText: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
            },
            
           

        texto1: {
            color: '#71BE70',
            fontSize: 60,
            fontWeight: 'bold',


        },
        text2:{
            color: '#000',
            fontSize: 22,
            textAlign: 'center',
            marginVertical: 10,


        },
        text3:{
            color: '#000',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 20,

        },

        rankingContainer: {
            
            width: '100%',
            padding: 15,
            backgroundColor: '#71BE70',
            borderRadius: 25,
            alignItems: 'center',

          },
        
          rankingTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#333',
          },
        
          rankingSubtitle: {
            fontSize: 16,
            color: '#333',
            marginBottom: 10,
            textAlign: 'center',
          },
        
          rankingItem: {
            fontSize: 16,
            color: '#000',
            marginVertical: 5,
          },
        
          bold: {
            fontWeight: 'bold',
          },

          // Estilos da barra de navegação
          navbar:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#71BE70',
            paddingVertical: 10,
            width: '100%',
            position: 'absolute',
            left: 0,
            right: 0,
            
            
            bottom: 0,

          },
          navItem:{
            alignItems: 'center',
          },

          navText:{
            fontSize: 14,
            color: 'black',
            marginTop: 5,

          },


          
 
        });