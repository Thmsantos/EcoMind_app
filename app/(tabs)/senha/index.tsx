import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EmailImage = require('../../../assets/images/emaill.png');

export default function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const [emailErrorVisible, setEmailErrorVisible] = useState(false);

  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handlePress = () => {
    if (!validarEmail(email)) {
      setEmailErrorVisible(true);
      setTimeout(() => setEmailErrorVisible(false), 3000);
      return;
    }

    router.push('/(tabs)/resetarSenha');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <View style={{ flex: 1 }}>
          {/* Alerta fixo no topo da tela */}
          {emailErrorVisible && (
            <View style={styles.alertaFixed}>
              <Text style={styles.textoAlerta}>Email deve ser válido</Text>
            </View>
          )}

          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>
              <Text style={styles.title}>Esqueceu sua senha?</Text>

              <Image source={EmailImage} style={styles.emailImage} />

              <Text style={styles.subtitle}>
                Por favor, insira o endereço de e-mail associado à sua conta.
              </Text>

              <Text style={styles.text3}>
                Enviaremos um código por e-mail para redefinir sua senha.
              </Text>

              <View style={styles.inputContainer}>
                <Icon
                  name="envelope"
                  size={18}
                  color="#aaa"
                  style={styles.inputIcon}
                />
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <TouchableOpacity style={styles.entrarBtn} onPress={handlePress}>
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    color: '#485935',
    letterSpacing: 1,
    marginBottom: 20,
  },
  alertaFixed: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 30,
    left: 20,
    right: 20,
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 10,
    zIndex: 9999,
    elevation: 10,
    alignItems: 'center',
  },
  textoAlerta: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
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
    marginBottom: 40,
  },
  inputContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: 370,
    paddingHorizontal: 15,
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
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 0,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
