import Navbar from '@/components/navbar/navbar';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ResetPassword() {
    const [code, setCode] = useState(["", "", "", ""]);
    const [mensagemVisivel, setMensagemVisivel] = useState(false);

    const handleChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    const handleReenviarCodigo = () => {
        setMensagemVisivel(true);
        setTimeout(() => {
            setMensagemVisivel(false);
        }, 3000); // 3 segundos
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enviamos um código de verificação para o seu e-mail</Text>

            {/* Ícone do envelope */}
            <Icon name="envelope" size={50} color="black" style={styles.icon} />

            {/* Campo de código de verificação */}
            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                    />
                ))}
            </View>

            {/* Botão de verificar */}
            <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/login')}>
                <Text style={styles.buttonText}>Verificar Código</Text>
            </TouchableOpacity>

            {/* Mensagem de código reenviado */}
            {mensagemVisivel && (
                <Text style={styles.successMessage}>Código reenviado com sucesso!</Text>
            )}

            {/* Link para reenviar */}
            <TouchableOpacity onPress={handleReenviarCodigo}>
                <Text style={styles.linkReenviar}>Reenviar código</Text>
            </TouchableOpacity>

            {/* Botão para voltar à página de cadastro */}
            <TouchableOpacity onPress={() => router.push('/cadastro')}>
                <Text style={styles.linkVoltar}>Voltar para página inicial</Text>
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
    title: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
        color: "#485935"
    },
    icon: {
        marginVertical: 15,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginVertical: 30,
    },
    input: {
        width: 50,
        height: 50,
        fontSize: 22,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
    },
    linkReenviar: {
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
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
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    linkVoltar: {
        fontSize: 20,
        textAlign: 'center',
    },
    successMessage: {
        color: 'green',
        fontSize: 16,
        marginTop: 15,
        fontWeight: '500',
    }
});
