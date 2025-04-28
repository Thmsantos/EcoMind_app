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
        <TouchableOpacity style={styles.entrarBtn}>
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
    color: '#000',
    textAlign: 'center',
    marginBottom: 120,
    fontWeight: '600',
    fontFamily: 'Roboto',
    letterSpacing: 1, // Pequeno espaçamento entre letras para um design mais limpo
  },

  subtitle: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },

  text3: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 370, // Ajustado para o mesmo tamanho do botão
    backgroundColor: '#f5f5f5',
    borderRadius: 18, // Bordas mais arredondadas
    marginVertical: 19, // Mais espaçamento entre os campos
    paddingHorizontal: 15,
    height: 60, // Altura maior dos campos
    elevation: 3, // Pequena sombra para destacar
    borderWidth: 2, // Adiciona a borda preta
    borderColor: '#000', // Define a cor da borda como preta
  },

  inputIcon: {
    marginRight: 15,
  },

  input: {
    flex: 1,
    fontSize: 22,
    color: '#000',
    padding: 15,
  },

  entrarBtn: {
    width: 370,
    backgroundColor: '#71BE70',
    padding: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 0,
    zIndex: 100,
    alignItems: "center",
    marginTop: 35, // Pequeno espaçamento para o botão
  },

  buttonText: {
    color: '#FFF', // Cor do texto do botão
    fontSize: 22, // Ajuste no tamanho do texto
    fontWeight: 'bold', // Deixando o texto mais destacado
  },
});
