import { useState, useEffect, useRef } from 'react';
import {Text,  View,  StyleSheet,  TextInput,  ScrollView,  TouchableOpacity,  Alert,  Dimensions,  KeyboardAvoidingView,  Platform,  Animated,  Keyboard,} from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import { router } from 'expo-router';
import Header from '@/components/header/index';
import Navbar from '@/components/navbar/navbar'; 
import { getTodosOsValores } from './functionsCalculadora';
import {criaObjetoTransportes} from './functionsCalculadora';
import { Picker } from '@react-native-picker/picker';


const { width, height } = Dimensions.get('window');
const baseWidth = width * 0.9;

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
    <Animated.View
      style={[
        styles.navbarAnimated,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Navbar />
    </Animated.View>
  );
}

export default function Calculadora() {

  const [valorEletricidade, setValorEletricidade] = useState('');
  const [tipoEletricidade, setTipoEletricidade] = useState('R$');
  const [valorGas, setValorGas] = useState('');
  const [tipoGas, setTipoGas] = useState('R$');
  const [kmPercorridos, setKmPercorridos] = useState('');
  const [tecladoAberto, setTecladoAberto] = useState(false);
  // const [transportesSelecionados, setTransportesSelecionados] = useState<string[]>([]);

  // function pushTransporte(nome: string) {
  //   if (transportesSelecionados.includes(nome)) {
  //     setTransportesSelecionados(prev => prev.filter(t => t !== nome));
  //     return;
  //   }
  //   setTransportesSelecionados(prev => [...prev, nome]);
  // }

  function litrosConsumidos(consumoVeiculo: number, kmMensaisx: number){
      return (kmMensaisx/consumoVeiculo).toFixed(2) 
  };


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
  
    // function getNomeMes(valor: string) {
    //   const mes = meses.find(m => m.value === valor);
    //   return mes ? mes.label : '';
    //   }
      
    //   const nomeMes = getNomeMes(mesSelecionado);


  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setTecladoAberto(true));
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setTecladoAberto(false));
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  // const dados = [
  //   { id: '1', nome: 'Moto', KM: '230 KM' },
  //   { id: '2', nome: 'Carro', KM: '230 KM' },
  //   { id: '3', nome: 'Avião', KM: '230 KM' },
  //   { id: '4', nome: 'Ônibus', KM: '230 KM' },
  //   { id: '5', nome: 'Barco', KM: '230 KM' },
  //   { id: '6', nome: 'Trem', KM: '230 KM' },
  // ];

  // const { width } = Dimensions.get('window');
  // const baseWidth = width * 0.9;

  function saveAll(){
    const emissaoGas = Number(valorGas) * 2.9; 
    const emissaoEnergia = Number(valorEletricidade) * 0.1;
    const emissaoCombustivel = (Number(kmPercorridos) / 6.9).toFixed(2)
    const emissaoTotal = emissaoGas + emissaoEnergia + emissaoCombustivel;
    const data = {
      idUser: "id",
      mes: mesSelecionado,
      consumoCarbono: emissaoTotal,
      consumoEnergia: emissaoEnergia,
      consumoGas: emissaoGas,
      consumoTransporte: emissaoCombustivel,
      balanco: 'positivo'
    }

    //fazer o axios
    console.log(data)
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
                placeholder="Digite o valor"
                value={valorEletricidade}
                onChangeText={setValorEletricidade}
                keyboardType="numeric"
              />
              <RadioButton.Group value={tipoEletricidade} onValueChange={setTipoEletricidade}>
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

            <Text style={styles.textTitulo}>KMs Percorridos</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Digite os KMs"
              value={kmPercorridos}
              onChangeText={setKmPercorridos}
              keyboardType="numeric"
            />
            {/* <View style={styles.card2}>
              <Text style={styles.textTitulo}>Locomoção</Text>
              <View style={styles.listaLocomocao}>
                <View style={styles.listaUm}>
                  {['moto', 'carro', 'barco', 'caminhão'].map((nome, idx) => (
                    <View key={idx} style={styles.radioItem}>
                      <Checkbox
                        status={transportesSelecionados.includes(nome) ? 'checked' : 'unchecked'}
                        onPress={() => pushTransporte(nome)}
                        color="#71BE70"
                      />
                      <Text style={styles.textRadio}>{nome}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.listaDois}>
                  {['ônibus', 'avião', 'helicóptero', 'trem'].map((nome, idx) => (
                    <View key={idx} style={styles.radioItem}>
                      <Checkbox
                        status={transportesSelecionados.includes(nome) ? 'checked' : 'unchecked'}
                        onPress={() => pushTransporte(nome)}
                        color="#71BE70"
                      />
                      <Text style={styles.textRadio}>{nome}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.groupKMPercorridos}>

           
              <TouchableOpacity
                style={styles.btnSalvar}
                onPress={() => {
                  const transporteObjeto = criaObjetoTransportes(transportesSelecionados);
                  console.log(transporteObjeto); 
                  Alert.alert('Salvo!', JSON.stringify(transporteObjeto, null, 2));
                }}
              >
                <Text style={styles.textBtnSalvar}>Salvar</Text>
              </TouchableOpacity>

              </View>
            </View>*

            <View style={styles.scrolltabela}>
              <View style={[styles.tabela, { width: baseWidth }]}>
                {dados.map((item) => (
                  <View key={item.id} style={styles.row}>
                    <Text style={styles.cell}>{item.nome}</Text>
                    <Text style={styles.cell}>{item.KM}</Text>
                  </View>
                ))}
              </View>
            </View> */}

           
            <TouchableOpacity
                  style={styles.btnSalvar}
                  onPress={() => {
                    // const valores = getTodosOsValores(
                    //   nomeMes,
                    //   valorEletricidade,
                    //   tipoEletricidade,
                    //   valorGas,
                    //   tipoGas,
                    //   transportesSelecionados[0] || '',
                    //   kmPercorridos
                    // );
                    // console.log('Valores capturados:', valores);
                    // Alert.alert('Valores capturados!', JSON.stringify(valores, null, 2));
                    saveAll()
                  }}
                >
                <Text style={styles.textBtnSalvar}>Calcular CO²</Text>
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
    padding: 20
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
    borderRadius: 12
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
    marginTop: 25,
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
