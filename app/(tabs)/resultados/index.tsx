import Navbar from '@/components/navbar/navbar';
import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 

export default function Resultados(){
    return(
    <View style={styles.container}>
        <Text style={styles.viewLogo}>
            <View style={styles.viewImagemLogo}>
                <Image source={require("../../../assets/images/logo.png")} style={styles.imageLogo} />
            </View>
            <Text style={styles.nomeAppLogo}>EcoMind</Text >
        </Text>

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
             
    },
    
    textTitulo: {
        fontSize: 20,
        paddingLeft: 40,
        paddingTop: 20,
        fontWeight: "700",
        color: "#485935"
    },

    groupText: {
        paddingLeft: 40,
        flexDirection: "row",
        paddingTop: 25,
        gap: 45
    },

    textResultado:{
        fontSize: 16,
        fontWeight: 600,
        color: "#485935"
    },

    textTotalEmissoesBold: {
        paddingLeft: 40,
        fontSize: 20,
        fontWeight: 800,
        color: "#485935"

    },

    textResultadoEmissoes: {
        paddingBottom: 35
    },

    groupTextResultadosUm: {
        paddingBottom: 37

    },

    groupTextResultadosDois: {

    },

    textTituloesultado: {
        fontSize: 20,
        fontWeight: 700
    },

    textTotalEmissoes: {
        fontSize: 20,
        fontWeight: 500

    },

    textMensagem: {
        marginTop: 20,
        marginLeft: 22,
        width: 373,
        height: 91,
        backgroundColor: "#71BE70",
        borderRadius: 28,
        padding: 20,
        fontWeight: 600
    },

    logoPlanta:{
        marginTop: 80,
        marginLeft: 170,
        width: 59,
        height: 59 
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
    },



})