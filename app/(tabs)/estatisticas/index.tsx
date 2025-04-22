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


        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.viewMain}>


            
                <View style={styles.contentEstatisticas}>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.groupText}>
                                <Text style={styles.textResult}><Text style={styles.textBold}>Mês:</Text> Fev, 22</Text>
                                <Text style={styles.textResult}><Text style={styles.textBold}>Consumo:</Text> 300kg cO2</Text>
                                <Text style={styles.textResult}><Text style={styles.textBold}>Balanço:</Text> Você está há {'\n'} 
                                <Text>dois Mêses</Text> diminuindo sua produção de co2</Text>
                                <Image style={styles.emoji} source={require("../../../assets/images/happy.png")} />
                            </View>
                    </ScrollView>
                </View>
            

                <View style={styles.contentEstatisticas}>

                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                                <View style={styles.groupText}>
                                        <Text style={styles.textResult}><Text style={styles.textBold}>Mês:</Text> Fev, 22</Text>
                                        <Text style={styles.textResult}><Text style={styles.textBold}>Consumo:</Text> 300kg cO2</Text>
                                        <Text style={styles.textResult}><Text style={styles.textBold}>Balanço:</Text> Você está há {'\n'} 
                                        <Text>dois Mêses</Text> diminuindo sua produção de co2</Text>
                                        <Image style={styles.emoji} source={require("../../../assets/images/happy.png")} />
                                </View>
                        </ScrollView>
                </View>

                <View style={styles.contentEstatisticas}>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                                <View style={styles.groupText}>
                                    <Text style={styles.textResult}><Text style={styles.textBold}>Mês:</Text> Fev, 22</Text>
                                    <Text style={styles.textResult}><Text style={styles.textBold}>Consumo:</Text> 300kg cO2</Text>
                                    <Text style={styles.textResult}><Text style={styles.textBold}>Balanço:</Text> Você está há {'\n'} 
                                    <Text>dois Mêses</Text> diminuindo sua produção de co2</Text>
                                    <Image style={styles.emoji} source={require("../../../assets/images/happy.png")} />
                                </View>
                    </ScrollView>
                </View>

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
        paddingTop: 30,    
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

    contentEstatisticas:{
        borderWidth: 2,    
        borderColor: '#00000', 
        borderStyle: 'solid',
        margin: "auto",
        width: 350,
        height: 150,
        padding: 20,
        backgroundColor:"#71BE70",
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