import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cadastro() {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false);

    const handleCadastro = () => {
        if (senha.length < 8 || confirmarSenha.length < 8) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        router.push('/(tabs)/login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastre-se</Text>

            {/* Nome */}
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#888" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#aaa" />
            </View>

            {/* Usuário */}
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#888" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="#aaa" />
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={18} color="#888" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
            </View>

            {/* Senha */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha (8+ caracteres)"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!senhaVisivel}
                    value={senha}
                    onChangeText={setSenha}
                />
                 <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
                    <Icon
                        name={senhaVisivel ? 'eye' : 'eye-slash'}
                        size={20}
                        color="#888"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            {/* Confirmar Senha */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />
                <TouchableOpacity onPress={() => setConfirmarSenhaVisivel(!confirmarSenhaVisivel)}>
                    <Icon
                        name={confirmarSenhaVisivel ? 'eye' : 'eye-slash'}
                        size={20}
                        color="#888"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            {/* Botão */}
            <TouchableOpacity style={styles.entrarBtn} 
            onPress={() => router.push('/(tabs)/codigo')}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

            {/* Link login */}
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Já possui uma conta? </Text>
                <TouchableOpacity onPress={() => router.push('/(tabs)/login')}>
                    <Text style={styles.linkText}>Entre</Text>
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
        justifyContent: 'center',
        padding: 50,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 45,
        fontWeight: '700',
        color: '#485935',
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
        borderWidth: 0,
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
        alignItems: 'center',
        marginTop: 5,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    loginTextContainer: {
        flexDirection: 'row',
        marginTop: 18,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 20,
        textAlign: 'center',
    },
    linkText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 1,
    },
});
