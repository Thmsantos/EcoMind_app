import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CriarSenha() {
  const [codigo, setCodigo] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [erroSenha, setErroSenha] = useState('');
  const [sucessoSenha, setSucessoSenha] = useState('');

  const validarSenha = (senha: string) => {
    const temLetraMaiuscula = /[A-Z]/.test(senha);
    const temLetraMinuscula = /[a-z]/.test(senha);
    const temNumero = /\d/.test(senha);
    const temCaractereEspecial = /[^A-Za-z0-9]/.test(senha);
    return senha.length >= 8 && temLetraMaiuscula && temLetraMinuscula && temNumero && temCaractereEspecial;
  };

  const handleSalvar = () => {
    if (!codigo || !senha || !confirmarSenha) {
      setErroSenha('Preencha todos os campos.');
      setTimeout(() => setErroSenha(''), 3000);
      return;
    }

    if (!validarSenha(senha)) {
      setErroSenha('A senha deve ter no mínimo 8 caracteres, conter letras maiúsculas e minúsculas, número e caractere especial.');
      setTimeout(() => setErroSenha(''), 3000);
      return;
    }

    if (senha !== confirmarSenha) {
      setErroSenha('As senhas não coincidem.');
      setTimeout(() => setErroSenha(''), 3000);
      return;
    }

    setErroSenha('');
    setSucessoSenha('Senha redefinida com sucesso!');
    setTimeout(() => setSucessoSenha(''), 3000);
    setTimeout(() => router.push('/(tabs)/login'), 3000);
  };

  const handleReenviarCodigo = () => {
    setCodigoEnviado(true);
    setTimeout(() => setCodigoEnviado(false), 3000);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        {/* ALERTAS FIXOS NO TOPO */}
        {erroSenha !== '' && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{erroSenha}</Text>
          </View>
        )}
        {sucessoSenha !== '' && (
          <View style={styles.successBox}>
            <Text style={styles.successText}>{sucessoSenha}</Text>
          </View>
        )}

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Criar nova senha</Text>

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

            <View style={styles.inputContainer}>
              <Icon name="lock" size={20} color="#888" style={styles.leftIcon} />
              <TextInput
                style={styles.input}
                placeholder="Nova Senha"
                placeholderTextColor="#aaa"
                secureTextEntry={!mostrarSenha}
                value={senha}
                onChangeText={setSenha}
              />
              <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                <Icon name={mostrarSenha ? 'eye' : 'eye-slash'} size={20} color="#888" />
              </TouchableOpacity>
            </View>

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
                <Icon name={mostrarConfirmarSenha ? 'eye' : 'eye-slash'} size={20} color="#888" />
              </TouchableOpacity>
            </View>

            <Text style={styles.rulesText}>
              Mínimo de 8 caracteres, com letras maiúsculas, minúsculas, números e caractere especial.
            </Text>

            <TouchableOpacity style={styles.entrarBtn} onPress={handleSalvar}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingVertical: 40,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: '700',
    color: '#485935',
    letterSpacing: 1,
    marginTop: 20, // ⬅️ aumentamos para descer o título
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
    elevation: 3,
    justifyContent: 'space-between',
    height: 70,
  },
  codeInput: {
    flex: 1,
    fontSize: 22,
    color: '#333',
    borderWidth: 0,
  },
  inputContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: 370,
    paddingHorizontal: 15,
    elevation: 3,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
  },
  input: {
    flex: 1,
    fontSize: 22,
    color: '#000',
    marginLeft: 8,
    paddingVertical: 0,
    includeFontPadding: true,
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
    width: 370,
  },
  entrarBtn: {
    width: 370,
    backgroundColor: '#71BE70',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 0,
    alignItems: 'center',
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
  errorBox: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 30,
    left: 20,
    right: 20,
    backgroundColor: '#8B0000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    zIndex: 9999,
    elevation: 10,
  },
  errorText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  successBox: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 30,
    left: 20,
    right: 20,
    backgroundColor: '#71BE70',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    zIndex: 9999,
    elevation: 10,
  },
  successText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
});
