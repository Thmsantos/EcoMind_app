import { router } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { loginSchema } from "./loginSchema";
import axios from "axios";

const logo = require("../../../assets/images/logo-home.png");

export let idUser = "";
export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState<"erro" | "sucesso" | "">("");

  const handleLogin = async () => {
    const body = { usuario, senha };

    const { error: validationError } = loginSchema.validate(body);

    if (validationError) {
      setTipoMensagem("erro");
      setMensagem(validationError.details[0].message);
      limparMensagem();
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:2010/api/user/login", body);

      if(response.data.message === "logado"){
        idUser = response.data.id
      }
      setTipoMensagem("sucesso");
      setMensagem("Login realizado com sucesso!");

      setTimeout(() => {
        router.push(`/(tabs)/calculadora?userId=${response.data.id}`);
      }, 400);
    } catch (error: any) {
      const mensagemErro =
        error.response?.data?.message ||
        "Não foi possível autenticar; seu usuário e/ou senha podem estar incorretos.";

      setTipoMensagem("erro");
      setMensagem(mensagemErro);
      limparMensagem();
    }
  };

  const limparMensagem = () => {
    setTimeout(() => {
      setMensagem("");
      setTipoMensagem("");
    }, 3000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { flex: 1 }]}>
          {mensagem !== "" && (
            <View
              style={[
                styles.mensagemBox,
                tipoMensagem === "erro" ? styles.erro : styles.sucesso,
              ]}
            >
              <Text style={styles.mensagemTexto}>{mensagem}</Text>
            </View>
          )}

          <Image source={logo} style={styles.logo} />
          <Text style={styles.welcomeText}>Bem vindo!</Text>

          <View style={styles.inputContainer}>
            <Icon
              name="envelope"
              size={18}
              color="#aaa"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              placeholderTextColor="#aaa"
              keyboardType="default"
              autoCapitalize="none"
              value={usuario}
              onChangeText={setUsuario}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={22} color="#aaa" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry={!isPasswordVisible}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Icon
                name={isPasswordVisible ? "eye" : "eye-slash"}
                size={20}
                color="#aaa"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/(tabs)/senha")}>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/cadastro")}>
            <Text style={styles.register}>Não tem conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 40,
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 1,
    color: "#485935",
    marginBottom: 40,
  },
  mensagemBox: {
    position: "absolute",
    top: Platform.OS === "ios" ? 60 : 30,
    left: 20,
    right: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    elevation: 6,
  },
  erro: {
    backgroundColor: "#8B0000",
  },
  sucesso: {
    backgroundColor: "#71BE70",
  },
  mensagemTexto: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  inputContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    width: 370,
    paddingHorizontal: 15,
    elevation: 3,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
  },
  input: {
    flex: 1,
    fontSize: 22,
    color: "#000",
    marginLeft: 8,
    paddingVertical: 0,
    includeFontPadding: true,
  },
  icon: {
    marginRight: 11,
  },
  button: {
    width: 370,
    backgroundColor: "#71BE70",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  forgotPassword: {
    color: "#71BE70",
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  register: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    textDecorationLine: "underline",
  },
});
