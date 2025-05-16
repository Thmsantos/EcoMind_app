import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CriarSenha() {
    const [codigo, setCodigo] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
    const [codigoEnviado, setCodigoEnviado] = useState(false);

    const validarSenha = (senha: string) => {
        const temLetraMaiuscula = /[A-Z]/.test(senha);
        const temLetraMinuscula = /[a-z]/.test(senha);
        const temNumero = /\d/.test(senha);
        const temCaractereEspecial = /[^A-Za-z0-9]/.test(senha);
        return senha.length >= 8 && temLetraMaiuscula && temLetraMinuscula && temNumero && temCaractereEspecial;
    };

    const handleSalvar = () => {
        if (!codigo || !senha || !confirmarSenha) {
            Alert.alert('Erro', 'Preencha todos os campos.');
            return;
        }

        if (!validarSenha(senha)) {
            Alert.alert(
                'Erro na Senha',
                'A senha deve ter no mínimo 8 caracteres, conter letras maiúsculas e minúsculas, número e caractere especial.'
            );
            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        Alert.alert('Sucesso', 'Senha redefinida com sucesso!');
        router.push('/(tabs)/login');
    };

    const handleReenviarCodigo = () => {
        setCodigoEnviado(true);
        setTimeout(() => setCodigoEnviado(false), 3000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Nova Senha</Text>

            {/* Código de Verificação */}
            <View style={styles.codeInputContainer}>
                <Icon name="key" size={20} color="#888" style={styles.leftIcon} />
                <TextInput
                    style={styles.codeInput}
                    placeholder="Código de verificação"
                    placeholderTextColor="#aaa"
                    value={codigo}
                    onChangeText={setCodigo}
                    keyboardType="number-pad"
                    maxLength={6}
                />
            </View>

            <Text style={styles.infoText}>Insira o código enviado para o seu e-mail.</Text>

            <TouchableOpacity onPress={handleReenviarCodigo}>
                <Text style={styles.resendText}>Reenviar código</Text>
            </TouchableOpacity>

            {codigoEnviado && (
                <Text style={styles.messageText}>Código reenviado com sucesso!</Text>
            )}

            {/* Campo de Nova Senha */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#888" style={styles.leftIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
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
                    />
                </TouchableOpacity>
            </View>

            {/* Campo de Confirmar Senha */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#888" style={styles.leftIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!mostrarConfirmarSenha}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />
                <TouchableOpacity onPress={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
                    <Icon
                        name={mostrarConfirmarSenha ? 'eye-slash' : 'eye'}
                        size={20}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.rulesText}>
                Mínimo de 8 caracteres, com letras maiúsculas, minúsculas, números e caractere especial.
            </Text>

            <TouchableOpacity
                style={styles.entrarBtn}
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
        padding: 40,
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 60,
        fontWeight: "700",
        color: "#485935",
        letterSpacing: 1,
    },
    codeInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderColor: '#A3C9A8',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
    },
    codeInput: {
        flex: 1,
        fontSize: 18,
        color: '#333',
        borderWidth: 0,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 370,
        paddingHorizontal: 15,
        elevation: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 14,
        fontSize: 22,
    },
    input: {
        flex: 1,
        fontSize: 22,
        color: '#000',
        borderWidth: 0,
    },
    leftIcon: {
        marginRight: 11,
    },
    infoText: {
        fontSize: 14,
        marginBottom: 8,
        textAlign: 'center',
    },
    resendText: {
        textDecorationLine: 'underline',
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    rulesText: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center',

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
    messageText: {
        color: 'green',
        fontSize: 16,
        marginTop: 2,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 20,
    },
});
