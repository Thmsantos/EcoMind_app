import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const logo = require("../../../assets/images/logo.png");

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [erro, setErro] = useState('');

    const handleLogin = () => {
        // Simulando autenticação
        const emailCorreto = 'claudiasantanasilva@yahoo.com.br';
        const senhaCorreta = 'senha123';

        if (email === emailCorreto && senha === senhaCorreta) {
            setErro('');
            router.push('/(tabs)/apresentaCalculadora');
        } else {
            setErro('Não foi possível autenticar; seu endereço de e-mail e/ou senha podem estar incorretos.');
        }
    };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={logo} style={styles.logo} />

            {/* Texto "Bem vindo!" */}
            <Text style={styles.welcomeText}>Bem vindo!</Text>

            {/* Alerta de erro */}
            {erro !== '' && (
                <View style={styles.errorBox}>
                    <Text style={styles.errorText}>{erro}</Text>
                </View>
            )}

            {/* Campo de email */}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={18} color="#aaa" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* Campo de senha com botão olho */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={22} color="#aaa" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!isPasswordVisible}
                    value={senha}
                    onChangeText={setSenha}
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
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: 1,
        color: 'darkgreen',
        marginBottom: 40,
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
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 14,
    },
    input: {
        flex: 1,
        fontSize: 22,
        color: '#000',
        marginLeft: 8,
        paddingVertical: 0,
        includeFontPadding: true,
    },
    icon: {
        marginRight: 11,
    },
    button: {
        width: 370,
        backgroundColor: '#71BE70',
        padding: 14,
        borderRadius: 30,
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
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    register: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,
        textDecorationLine: 'underline',
    },
    errorBox: {
        width: 370,
        backgroundColor: '#991b1b',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    errorText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
});
