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
        <Text style={styles.text3}>Enviaremos um código por e-mail para redefinir sua senha.
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de navegação inferior */}
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
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  header: {
    backgroundColor: '#71BE70',
    height: 66,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 35,
    color: '#00000',
    textAlign: 'center',
    marginBottom: 120,
    fontWeight: '600',
    fontFamily: 'Roboto',
    letterSpacing: 1, // Pequeno espaçamento entre letras para um design mais limpo
        
  },

  subtitle: {
    color: '#00000',
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
        width: '100%',
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
    color: '#00000',
    padding: 15,
    
  },

  button: {
    backgroundColor: '#71BE70',
    padding: 18, // Aumentei o padding
    borderRadius: 25, // Deixei arredondado
    width: '100%',
    alignItems: 'center',
     marginVertical: 15, // Mais espaçamento
    elevation: 3, // Pequena sombra
    marginTop: 35, // Pequeno espaçamento da logo
  },

  buttonText: {
    color: '#00000',
    fontSize: 28, // Texto maior no botão
    fontWeight: 'bold',
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F8F8F8', // Tom próximo ao branco, mas com leve destaque
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,          // Adiciona uma borda sutil para destacar a navbar
    borderTopColor: '#DADADA',  // Cor levemente mais escura para contraste
},
navItem: {
    alignItems: 'center',
},
navText: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
},
});
