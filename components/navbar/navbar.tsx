import { router } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { idUser } from "@/app/(tabs)/login";

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity 
                style={styles.navItem}
                onPress={() => router.push('/(tabs)/apresentaCalculadora')}
            >
                <Icon name="calculator" size={24} color="#808080" />
                <Text style={styles.navText}>Calculadora</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.navItem}
                onPress={() => router.push('/(tabs)/ranking')}
            >
                <Icon name="trophy" size={24} color="#808080" />
                <Text style={styles.navText}>Ranking</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.navItem}
                onPress={() => router.push('/(tabs)/estatisticas')}
            >
                <Icon name="bar-chart" size={24} color="#808080" />
                <Text style={styles.navText}>Estatisticas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.navItem}
                onPress={() => router.push(`/(tabs)/perfil?userId=${idUser}`)}
            >
                <Icon name="user" size={24} color="#808080" />
                <Text style={styles.navText}>Perfil</Text>
            </TouchableOpacity>
        </View>   
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F8F8F8', 
        paddingVertical: 10,
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopWidth: 1,          
        borderTopColor: '#DADADA', 
        alignItems: 'center', 
    },
    navItem: {
        justifyContent: 'center', 
        alignItems: 'center',     
    },
    navText: {
        fontFamily: 'system-ui',
        fontSize: 14,
        color: '#808080',
        marginTop: 5,
        letterSpacing: 1
    },
});
