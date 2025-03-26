import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />
                    <Text style={styles.headerTitle}>Ranking</Text>
                </View>
            </View>  

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                
                {/* Texto "Bem vindo!" na posição correta */}
                <Text style={styles.welcomeText}>Redução ao ultimo mes:  10% do consumo = pontos</Text>

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
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

              
            </ScrollView>

            {/* Navbar */}
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="calculator" size={24} color="black" />
                    <Text style={styles.navText}>Calculadora</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="home" size={24} color="black" />
                    <Text style={styles.navText}>Home</Text>
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#71BE70',
        width: '100%',
        height: 100,  // Aumentei um pouco para centralizar melhor
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'relative',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
    },
    logo: {
        width: 65,  
        height: 65,
        marginRight: -15,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 2,
    },
    welcomeText: {
        fontSize: 19,
        color: '#00000',
        marginVertical: 90,
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
    });
    