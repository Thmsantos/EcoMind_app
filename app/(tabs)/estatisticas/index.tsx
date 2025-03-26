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

          
            <View style={styles.contentEstatisticas}>

                    <View style={styles.groupText}>
                        <Text><Text>Mes:</Text> Fev, 22</Text>
                        <Text><Text>Consumo:</Text> 300kg cO2</Text>
                        <Text><Text>Balanço:</Text> Você está há {'\n'} 
                        dois meses diminuindo sua produção de co2</Text>
                    </View>
         
            </View>

        </View>
       
        <View style={styles.navbar}>
                <TouchableOpacity style={styles.navItem}>
                  <FontAwesome name="calculator" size={24} color="black" />
                  <Text style={styles.navText}>Calculadora</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                  <FontAwesome name="home" size={24} color="black" />
                  <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                  <FontAwesome name="user" size={24} color="black" />
                  <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>
        </View>    
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
        paddingTop: 50      
    },

    estatisticas: {
        flexDirection: "row"
    },

    groupText: {
              

    },

    contentEstatisticas:{
        width: 350,
        height: 150,
        padding: 20,
        backgroundColor:"#71BE70",
        borderRadius: 20,
        gap: 8,
        flexDirection: "row"
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