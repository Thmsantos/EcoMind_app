import Navbar from '@/components/navbar/navbar';
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../../../components/header'
 

export default function Resultados(){

    const happyEmoji = require("../../../assets/images/happy.png");
    const medioEmoji = require("../../../assets/images/neutral.png");
    const sadEmoji = require("../../../assets/images/sad-face.png");


    const getEmoji = (valor: number) => {
       if(resultados[valor].balanco === 'positivo'){
        return happyEmoji;
       };

       if(resultados[valor].balanco === 'negativo'){
        return sadEmoji;
       }

       if(resultados[valor].balanco === 'idem'){
        return medioEmoji;
       }
    };

const resultados = [
  { mes: "Fevereiro", consumo: 230, balanco: 'positivo' },
  { mes: "Março", consumo: 500, balanco: 'negativo' },
  { mes: "Abril", consumo: 150, balanco: 'positivo' },
  { mes: "Maio", consumo: 150, balanco: 'idem' },
  { mes: "Junho", consumo: 300, balanco: 'negativo' },   
  { mes: "Julho", consumo: 280, balanco: 'positivo' },   
  { mes: "Agosto", consumo: 280, balanco: 'idem' },      
  { mes: "Setembro", consumo: 260, balanco: 'positivo' },
  { mes: "Outubro", consumo: 400, balanco: 'negativo' }, 
  { mes: "Novembro", consumo: 390, balanco: 'positivo' } 
];


    const limites = {
        ideal: { max: 175, cor: "#66d16aff" },     
        medio: { max: 350, cor: "#FFC107" },      
        alto: { max: Infinity, cor: "#F44336" }, 
    };

    const getCor = (valor: number) => {
       if(resultados[valor].balanco === 'positivo'){
        return limites.ideal.cor;
       };

       if(resultados[valor].balanco === 'negativo'){
        return limites.alto.cor;
       }

       if(resultados[valor].balanco === 'idem'){
        return limites.medio.cor;
       }
    };

    const getBalanco = (valor: number) => {
        if(resultados[valor].balanco === 'positivo'){
        return 'redução';
       };

       if(resultados[valor].balanco === 'negativo'){
        return 'aumento';
       }

       if(resultados[valor].balanco === 'idem'){
        return 'mantimento';
       }
    } 

    return(
    
    <View style={styles.container}>
    
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
           <Header title="Estatísticas" />

            <View style={styles.viewMain}>

             {resultados.map((item, index) => (
                <View key={index} style={[styles.contentEstatisticas, { backgroundColor: getCor(index) }]}>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.groupText}>
                                <Text style={styles.textResult}>
                                    <Text style={styles.textBold}>Mês: <Text style={styles.textMedium}>{item.mes}</Text></Text>
                                </Text>

                                <Text style={styles.textResult}>
                                    <Text style={styles.textBold}>Sua emissão: <Text style={styles.textMedium}>{item.consumo} kg</Text></Text>
                                </Text>

                                <Text style={styles.textResult}>
                                    <Text style={styles.textBold}>Balanço: </Text>
                                    <Text>
                                        {getBalanco(index)} da emissão.
                                    </Text>
                                </Text>
                                <Image style={styles.emoji} source={getEmoji(index)} />
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
        gap: 30,
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
        fontSize: 17,
    },

    textBold: {
        fontWeight: 700,
        fontSize: 19
    },

    textMedium:{
        fontWeight: 400,
        fontSize: 17
    },

    contentEstatisticas:{
        borderWidth: 2,    
        borderColor: '#00000', 
        borderStyle: 'solid',
        margin: "auto",
        width: 350,
        height: 130,
        padding: 20,
        borderRadius: 20,
        flexDirection: "row",
        paddingTop: 20,
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