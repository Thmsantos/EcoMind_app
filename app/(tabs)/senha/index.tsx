import { router } from 'expo-router';
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Imagem de e-mail (ajuste o caminho conforme a estrutura do seu projeto)
const EmailImage = require('../../../assets/images/emaill.png') 

export default function PasswordRecovery() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Esqueceu sua senha?</Text>

        {/* Imagem de email */}
        <Image source={EmailImage} style={styles.emailImage} />

        <Text style={styles.subtitle}>
          Por favor, insira o endereço de e-mail associado à sua conta.
        </Text>
        <Text style={styles.text3}>
          Enviaremos um código por e-mail para redefinir sua senha.
        </Text>

        {/* Campo de entrada de e-mail */}
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={18} color="#aaa" style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        {/* Botão continuar */}
        <TouchableOpacity style={styles.entrarBtn}
          onPress={() => router.push('/(tabs)/resetarSenha')}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: "700",
    color: "#485935",
    letterSpacing: 1,
    marginBottom: 20,
    marginTop: -100,
  },

  // Estilo da imagem de email
  emailImage: {
    width: 100,
    height: 100,
    marginVertical: 20,
    resizeMode: 'contain',
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    letterSpacing: 1,
  },

  text3: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    letterSpacing: 1,
    marginBottom: 80,
  },

  inputContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: 370,
    paddingHorizontal: 15,
    elevation: 3,
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#f9f9f9',
  },

  inputIcon: {
    marginRight: 11,
  },

  input: {
    flex: 1,
    fontSize: 22,
    color: '#000',
    marginLeft: 8,
    paddingVertical: 0,
    includeFontPadding: true,
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
    alignItems: "center",
  },

  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
