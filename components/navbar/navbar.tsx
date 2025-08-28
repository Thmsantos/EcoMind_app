import { router } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type NavbarProps = {
    userId: string;
};

export default function Navbar({ userId }: NavbarProps) {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity 
                style={styles.navItem}
                onPress={() => router.push('/(tabs)/apresentaCalculadora')}
            >
                <Icon name="calculator" size={24} color="#000000ff" />
                <Text style={styles.navText}>Calculadora</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.navItem}
                onPress={() => router.push('/(tabs)/ranking')}
            >
                <Icon name="trophy" size={24} color="#000000ff" />
                <Text style={styles.navText}>Ranking</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.navItem}
                onPress={() => router.push('/(tabs)/estatisticas')}
            >
                <Icon name="bar-chart" size={24} color="#000000ff" />
                <Text style={styles.navText}>Estatisticas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.navItem}
                onPress={() => router.push(`/(tabs)/perfil?userId=${userId}`)}
            >
                <Icon name="user" size={24} color="#000000ff" />
                <Text style={styles.navText}>Perfil</Text>
            </TouchableOpacity>
        </View>   
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#71BE70', 
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
        color: '#000000ff',
        marginTop: 5,
        letterSpacing: 1
    },
});
