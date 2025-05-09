import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const logo = require("../../../assets/images/logo.png");

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={logo} style={styles.logo} />

            {/* Texto "Bem vindo!" */}
            <Text style={styles.welcomeText}>Bem vindo!</Text>

            {/* Campo de email */}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={18} color="#aaa" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
            </View>

            {/* Campo de senha com botão olho */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={22} color="#aaa" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Icon
                        name={isPasswordVisible ? 'eye' : 'eye-slash'}
                        size={20}
                        color="#aaa"
                    />
                </TouchableOpacity>
            </View>

            {/* Botão de Login */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/(tabs)/apresentaCalculadora')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Links */}
            <TouchableOpacity onPress={() => router.push('/(tabs)/senha')}>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/cadastro')}>
                <Text style={styles.register}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>
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
        fontSize: 38,
        textAlign: 'center',
        marginBottom: 80,
        fontWeight: "700",
        color: "#485935",
        letterSpacing: 1,
    },
    inputContainer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        width: 370,
        paddingHorizontal: 15,
        elevation: 3,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        marginBottom: 30,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 14,
    },
    input: {
        flex: 1,
        fontSize: 22,
        color: '#000',
    },
    icon: {
        marginRight: 11,
    },
    button: {
        width: 370,
        backgroundColor: '#71BE70',
        padding: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderWidth: 0,
        zIndex: 100,
        alignItems: "center",
        marginTop: 5,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    forgotPassword: {
        color: '#71BE70',
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    register: {
        marginTop: 18,
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
    },
});
