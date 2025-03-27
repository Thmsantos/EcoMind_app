import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

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
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

            {/* Texto de Login */}
            <Text style={styles.loginText}>
                Já possui uma conta? <Text style={styles.linkText}>Entre</Text>
            </Text>

            {/* Navbar Fixa */}
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="calculator" size={24} color="black" />
                    <Text style={styles.navText}>Calculadora</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="home" size={24} color="black" />
                    <Text style={styles.navText}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="user" size={24} color="black" />
                    <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Mantém a tela fixa sem rolagem
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
        backgroundColor: '#f5f5f5',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginVertical: 5,
        width: '100%', // Define a largura proporcional à tela
        height: 60, // Altura fixa para manter o layout
        marginTop: 14, // Pequeno espaçamento da logo
        elevation: 3, // Pequena sombra para destacar
        borderWidth: 2, // Adiciona a borda preta
        borderColor: '#000', // Define a cor da borda como preta

        
    },
    input: {
        flex: 1,
        padding: 15,
        color: '#333',
        fontSize:20,
        
    },
    icon: {
        marginRight: 10,
    },
    button: {
        backgroundColor: '#71BE70',
        padding: 18,
        borderRadius: 25,
        width: '100%', // Botão com largura proporcional à tela
        alignItems: 'center',
        marginVertical: 15,
        marginTop: 45, // Pequeno espaçamento da logo

    },
    buttonText: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        
    },
    loginText: {
        marginTop: 10,
        color: '#00000',
        fontSize:20,
    },
    linkText: {
        color: '#00000',
        fontWeight: 'bold',
        fontSize:20,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#71BE70',
        paddingVertical: 10,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: 'black',
        marginTop: 4,
    },
});
