import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ResetPassword() {
    const [code, setCode] = useState(["", "", "", ""]);

    const handleChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>E-mail de redefinição de senha enviado</Text>
            <Text style={styles.subtitle}>Verifique seu endereço de email para concluir o cadastro.</Text>

            {/* Ícone do envelope */}
            <Icon name="envelope" size={50} color="black" style={styles.icon} />

            {/* Texto informativo */}
            <Text style={styles.info}>Enviamos um email de verificação para o email @gmail.com</Text>

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

            {/* Botões */}
            <TouchableOpacity>
                <Text style={styles.linkReenviar}>Reenviar código</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Verificar Código</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.linkVoltar}>Voltar para página inicial</Text>
            </TouchableOpacity>

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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    icon: {
        marginVertical: 15,
    },
    info: {
        fontSize: 20,
        textAlign: 'center',
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginVertical: 20,
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
        fontSize: 20,
        marginBottom: 25,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#71BE70',
        paddingVertical: 20,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    linkVoltar: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
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
        fontSize: 14,
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
    },
});
