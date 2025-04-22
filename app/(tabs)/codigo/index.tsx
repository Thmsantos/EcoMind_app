import Navbar from '@/components/navbar/navbar';
import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ResetPassword() {
    return (
        <View style={styles.container}>
          
            
            {/* Mensagem principal */}
            <Text style={styles.title}>E-mail de redefinição de senha enviado</Text>
            <Text style={styles.subtitle}>Verifique seu endereço de email para concluir o cadastro.</Text>
            
            {/* Ícone do envelope */}
            <Icon name="envelope" size={6} color="black" style={styles.icon} />
            
            {/* Texto informativo */}
            <Text style={styles.info}>Enviamos um email de verificação para o email @gmail.com</Text>
            
            {/* Campo de entrada */}
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Digite o código.." placeholderTextColor="#aaa" />
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

            <Navbar />
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
        marginTop: -40, // Pequeno espaçamento da logo
        alignSelf: 'flex-start',
        marginVertical: 1, // Mais espaçamento
        fontWeight: '600',
        fontFamily: 'Roboto',
        letterSpacing: 1, // Pequeno espaçamento entre letras para um design mais limpo
    },
    subtitle: {

        color: '#00000',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 2,
        marginTop: 40,
    },
    icon: {
        marginVertical: 15,
    },
    info: {
        color: '#00000',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 2,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 18, // Bordas mais arredondadas
        marginVertical: 35,// Mais espaçamento entre os campos
        paddingHorizontal: 15,
        height: 60, // Altura maior dos campos
        elevation: 3, // Pequena sombra para destacar
        borderWidth: 2, // Adiciona a borda preta
        borderColor: '#000', // Define a cor da borda como preta
        marginBottom: 3,
  
    },
    input: {
        flex: 1,
        fontSize: 22,
        color: '#00000',
        padding: 15,
        
    },
    linkReenviar: {
        color: '#000',
    fontSize: 20,
    marginBottom: 25,
    
    marginLeft: -180, // Pequeno ajuste para não ficar grudado na borda esquerda
},
    linkVoltar: {
        color: '#000',
        marginVertical: 30,// Mais espaçamento entre os campo
        fontSize: 20,
         // Mantém o link "Voltar para página inicial" na posição desejada
        textAlign: 'center', // Garante que ele permaneça centralizado
    },
    button: {
        backgroundColor: '#71BE70',
        padding: 18,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
        marginTop: 4, // Mantém o botão no mesmo lugar
        marginBottom: 0, // Remove qualquer espaço extra abaixo do botão
    },
    buttonText: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#71BE70',
        paddingVertical: 10,
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
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
