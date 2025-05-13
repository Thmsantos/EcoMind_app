import Navbar from '@/components/navbar/navbar';
import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../../../components/header'
 

export default function Resultados(){
    return(
    <View style={styles.container}>
        <Header/>

        <View style={styles.viewMain}>

            <Text style={styles.textTitulo}>Resultados</Text>

            <View style={styles.groupText}>
                <View style={styles.groupTextResultadosUm} >
                    <Text style={styles.textResultado}>Eletricidade</Text>
                    <Text style={styles.textResultadoEmissoes}>Emissões CO²:   0,0003</Text>
                    <Text style={styles.textResultado}>Transporte Individual</Text>
                    <Text style={styles.textResultadoEmissoes}>Emissões CO²:   0,0003</Text>
                </View>

                <View style={styles.groupTextResultadosDois} >
                    <Text style={styles.textResultado}>Gás</Text>
                    <Text style={styles.textResultadoEmissoes}>Emissões CO²:   0,0003</Text>
                    <Text style={styles.textResultado}>Transporte Coletivo</Text>
                    <Text style={styles.textResultadoEmissoes}>Emissões CO²:   0,0003</Text>
                </View>
           </View>

           <Text style={styles.textTotalEmissoesBold} > Total emissões CO² : <Text style={styles.textTotalEmissoes}>  0,0015</Text></Text>

            <Image  source={require("../../../assets/images/iconePlanta.png")} style={styles.logoPlanta}/>

            <View style={styles.textMensagem}>
                <Text>Para compensar suas emissões é preciso restaurar 0,04 m² de floresta. Isso equivale a 1 árvores</Text>
            </View>

        </View>

       <Navbar />
    </View>
    )
}


const styles = StyleSheet.create({
    Text: {
        letterSpacing: 1
    },

    container: {
        flex: 1,
    },

    viewMain: {
        flex: 1,
        alignItems: 'center'
             
    },
    
    textTitulo: {
        fontSize: 22,
        paddingTop: 20,
        fontWeight: "800",
        color: "#485935",
        letterSpacing: 1
    },

    groupText: {
        justifyContent: 'center',
        flexDirection: "row",
        paddingTop: 25,
        gap: 20,
        letterSpacing: 1
    },

    textResultado:{
        fontSize: 16,
        fontWeight: 600,
        color: "#485935",
        letterSpacing: 1
    },

    textTotalEmissoesBold: {
        paddingLeft: 40,
        fontSize: 22,
        fontWeight: 800,
        color: "#485935",
        letterSpacing: 1

    },

    textResultadoEmissoes: {
        paddingBottom: 30,
        letterSpacing: 1
    },

    groupTextResultadosUm: {
        paddingBottom: 10

    },

    groupTextResultadosDois: {

    },

    textTituloesultado: {
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 1
    },

    textTotalEmissoes: {
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: 1

    },

    textMensagem: {
        marginTop: 20,
        alignItems:'center',
        width: 373,
        height: 91,
        backgroundColor: "#71BE70",
        borderRadius: 28,
        padding: 20,
        fontWeight: 600,
        letterSpacing: 1
    },

    logoPlanta:{
        marginTop: 80,
       
        width: 59,
        height: 59 
    },
})