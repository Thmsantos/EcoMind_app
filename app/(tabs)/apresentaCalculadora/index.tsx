import TypeWriterText from '@/components/animacao/chatBot';
import Navbar from '@/components/navbar/navbar';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Header from '../../../components/header'

export default function TabOneScreen() {
    const params =  useLocalSearchParams()
    const userId = params.userId;
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
        <Header/>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={true}>
          <View style={styles.viewMain}>
            {balloonIndex >= 0 && (
              <ImageBackground source={require("../../../assets/images/mensagemcalculadora.png")} style={styles.mensagemChat}>
                <TypeWriterText 
                  text="Você sabia que suas atividades diárias geram emissões de carbono?"
                  speed={80}
                  style={styles.textoMsg}
                  onFinish={onBalloonFinish}  
                />
              </ImageBackground>
            )}

            {balloonIndex >= 1 && (
              <ImageBackground source={require("../../../assets/images/mensagemcalculadora.png")} style={styles.mensagemChat}>
                <TypeWriterText 
                  text="Coisas como transporte e consumo de energia impactam o meio ambiente."
                  speed={80}
                  style={styles.textoMsg}
                  onFinish={onBalloonFinish}  
                />
              </ImageBackground>
            )}
  
            {balloonIndex >= 2 && (
              <ImageBackground source={require("../../../assets/images/mensagemcalculadora.png")} style={styles.mensagemChat}>
                <TypeWriterText 
                  text="Mas não se preocupe! O primeiro passo para reduzir esse impacto é conhecer o seu consumo."
                  speed={80}
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
                <TouchableOpacity style={styles.btnAcessarCalculadora} onPress={() => router.push(`/(tabs)/calculadora?userId=${userId}`)}>
                  <Text style={styles.btnTextAcessarCalculadora}>Calculadora</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
  
        <Navbar userId={userId as string} />
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
        height:80
    },

    nomeAppLogo:{
        fontSize: 22,
        fontWeight: "800"
    },

    viewMain: {
        flex: 1,
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        paddingTop: 8      
    },

    mensagemChat: {
        width: 358,
        height: 106,
        marginBottom: 30,
        position: "relative",
        top: 2
    },

    textoMsg:{
        paddingTop: 12,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 16,
        fontWeight: 500,
    },

    viewBtnAcessarCalculadora:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 150,
        backgroundColor: "#71BE80",
        borderRadius: 28,
        paddingBottom: 19,
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
        fontSize: 16
    },

    textoDestaque:{
        fontWeight: 800,
    },

    btnAcessarCalculadora:{
        width: 280,
        height: 40,
        backgroundColor: "#000000",
        borderRadius: 24,
        marginTop: 20
    },

    btnTextAcessarCalculadora: {
        color: "#FFFFFF",
        paddingTop: 7,
        textAlign: "center",
        fontWeight: 700,
        fontSize: 18
    }
})