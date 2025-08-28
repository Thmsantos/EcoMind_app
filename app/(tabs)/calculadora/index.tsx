import { useState, useEffect, useRef } from 'react';
import {Text,  View,  StyleSheet,  TextInput,  ScrollView,  TouchableOpacity,  Alert,  Dimensions,  KeyboardAvoidingView,  Platform,  Animated,  Keyboard,} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Header from '@/components/header/index';
import Navbar from '@/components/navbar/navbar'; 

import { Picker } from '@react-native-picker/picker';
import { router, useLocalSearchParams } from "expo-router";
import axios from 'axios';

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
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Navbar userId={userId} />
    </Animated.View>
  );
}

export default function Calculadora() {
  const params =  useLocalSearchParams()
  const userId = params.userId;

  const [valorEletricidade, setValorEletricidade] = useState('');
  const [valorGas, setValorGas] = useState('');
  const [tipoGas, setTipoGas] = useState('m3');
  const [kmPercorridos, setKmPercorridos] = useState('');
  const [tecladoAberto, setTecladoAberto] = useState(false);
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
  
    function saveAll(){
      const emissaoGas = valorGas ? formatGas() : 0;
      const emissaoEnergia = Number(valorEletricidade) * 0.1;
      const emissaoCombustivel = Number(kmPercorridos) / 6.9;
      const emissaoTotal = (emissaoGas + emissaoEnergia + emissaoCombustivel).toFixed(2);

      const data = {
        idUser: userId,
        mes: mesSelecionado.toLowerCase(),
        consumoCarbono: emissaoTotal,
        consumoEnergia: emissaoEnergia.toFixed(2),
        consumoGas: emissaoGas.toFixed(2),
        consumoTransporte: emissaoCombustivel.toFixed(2),
      };
  
      axios.post(`http://127.0.0.1:2010/api/calculos/create/${userId}`, data)
      router.push(`/(tabs)/estatisticas?userId=${userId}`)
    }
  
function formatGas() {
    const gasNumber = Number(valorGas);
    if (tipoGas === 'botijao' && gasNumber) {
      return gasNumber * 0.485;
    }
    return gasNumber;
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
                  <Text style={styles.label}>Selecione o mês do cálculo</Text>
                  <View style={styles.pickerContainer}>
                    <Picker
                      selectedValue={mesSelecionado}
                      onValueChange={(itemValue) => setMesSelecionado(itemValue)
                        
                      }
                      
                      style={{
                        height: 50,
                        paddingHorizontal: 0,
                        borderRadius: 8,
                        fontSize: 16,
                        color:"gray"
                    }}
                    >
                      <Picker.Item label="-- Escolha um mês --" value="" />
                      {meses.map((mes) => (
                        <Picker.Item key={mes.value} label={mes.label} value={mes.value} />
                      ))}
                    </Picker>
                  </View>
                  <Text style={styles.mesSelecionado}>Mês selecionado: {mesSelecionado || 'Nenhum'}</Text>
                </View>
        
            <View style={styles.card}>
              <Text style={styles.textTitulo}>Consumo de eletricidade</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Digite o valor em kW"
                value={valorEletricidade}
                onChangeText={setValorEletricidade}
                keyboardType="numeric"
              />
            </View>

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
                  <RadioButton onPress={() => setTipoGas('m3')} value="m3" color="#71BE70" />
                  <Text style={styles.textRadio}>m³</Text>
                </View>
                <View style={styles.radioItem}>
                  <RadioButton onPress={() => setTipoGas('botijao')} value="botijao" color="#71BE70" />
                  <Text style={styles.textRadio}>Botijão</Text>
                </View>
              </RadioButton.Group>
            </View>

            <View style={styles.card}>
              <Text style={styles.textTitulo}>Quilômetros percorridos</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Digite os km"
                value={kmPercorridos}
                onChangeText={setKmPercorridos}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity
                  style={styles.btnSalvar}
                  onPress={() => {
                    saveAll()
                  }}
                >
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
  navbarAnimated: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 100,
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
    padding: 12,
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
     ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {})
  },
  mesSelecionado: {
    marginTop: 16,
    fontSize: 16,
    color: '#555',
  },

 
});
