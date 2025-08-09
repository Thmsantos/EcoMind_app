import Navbar from '@/components/navbar/navbar';
import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../../../components/header'
 

export default function Resultados(){

    const happyEmoji = require("../../../assets/images/happy.png");
    const medioEmoji = require("../../../assets/images/neutral.png");
    const sadEmoji = require("../../../assets/images/sad-face.png");


    const getEmoji = (valor: number) => {
        if (valor <= limites.ideal.max) return happyEmoji;
        if (valor <= limites.medio.max) return medioEmoji;
        return sadEmoji;
    };

    const resultados = [
    { mes: "Fevereiro", consumo: 230 },
    { mes: "Março", consumo: 500 },
    { mes: "Abril", consumo: 150 },
    { mes: "Maio", consumo: 150 },
    ];

    const limites = {
        ideal: { max: 175, cor: "#4CAF50" },     
        medio: { max: 350, cor: "#FFC107" },      
        alto: { max: Infinity, cor: "#F44336" }, 
    };

    const getCor = (valor: number) => {
        if (valor <= limites.ideal.max) return limites.ideal.cor;
        if (valor <= limites.medio.max) return limites.medio.cor;
        return limites.alto.cor;
    };

    return(
    
    <View style={styles.container}>
    
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
           <Header title="Estatísticas" />

            <View style={styles.viewMain}>

             {resultados.map((item, index) => (
                <View key={index} style={[styles.contentEstatisticas, { backgroundColor: getCor(item.consumo) }]}>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.groupText}>
                                <Text style={styles.textResult}>
                                    <Text style={styles.textBold}>Mês: <Text style={styles.textMedium}>{item.mes}</Text></Text>
                                </Text>

                                <Text style={styles.textResult}>
                                    <Text style={styles.textBold}>Consumo: <Text style={styles.textMedium}>{item.consumo} kg</Text></Text>
                                </Text>

                                <Text style={styles.textResult}>
                                    <Text style={styles.textBold}>Balanço:</Text> Você está há {'\n'} 
                                <Text>dois Mêses </Text> diminuindo sua produção de co2</Text>
                                <Image style={styles.emoji} source={getEmoji(item.consumo)} />
                            </View>
                    </ScrollView>
                </View>
             ))}            

            </View>
        </ScrollView>
       
        <Navbar />
    </View>
    )
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
        paddingTop: 10,    
        marginBottom: 100,
        gap: 30
    },

    estatisticas: {
        flexDirection: "row"
    },

    groupText: {
        flexDirection: "column"
        
              

    },

    emoji: {
        position: "absolute",
        top: 10,
        left: 250
    },

    textResult: {
        fontSize: 20

    },

    textBold: {
        fontWeight: 700,
        fontSize: 20
    },

    textMedium:{
        fontWeight: 400
    },

    contentEstatisticas:{
        borderWidth: 2,    
        borderColor: '#00000', 
        borderStyle: 'solid',
        margin: "auto",
        width: 350,
        height: 180,
        padding: 20,
        borderRadius: 20,
        gap: 8,
        flexDirection: "row",
        paddingTop: 20
    },

    navbar:{
        position: 'absolute',  
        top: 676,                
        left: 0,
        right: 0,
        height: 60,   
        padding: 10,         
        backgroundColor: "#71BE70", 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        zIndex: 0,
    },

    navItem:{
        alignItems: 'center'
    },

    navText:{
        fontSize: 14,
        color: 'black',
        marginTop: 5,
    }

})