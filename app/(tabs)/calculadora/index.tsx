import { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Keyboard,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { router, useLocalSearchParams } from "expo-router";
import axios from 'axios';

import Header from '@/components/header/index';
import Navbar from '@/components/navbar/navbar';
import colors from '@/components/colors/colors';

const { width } = Dimensions.get('window');

type NavbarAnimatedProps = {
  visible: boolean;
  userId: string;
};

function NavbarAnimated({ visible, userId }: NavbarAnimatedProps) {
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.navbarAnimated,
        { transform: [{ translateY: slideAnim }] },
      ]}
    >
      <Navbar userId={userId} />
    </Animated.View>
  );
}

export default function Calculadora() {
  const params = useLocalSearchParams();
  const userId = params.userId;

  const [valorEletricidade, setValorEletricidade] = useState('');
  const [valorGas, setValorGas] = useState('');
  const [tipoGas, setTipoGas] = useState('m3');
  const [kmPercorridos, setKmPercorridos] = useState('');
  const [tecladoAberto, setTecladoAberto] = useState(false);

  const [mesSelecionado, setMesSelecionado] = useState('');
  const [anoSelecionado, setAnoSelecionado] = useState('');

  const meses = [
    { label: 'Janeiro', value: 'Janeiro' },
    { label: 'Fevereiro', value: 'Fevereiro' },
    { label: 'Março', value: 'Março' },
    { label: 'Abril', value: 'Abril' },
    { label: 'Maio', value: 'Maio' },
    { label: 'Junho', value: 'Junho' },
    { label: 'Julho', value: 'Julho' },
    { label: 'Agosto', value: 'Agosto' },
    { label: 'Setembro', value: 'Setembro' },
    { label: 'Outubro', value: 'Outubro' },
    { label: 'Novembro', value: 'Novembro' },
    { label: 'Dezembro', value: 'Dezembro' },
  ];

 
  const currentYear = new Date().getFullYear();
  const anos = Array.from({ length: 11 }, (_, i) => currentYear - i);

  function formatGas() {
    const gasNumber = Number(valorGas);
    return tipoGas === 'botijao' && gasNumber ? gasNumber * 0.485 : gasNumber;
  }

  function saveAll() {
    const emissaoGas = valorGas ? formatGas() : 0;
    const emissaoEnergia = Number(valorEletricidade) * 0.1;
    const emissaoCombustivel = Number(kmPercorridos) / 6.9;
    const emissaoTotal = (emissaoGas + emissaoEnergia + emissaoCombustivel).toFixed(2);

    const data = {
      idUser: userId,
      mes: mesSelecionado.toLowerCase(),
      ano: anoSelecionado,
      consumoCarbono: emissaoTotal,
      consumoEnergia: emissaoEnergia.toFixed(2),
      consumoGas: emissaoGas.toFixed(2),
      consumoTransporte: emissaoCombustivel.toFixed(2),
    };

    axios.post('http://127.0.0.1:2010/api/calculos/', data);
    router.push(`/(tabs)/estatisticas?userId=${userId}`);
  }

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setTecladoAberto(true));
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setTecladoAberto(false));
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }} keyboardShouldPersistTaps="handled">
          <Header title="Calculadora" />
          <View style={styles.formulario}>
            
           
            <View style={styles.container2}>
              <Text style={styles.label}>Selecione o período do cálculo</Text>
              
              <View style={styles.row}>
                {/* Mês */}
                <View style={styles.pickerWrapper}>
                  <Text style={styles.subLabel}>Mês</Text>
                  <View style={styles.pickerContainer}>
                    <Picker
                      selectedValue={mesSelecionado}
                      onValueChange={setMesSelecionado}
                      style={styles.picker}
                    >
                      <Picker.Item label=" Mês " value="" />
                      {meses.map((mes) => (
                        <Picker.Item key={mes.value} label={mes.label} value={mes.value} />
                      ))}
                    </Picker>
                  </View>
                </View>

                {/* Ano */}
                <View style={styles.pickerWrapper}>
                  <Text style={styles.subLabel}>Ano</Text>
                  <View style={styles.pickerContainer}>
                    <Picker
                      selectedValue={anoSelecionado}
                      onValueChange={setAnoSelecionado}
                      style={styles.picker}
                    >
                      <Picker.Item label=" Ano " value="" />
                      {anos.map((ano) => (
                        <Picker.Item key={ano} label={ano.toString()} value={ano.toString()} />
                      ))}
                    </Picker>
                  </View>
                </View>
              </View>

              <Text style={styles.mesSelecionado}>
                Selecionado: {mesSelecionado || 'Nenhum'} / {anoSelecionado || 'Nenhum'}
              </Text>
            </View>

            {/* Consumo de eletricidade */}
            <View style={styles.card}>
              <Text style={styles.textTitulo}>Consumo de eletricidade</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Digite o valor em kWh"
                placeholderTextColor={colors.placeholder}
                value={valorEletricidade}
                onChangeText={setValorEletricidade}
                keyboardType="numeric"
              />
            </View>

            {/* Consumo de gás */}
            <View style={styles.card}>
              <Text style={styles.textTitulo}>Consumo de gás</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Digite o valor"
                placeholderTextColor={colors.placeholder}
                value={valorGas}
                onChangeText={setValorGas}
                keyboardType="numeric"
              />
              <RadioButton.Group value={tipoGas} onValueChange={setTipoGas}>
                <View style={styles.radioItem}>
                  <RadioButton onPress={() => setTipoGas('m3')} value="m3" color={colors.primary} />
                  <Text style={styles.textRadio}>m³</Text>
                </View>
                <View style={styles.radioItem}>
                  <RadioButton onPress={() => setTipoGas('botijao')} value="botijao" color={colors.primary} />
                  <Text style={styles.textRadio}>Botijão</Text>
                </View>
              </RadioButton.Group>
            </View>

            {/* Quilômetros percorridos */}
            <View style={styles.card}>
              <Text style={styles.textTitulo}>Quilômetros percorridos</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Digite os km"
                placeholderTextColor={colors.placeholder}
                value={kmPercorridos}
                onChangeText={setKmPercorridos}
                keyboardType="numeric"
              />
            </View>

            <TouchableOpacity style={styles.btnSalvar} onPress={saveAll}>
              <Text style={styles.textBtnSalvar}>Calcular CO₂</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <NavbarAnimated visible={!tecladoAberto} userId={userId as string} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  formulario: { padding: 20 },
  card: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 15,
    padding: 15,
    marginBottom: 20
  },
  textTitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: colors.textPrimary },
  textInput: {
    height: 50,
    borderColor: colors.border,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: colors.inputBackground,
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {})
  },
  navbarAnimated: { position: 'absolute', bottom: 0, width: '100%', zIndex: 100 },
  radioItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  textRadio: { marginLeft: 8, fontSize: 16, color: colors.textPrimary },
  btnSalvar: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 30,
    alignItems: 'center'
  },
  textBtnSalvar: { color: colors.textPrimary, fontWeight: 'bold', fontSize: 18 },
  container2: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.primary,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 17
  },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: colors.textPrimary },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 10,
  },
  pickerWrapper: { flex: 1 },
  subLabel: { fontSize: 14, color: "#555", marginBottom: 4 },
  pickerContainer: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 12,
    overflow: 'hidden',
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {})
  },
  picker: {
    height: 50,
    color: "#333",
    fontSize: 16,
    paddingHorizontal: 8,
  },
  mesSelecionado: { marginTop: 16, fontSize: 16, color: colors.textMuted },
});
