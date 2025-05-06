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

            {/* Texto "Bem vindo!" */}
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
        width: 120,
        height: 120,
        marginTop: -90,
        alignSelf: 'center',
    },
    welcomeText: {
        fontSize: 40,
        marginTop: 22,
        textAlign: 'center',
        alignSelf: 'flex-start',
        marginVertical: 50,
        fontWeight: '600',
        fontFamily: 'Roboto',
        letterSpacing: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 18,
        marginVertical: 19,
        paddingHorizontal: 15,
        height: 60,
        elevation: 3,
        borderWidth: 2,
        borderColor: '#000',
    },
    input: {
        flex: 1,
        fontSize: 22,
        padding: 15,
        color: '#333',
    },
    icon: {
        marginRight: 15,
    },
    button: {
        width: 370,
        backgroundColor: '#71BE70',
        padding: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderWidth: 0,
        zIndex: 100,
        alignItems: "center",
        marginTop: 35,
    },
    buttonText: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
    },
    forgotPassword: {
        color: '#71BE70',
        fontSize: 25,
        marginTop: 20,
    },
    register: {
        color: '#333',
        marginTop: 20,
        fontSize: 25,
    },
});
