import { router } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Navbar() {
    return (
    
        <View style={styles.navbar}>
            <TouchableOpacity 
                style={styles.navItem}
                onPress={() => router.push('/(tabs)/apresentaCalculadora')}
                >
                        <Icon name="calculator" size={24} color="black" />
                        <Text style={styles.navText}>Calculadora</Text>
                      </TouchableOpacity>
            
                      <TouchableOpacity 
                        style={styles.navItem}
                        onPress={() => router.push('/(tabs)/home')}
                      >
                        <Icon name="home" size={24} color="black" />
                        <Text style={styles.navText}>Home</Text>
                      </TouchableOpacity>
            
                      <TouchableOpacity 
                        style={styles.navItem}
                        onPress={() => router.push('/(tabs)/perfil')}
                      >
                        <Icon name="user" size={24} color="black" />
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
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 14,
        color: 'black',
        marginTop: 5,
    },
}) 