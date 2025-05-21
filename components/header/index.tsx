import React from "react";
import { Text, View, StyleSheet, Image} from 'react-native';


export default function Header(){
    return(
        <Text style={styles.viewLogo}>
            <View style={styles.viewImagemLogo}>
                <Image source={require("../../assets/images/logo-home.png")} style={styles.imageLogo} />
            </View>
            <Text style={styles.nomeAppLogo}>EcoMind</Text>
        </Text>
    );
}

const styles = StyleSheet.create({

    viewLogo: {
        margin: "auto",
        marginTop: 8,
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
        fontWeight: "700",
        marginBottom: 15,
        letterSpacing: 1
    },
})