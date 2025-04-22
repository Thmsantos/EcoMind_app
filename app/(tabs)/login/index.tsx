import { router } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const logo = require("../../../assets/images/logo.png");

export default function Login() {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={logo} style={styles.logo} />

            {/* Texto "Bem vindo!" na posição correta */}
            <Text style={styles.welcomeText}>Bem vindo!</Text>

            {/* Campos de entrada */}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={24} color="#888" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#888" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa" secureTextEntry />
            </View>

            {/* Botão de Login */}
            <TouchableOpacity style={styles.button}
            onPress={() => router.push('/(tabs)/home')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Links */}
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            <Text style={styles.register}>Não tem conta? Cadastre-se</Text>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    logo: {
        width: 120, // Aumentei um pouco a logo
        height: 120,
        marginTop: -90, // Ajuste para subir a logo
        alignSelf: 'center',
    },
    welcomeText: {
        fontSize: 40,
        marginTop: 22, // Pequeno espaçamento da logo
        textAlign: 'center',
        alignSelf: 'flex-start',
        marginVertical: 50, // Mais espaçamento
        fontWeight: '600',
        fontFamily: 'Roboto',
        letterSpacing: 1, // Pequeno espaçamento entre letras para um design mais limpo
        
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 18, // Bordas mais arredondadas
        marginVertical: 19, // Mais espaçamento entre os campos
        paddingHorizontal: 15,
        height: 60, // Altura maior dos campos
        elevation: 3, // Pequena sombra para destacar
        borderWidth: 2, // Adiciona a borda preta
        borderColor: '#000', // Define a cor da borda como preta
    },
    input: {
        flex: 1,
        fontSize: 22, // Texto maior nos campos
        padding: 15,
        color: '#333',
    },
    icon: {
        marginRight: 15,

    },
    button: {
        backgroundColor: '#71BE70',
        padding: 18, // Aumentei o padding
        borderRadius: 25, // Deixei arredondado
        width: '100%',
        alignItems: 'center',
        marginVertical: 15, // Mais espaçamento
        elevation: 3, // Pequena sombra
        marginTop: 35, // Pequeno espaçamento da logo
    },
    buttonText: {
        color: '#00000',
        fontSize: 28, // Texto maior no botão
        fontWeight: 'bold',
        
    },
    forgotPassword: {
        color: '#71BE70',
        fontSize: 25,
        

        
    },
    register: {
        color: '#333',
        marginTop: 20, // Aumentei o espaçamento entre "Esqueceu a senha?" e "Cadastre-se"
        fontSize: 25,
    },
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
      },
    
      navItem: {
        alignItems: 'center',
      },
    
      navText: {
        fontSize: 14,
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
      },
    });
    