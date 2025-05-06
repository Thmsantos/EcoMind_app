import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cadastro() {
    return (
        <View style={styles.container}>
            {/* Título */}
            <Text style={styles.title}>Cadastre-se</Text>

            {/* Campos de entrada */}
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#888" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#aaa" />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#888" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="#aaa" />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="#888" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#888" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa" secureTextEntry />
            </View>

            {/* Botão de Cadastro */}
            <TouchableOpacity style={styles.entrarBtn}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

            {/* Texto de Login */}
            <Text style={styles.loginText}>
                Já possui uma conta? <Text style={styles.linkText}>Entre</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
        fontFamily: 'roboto',
        marginBottom: 35,
        color: '#333',
        alignSelf: 'flex-start',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // fundo neutro
        borderRadius: 8,
        padding: 10,
        width: 370,
        marginVertical: 8,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        color: '#000',
        fontSize: 18,
    },
    icon: {
        marginLeft: 5,
    },
    entrarBtn: {
        width: 370,
        backgroundColor: '#71BE70',
        padding: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderWidth: 0,
        alignItems: "center",
        marginTop: 30,
        zIndex: 100,
    },
    buttonText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: 20,
        color: '#000',
        fontSize: 18,
    },
    linkText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
