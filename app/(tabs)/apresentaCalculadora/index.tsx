import TypeWriterText from '@/components/animacao/chatBot';
import Navbar from '@/components/navbar/navbar';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert, ScrollView} from 'react-native';



export default function TabOneScreen() {
    const [balloonIndex, setBalloonIndex] = useState(0); 
    const [showButton, setShowButton] = useState(false); 
  
   
    const onBalloonFinish = () => {
        setTimeout(() => {
          if (balloonIndex < 2) {
            setBalloonIndex(balloonIndex + 1);
          } else {
            setShowButton(true);
          }
        }, 200); 
      };
      
  
    return (
      <View style={styles.container}>
        <Text style={styles.viewLogo}>
          <View style={styles.viewImagemLogo}>
            <Image source={require("../../../assets/images/logo.png")} style={styles.imageLogo} />
          </View>
          <Text style={styles.nomeAppLogo}>EcoMind</Text>
        </Text>
  
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={true}>
          <View style={styles.viewMain}>
            {balloonIndex >= 0 && (
              <ImageBackground source={require("../../../assets/images/mensagemcalculadora.png")} style={styles.mensagemChat}>
                <TypeWriterText 
                  text="Você sabia que suas atividades diárias geram emissões de carbono?"
                  speed={40}
                  style={styles.textoMsg}
                  onFinish={onBalloonFinish}  
                />
              </ImageBackground>
            )}
  
            {balloonIndex >= 1 && (
              <ImageBackground source={require("../../../assets/images/mensagemcalculadora.png")} style={styles.mensagemChat}>
                <TypeWriterText 
                  text="Coisas como transporte e consumo de energia impactam o meio ambiente."
                  style={styles.textoMsg}
                  onFinish={onBalloonFinish}  
                />
              </ImageBackground>
            )}
  
            {balloonIndex >= 2 && (
              <ImageBackground source={require("../../../assets/images/mensagemcalculadora.png")} style={styles.mensagemChat}>
                <TypeWriterText 
                  text="Mas não se preocupe! O primeiro passo para reduzir esse impacto é conhecer o seu consumo."
                  style={styles.textoMsg}
                  onFinish={onBalloonFinish}  
                />
              </ImageBackground>
            )}
  
            
            {showButton && (
              <View style={styles.viewBtnAcessarCalculadora}>
                <View style={styles.viewBtnIcone}>
                  <Image source={require("../../../assets/images/iconePlanta.png")} />
                  <Text style={styles.textBtnAcessarCalculadora}>Descubra seu Impacto no{" "}
                    <Text style={styles.textoDestaque}>Meio Ambiente</Text>
                  </Text>
                </View>
                <TouchableOpacity style={styles.btnAcessarCalculadora} onPress={() => router.push('/(tabs)/calculadora')}>
                  <Text style={styles.btnTextAcessarCalculadora}>Calculadora</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
  
        <Navbar />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    viewLogo: {
        margin: "auto",
        paddingTop: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },

    imageLogo: {
        width: 65,
        height: 65,
        backgroundSize: "cover"
    },

    viewImagemLogo: {
        width: 55,
        height:70
    },

    nomeAppLogo:{
        fontSize: 22,
        fontWeight: "700"
    },

    viewMain: {
        flex: 1,
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        paddingTop: 50      
    },

    mensagemChat: {
        width: 300,
        height: 89,
        marginBottom: 30
    },

    textoMsg:{
        padding: 15,
        fontSize: 13,
        fontWeight: 500
    },

    viewBtnAcessarCalculadora:{
        width: 300,
        height: 135,
        backgroundColor: "#71BE70",
        borderRadius: 28
    },

    viewBtnIcone:{
        display: "flex",
        flexDirection: "row",
        paddingLeft: 30,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 0,
        alignItems: "center",
        gap: 15
    },

    textBtnAcessarCalculadora: {
        fontWeight: 500,
        fontSize: 15
    },

    textoDestaque:{
        fontWeight: 800,
    },

    btnAcessarCalculadora:{
        width: 180,
        height: 35,
        backgroundColor: "#000000",
        borderRadius: 24,
        marginLeft: 75,
        marginTop: 20
    },

    btnTextAcessarCalculadora: {
        color: "#FFFFFF",
        paddingTop: 6,
        textAlign: "center",
        fontWeight: 800
    }
})