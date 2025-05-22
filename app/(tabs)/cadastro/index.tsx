import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { cadastroSchema } from './cadastroSchema';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState<'erro' | 'sucesso' | ''>('');

    const handleCadastro = async () => {
        const body = {
            usuario: usuario.trim(),
            nome: nome.trim(),
            email: email.trim(),
            senha: senha.trim(),
            status: false,
            calculos: []
        };

        const { error: validationError } = cadastroSchema.validate(body);

        if (validationError) {
            setTipoMensagem('erro');
            setMensagem(validationError.details[0].message);
            limparMensagem();
            return;
        }

        if (senha !== confirmarSenha) {
            setTipoMensagem('erro');
            setMensagem('As senhas não coincidem.');
            limparMensagem();
            return;
        }

        try {
            await axios.post("http://127.0.0.1:2010/api/user/create", body);

            setTipoMensagem('sucesso');
            setMensagem('Cadastro realizado com sucesso!');
            limparMensagem();

            setTimeout(() => {
                router.push('/(tabs)/login');
            }, 300);
        } catch (error: any) {
            let mensagemErro = 'Erro ao cadastrar. Tente novamente.';

            if (error.response && error.response.data && error.response.data.message) {
                mensagemErro = error.response.data.message;
            }

            setTipoMensagem('erro');
            setMensagem(mensagemErro);
            limparMensagem();
        }
    };

    const limparMensagem = () => {
        setTimeout(() => {
            setMensagem('');
            setTipoMensagem('');
        }, 3000);
    };

    return (
        <View style={styles.container}>
            {mensagem !== '' && (
                <View
                    style={[
                        styles.mensagemBox,
                        tipoMensagem === 'erro' ? styles.erro : styles.sucesso,
                    ]}
                >
                    <Text style={styles.mensagemTexto}>{mensagem}</Text>
                </View>
            )}

            <Text style={styles.title}>Cadastre-se</Text>

            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#aaa"
                    value={nome}
                    onChangeText={setNome}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    placeholderTextColor="#aaa"
                    value={usuario}
                    onChangeText={setUsuario}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="envelope" size={18} color="#888" style={styles.icon} />
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

            <View style={[styles.inputContainer, styles.senhaContainer]}>

                <Icon name="lock" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
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

            <Text style={styles.requisitos}>
                Mínimo 8 caracteres, conter letras maiúsculas e minúsculas, número e caractere especial.
            </Text>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!confirmarSenhaVisivel}
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

            <TouchableOpacity style={styles.entrarBtn} onPress={handleCadastro}>

                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

            <View style={styles.loginTextContainer}>
                <TouchableOpacity onPress={() => router.push('/(tabs)/login')}>
                    <Text style={styles.linkText}>Já possui uma conta? Entre</Text>
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
        flexGrow: 1,
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: 1,
        color: 'darkgreen',
        marginBottom: 24,
    },
    inputContainer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        width: 370,
        paddingHorizontal: 12,
        elevation: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 14,
        marginBottom: 16,
    },
    senhaContainer: {
        marginBottom: 10,
    },
    input: {
        flex: 1,
        fontSize: 22,
        color: '#000',
        borderWidth: 0,
        marginLeft: 8,
        paddingVertical: 0,
        includeFontPadding: true,
    },
    icon: {
        marginRight: 11,
    },
    requisitos: {
        fontSize: 15,
        marginBottom: 20,
        textAlign: 'center',
        width: 370, // mesma largura do input

    },
    entrarBtn: {
        width: 370,
        backgroundColor: '#71BE70',
        paddingVertical: 14,
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
        textDecorationLine: 'underline',
    },
    mensagemBox: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        elevation: 6,
    },
    erro: {
        backgroundColor: '#F8D7DA',
    },
    sucesso: {
        backgroundColor: '#D4EDDA',
    },
    mensagemTexto: {
        color: '#333',
        fontSize: 15,
        fontWeight: '500',
    },
});
