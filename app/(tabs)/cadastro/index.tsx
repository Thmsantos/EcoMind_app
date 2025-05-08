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
        width: 370, // Ajustado para o mesmo tamanho do botão
        paddingHorizontal: 15,
        elevation: 3, // Pequena sombra para destacar
        backgroundColor: '#fff',
        justifyContent: 'center',
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
    borderWidth: 0, // Remove qualquer borda 
    },
    icon: {
        marginRight: 11,
    },
    entrarBtn: {
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
    loginText: {
        marginTop: 18,
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
    },
    linkText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
