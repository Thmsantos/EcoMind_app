import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CriarSenha() {
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <View style={styles.container}>
            {/* Título */}
            <Text style={styles.title}>Criar Nova Senha</Text>
            <Text style={styles.required}>* Indica um campo obrigatório</Text>

            {/* Campo de Nova Senha com ícones */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={18} color="#888" style={styles.leftIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nova Senha (8+ caracteres) *"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!mostrarSenha}
                    value={senha}
                    onChangeText={setSenha}
                />
                <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                    <Icon
                        name={mostrarSenha ? 'eye-slash' : 'eye'}
                        size={18}
                        color="#888"
                        style={styles.rightIcon}
                    />
                </TouchableOpacity>
            </View>

            {/* Texto de Regras */}
            <Text style={styles.rulesText}>
            Mínimo de 8 caracteres, com 1 letra maiúscula e 1 caractere especial. Não é permitido o uso de números.
            </Text>

            {/* Botão Salvar */}
            <TouchableOpacity style={styles.entrarBtn}
                    onPress={() => router.push('/(tabs)/login')}>
            
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
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
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 120,
    fontWeight: "700",
    color: "#485935"
    },
    required: {
        marginBottom: 20,
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        width: 370,
        height: 50,
        marginVertical: 8,
    },
    leftIcon: {
        marginRight: 11,
    },
    input: {
     flex: 1,
        fontSize: 20,
        color: '#000',
        borderWidth: 0,
    },
    rightIcon: {
        marginLeft: 10,
    },
    rulesText: {
        marginTop: 5,
        color: '#666',
        width: 370,
        textAlign: 'left',

        fontSize: 18,
    marginVertical: 10,
    },
    entrarBtn: {
        width: 370,
        backgroundColor: '#71BE70',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderWidth: 0,
        alignItems: "center",
        marginTop: 30,


    
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});
