import { router } from 'expo-router';
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PasswordRecovery() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Esqueceu sua senha?</Text>
        <Text style={styles.subtitle}>
          Por favor, insira o endereço de e-mail associado à sua conta.
        </Text>
        <Text style={styles.text3}>Enviaremos um código por e-mail para redefinir sua senha.</Text>

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
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 80,
    fontWeight: "700",
    color: "#485935",
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    letterSpacing: 1,
  },

  text3: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    letterSpacing: 1,

        
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 370, // Ajustado para o mesmo tamanho do botão
    marginVertical: 60, // Mais espaçamento entre os campos
    paddingHorizontal: 15,
    elevation: 3, // Pequena sombra para destacar
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 35,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    fontSize: 22,
    
  },

  inputIcon: {
    marginRight: 11,
  },

  input: {
    flex: 1,
    fontSize: 22,
    color: '#000',
    
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
    fontSize: 22, // Ajuste no tamanho do texto
    fontWeight: 'bold', // Deixando o texto mais destacado
    letterSpacing: 1,
    



  },
});
