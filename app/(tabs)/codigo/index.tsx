import Navbar from '@/components/navbar/navbar';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '@/components/colors/colors';

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
        }, 3000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enviamos um código de verificação para o seu e-mail</Text>

            <Icon name="envelope" size={50} color={colors.secondary} style={styles.icon} />

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

            <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/login')}>
                <Text style={styles.buttonText}>Verificar Código</Text>
            </TouchableOpacity>

            {mensagemVisivel && (
                <Text style={styles.successMessage}>Código reenviado com sucesso!</Text>
            )}

            <TouchableOpacity onPress={handleReenviarCodigo}>
                <Text style={styles.linkReenviar}>Reenviar código</Text>
            </TouchableOpacity>

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
        backgroundColor: colors.background,
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
        color: colors.secondary,
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
        ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {}),
        width: 50,
        height: 50,
        fontSize: 22,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: colors.tertiary,
        borderRadius: 10,
        color: colors.textPrimary,
    },
    linkReenviar: {
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
        color: colors.primary,
    },
    button: {
        width: 370,
        backgroundColor: colors.primary,
        paddingVertical: 12,
        borderRadius: 30,
        borderWidth: 0,
        zIndex: 100,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.textSecondary,
    },
    linkVoltar: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.textPrimary,
    },
    successMessage: {
        color: colors.success,
        fontSize: 16,
        marginTop: 15,
        fontWeight: '500',
    }
});
