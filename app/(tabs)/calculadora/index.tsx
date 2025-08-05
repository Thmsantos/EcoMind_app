import { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
import { Text, View, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert, Dimensions, KeyboardAvoidingView, Platform, Animated, Keyboard } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Header from '@/components/header/index';
import Navbar from '@/components/navbar/navbar';
import { criaObjetoTransportes, montaObjetoParaEnvio, enviarCalculoParaBanco } from './functionsCalculadora';

const { width } = Dimensions.get('window');
const baseWidth = width * 0.9;
=======
import {Text,  View,  StyleSheet,  TextInput,  ScrollView,  TouchableOpacity,  Alert,  Dimensions,  KeyboardAvoidingView,  Platform,  Animated,  Keyboard,} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Header from '@/components/header/index';
import Navbar from '@/components/navbar/navbar'; 

import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams } from "expo-router";
import axios from 'axios';

const { width } = Dimensions.get('window');
>>>>>>> ce4aac85e0127daa33f95886e16a4bc57b1f43b8

function NavbarAnimated({ visible }) {
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View style={[{ transform: [{ translateY: slideAnim }] }]}>
      <Navbar />
    </Animated.View>
  );
}

export default function Calculadora() {
<<<<<<< HEAD
=======
  const params =  useLocalSearchParams()
  console.log(params)
  const userId = params.userId;
>>>>>>> ce4aac85e0127daa33f95886e16a4bc57b1f43b8
  const [valorEletricidade, setValorEletricidade] = useState('');
  const [tipoEletricidade, setTipoEletricidade] = useState('R$');
  const [valorGas, setValorGas] = useState('');
  const [tipoGas, setTipoGas] = useState('R$');
  const [kmPercorridos, setKmPercorridos] = useState('');
  const [mesSelecionado, setMesSelecionado] = useState('');
  const [transportesSelecionados, setTransportesSelecionados] = useState<string[]>([]);
  const [tecladoAberto, setTecladoAberto] = useState(false);
<<<<<<< HEAD

  // const [transportesSelecionados, setTransportesSelecionados] = useState<string[]>([]);

  // function pushTransporte(nome: string) {
  //   if (transportesSelecionados.includes(nome)) {
  //     setTransportesSelecionados(prev => prev.filter(t => t !== nome));
  //     return;
  //   }
  //   setTransportesSelecionados(prev => [...prev, nome]);
  // }


  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  function toggleTransporte(nome: string) {
    if (transportesSelecionados.includes(nome)) {
      setTransportesSelecionados(prev => prev.filter(t => t !== nome));
    } else {
      setTransportesSelecionados(prev => [...prev, nome]);
    }
  }
    useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', () => setTecladoAberto(true));
    const hide = Keyboard.addListener('keyboardDidHide', () => setTecladoAberto(false));
=======

  const [mesSelecionado, setMesSelecionado] = useState('');
  
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
  

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setTecladoAberto(true));
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setTecladoAberto(false));
>>>>>>> ce4aac85e0127daa33f95886e16a4bc57b1f43b8
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);
<<<<<<< HEAD
  // const dados = [
  //   { id: '1', nome: 'Moto', KM: '230 KM' },
  //   { id: '2', nome: 'Carro', KM: '230 KM' },
  //   { id: '3', nome: 'Avião', KM: '230 KM' },
  //   { id: '4', nome: 'Ônibus', KM: '230 KM' },
  //   { id: '5', nome: 'Barco', KM: '230 KM' },
  //   { id: '6', nome: 'Trem', KM: '230 KM' },
  // ];
=======

>>>>>>> ce4aac85e0127daa33f95886e16a4bc57b1f43b8


<<<<<<< HEAD


  

  async function saveAll() {
    try {
      const emissaoGas = Number(valorGas) * 2.9;
      const emissaoEnergia = Number(valorEletricidade) * 0.1;
      const emissaoCombustivel = (Number(kmPercorridos) / 6.9).toFixed(2)
      const emissaoTotal = emissaoGas + emissaoEnergia + emissaoCombustivel;

      const transporteObjeto = criaObjetoTransportes(transportesSelecionados);

      const dados = montaObjetoParaEnvio(
        '684cf916b07f448c7f3376b8', 
        mesSelecionado,
        emissaoEnergia.toFixed(2),
        emissaoGas.toFixed(2),
        transporteObjeto,
        emissaoTotal
      );

      await enviarCalculoParaBanco(dados);

      console.log('Sucesso', 'Cálculo salvo com sucesso!');
    } catch (error) {
      console.log('Erro', 'Não foi possível salvar os dados.');
    }
=======
  function saveAll(){
    const emissaoGas = Number(valorGas) * 2.9; 
    const emissaoEnergia = Number(valorEletricidade) * 0.1;
    const emissaoCombustivel = (Number(kmPercorridos) / 6.9).toFixed(2)
    const emissaoTotal = emissaoGas + emissaoEnergia + emissaoCombustivel;
    const data = {
      idUser: userId,
      mes: mesSelecionado,
      consumoCarbono: emissaoTotal,
      consumoEnergia: emissaoEnergia,
      consumoGas: emissaoGas,
      consumoTransporte: emissaoCombustivel,
      balanco: 'positivo'
    }

    axios.post('http://127.0.0.1:2010/api/calculos/create', data)
>>>>>>> ce4aac85e0127daa33f95886e16a4bc57b1f43b8
  }

  return (


    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} keyboardShouldPersistTaps="handled">
          <Header />

          <View style={{ padding: 16 }}>
            {/* Picker Mês */}
            <View style={styles.container2}>
              <Text  style={styles.label}>Selecione o mês do cálculo</Text>
              <View  style={styles.pickerContainer}>
                <Picker
                  selectedValue={mesSelecionado}
                  onValueChange={setMesSelecionado}
                  style={{
                          height: 50,
                          paddingHorizontal: 0,
                          borderRadius: 8,
                          fontSize: 16,
                          color:"gray"
                      }}
                >
                  <Picker.Item label="-- Escolha um mês --" value="" />
                  {meses.map(mes => (
                    <Picker.Item key={mes} label={mes} value={mes} />
                  ))}
                </Picker>
              </View>
              <Text style={styles.mesSelecionado}>Mês selecionado: {mesSelecionado || 'Nenhum'}</Text>
            </View>

            {/* Energia */}
            <View style={styles.card}>
              <Text  style={styles.textTitulo}>Consumo de Eletricidade</Text>
              <TextInput style={styles.textInput} placeholder="Digite o valor" value={valorEletricidade} onChangeText={setValorEletricidade} keyboardType="numeric" />
              <RadioButton.Group onValueChange={setTipoEletricidade} value={tipoEletricidade}>
                 <View style={styles.radioItem}>
                  <RadioButton value="R$" color="#71BE70" />
                  <Text style={styles.textRadio}>R$</Text>
                </View>
                <View style={styles.radioItem}>
                  <RadioButton value="KW" color="#71BE70" />
                  <Text style={styles.textRadio}>KW</Text>
                </View>
              </RadioButton.Group>
            </View>

            {/* Gas */}
            <View style={styles.card}>
              <Text style={styles.textTitulo}>Consumo de gás</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Digite o valor"
                value={valorGas}
                onChangeText={setValorGas}
                keyboardType="numeric"
              />
              <RadioButton.Group value={tipoGas} onValueChange={setTipoGas}>
                <View style={styles.radioItem}>
                  <RadioButton value="R$" color="#71BE70" />
                  <Text style={styles.textRadio}>R$</Text>
                </View>
                <View style={styles.radioItem}>
                  <RadioButton value="KW" color="#71BE70" />
                  <Text style={styles.textRadio}>KW</Text>
                </View>
              </RadioButton.Group>
            </View>

<<<<<<< HEAD
            {/* Transporte */}

          <View style={styles.card2}>

           {/*  <Text  style={styles.textTitulo}>Transportes utilizados</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {['carro', 'moto', 'barco', 'caminhão', 'ônibus', 'avião', 'helicóptero', 'trem'].map(transporte => (
                <View key={transporte} style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
                  <Checkbox
                    status={transportesSelecionados.includes(transporte) ? 'checked' : 'unchecked'}
                    onPress={() => toggleTransporte(transporte)}
                  />
                  <Text>{transporte}</Text>
                </View>
              ))}
            </View> */}
              <Text  style={styles.textTitulo}>KMs percorridos</Text>
              <TextInput style={styles.textInput} placeholder="Digite os KM" value={kmPercorridos} onChangeText={setKmPercorridos} keyboardType="numeric" />
          </View>
 {/*          <View style={styles.scrolltabela}>
              <View style={[styles.tabela, { width: baseWidth }]}>
                {dados.map((item) => (
                  <View key={item.id} style={styles.row}>
                    <Text style={styles.cell}>{item.nome}</Text>
                    <Text style={styles.cell}>{item.KM}</Text>
                  </View>
                ))}
              </View>
            </View>  */}

            <TouchableOpacity onPress={saveAll} style={styles.btnSalvar}>

              
              <Text style={styles.textBtnSalvar}>Calcular CO²</Text>
=======
            <Text style={styles.textTitulo}>KMs Percorridos</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Digite os KMs"
              value={kmPercorridos}
              onChangeText={setKmPercorridos}
              keyboardType="numeric"
            />

           
            <TouchableOpacity
                  style={styles.btnSalvar}
                  onPress={() => {
                    saveAll()
                  }}
                >
                <Text style={styles.textBtnSalvar}>Calcular CO₂</Text>
>>>>>>> ce4aac85e0127daa33f95886e16a4bc57b1f43b8
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

     <NavbarAnimated visible={!tecladoAberto} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  formulario: {
    padding: 20,
  },
  card: {
    borderWidth: 2,
    borderColor: '#71BE70',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20
  },
  card2: {
    borderWidth: 2,
    borderColor: '#71BE70',
    borderRadius: 15,
    marginBottom: 20,
    padding: 20
  },
  textTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {})
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  textRadio: {
    marginLeft: 8,
    fontSize: 16
  },
  listaLocomocao: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listaUm: {
    flex: 1
  },
  listaDois: {
    flex: 1
  },
  groupKMPercorridos: {
    marginTop: 10
  },
  scrolltabela: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnSalvar: {
    backgroundColor: '#71BE70',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center'
  },
  textBtnSalvar: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
  tabela: {
    width: width * 0.9,
    borderRadius: 15,
    backgroundColor: '#71BE70',
    marginTop: 20,
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  cell: {
    fontSize: 16
  },
  btnCalcular: {
    marginTop: 30,
    backgroundColor: '#71BE70',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center'
  },
  textbtnCalcular: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
    container2: {
    borderWidth: 2,
    margin: 0,
    borderRadius: 15,
    borderColor: "rgba(113, 190, 112, 1.00)",
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 17,
    paddingRight: 17
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    overflow: 'hidden', 
  },
  mesSelecionado: {
    marginTop: 16,
    fontSize: 16,
    color: '#555',
  },
});
