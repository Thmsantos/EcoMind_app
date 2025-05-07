import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CriarSenha() {
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <View style={styles.container}>
            {/* Título */}
            <Text style={styles.title}>Criar senha</Text>
            <Text style={styles.required}>* Indica um campo obrigatório</Text>

            {/* Campo de Nova Senha */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nova senha *"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!mostrarSenha}
                    value={senha}
                    onChangeText={setSenha}
                />
                <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                    <Icon
                        name={mostrarSenha ? 'eye-slash' : 'eye'}
                        size={20}
                        color="#888"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            {/* Texto de Regras */}
            <Text style={styles.rulesText}>
                Pelo menos 10 caracteres, com no máximo 4 caracteres repetidos em sequência.
            </Text>

            {/* Botão Salvar */}
            <TouchableOpacity style={styles.entrarBtn}>
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
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center', // CENTRALIZAR
        marginBottom: 5,
    },
    required: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center', // CENTRALIZAR
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 10,
        width: 370,
        marginVertical: 8,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
    },
    icon: {
        marginLeft: 10,
    },
    rulesText: {
        marginTop: 5,
        color: '#666',
        fontSize: 14,
        width: 370,
        textAlign: 'left',
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
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
