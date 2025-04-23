import Navbar from '@/components/navbar/navbar';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
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
            <Text style={styles.title}>Enviamos um código de verificação para o seu e-mail </Text>

                
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

            {/* Botões */}

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Verificar Código</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.linkReenviar}>Reenviar código</Text>
            </TouchableOpacity>

            <TouchableOpacity>
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
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        width: 370,
        backgroundColor: '#71BE70',
        padding: 10,
        paddingVertical: 12,
        paddingHorizontal:10,
        borderRadius: 30,
        borderWidth: 0,
        zIndex: 100,
        alignItems: "center",

    
    },
    buttonText: {
        fontSize: 25,
        fontWeight: '700',
    },
    linkVoltar: {
        fontSize: 20,
        textAlign: 'center',
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
