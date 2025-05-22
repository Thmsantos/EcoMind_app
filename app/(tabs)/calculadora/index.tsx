import { SetStateAction, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert, ScrollView, TextInput, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import { router } from 'expo-router';
import Navbar from '@/components/navbar/navbar';

export default function Calculadora(){

    const [valorEletricidade, setValorEletricidade] = useState('R$');
    const [valorGas, setValorGas] = useState('R$');
    const [transporteSelecionado, setTransporteSelecionado] = useState('');


    const dados = [
        { id: '1', nome: 'Moto', KM: '230 KM' },
        { id: '2', nome: 'Carro', KM: '230 KM'},
        { id: '3', nome: 'Avião', KM: '230 KM' },
        { id: '5', nome: 'Onibus', KM: '230 KM' },
        { id: '6', nome: 'Barco', KM: '230 KM' },
        { id: '7', nome: 'Trem', KM: '230 KM' },
      ];

    const [selectedValue, setSelectedValue] = useState('R$');
      
    const handleChange = (value: SetStateAction<string>) => {
        setSelectedValue(value);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.viewLogo}>
                    <View style={styles.viewImagemLogo}>
                        <Image source={require("../../../assets/images/logo.png")} style={styles.imageLogo} />
                    </View>
                    <Text style={styles.nomeAppLogo}>EcoMind</Text >
            </Text>

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={true}>
                <View style={styles.formulario}>
                    <View style={styles.card}>
                    <Text style={styles.textTituloEletricidade}>Consumo de eletricidade</Text>
                    <View style={styles.eletricidade}>
                        <TextInput
                            editable
                            multiline
                            numberOfLines={4}
                            maxLength={40}             
                            style={styles.textInput}
                        />
                        <RadioButton.Group  value={valorEletricidade} onValueChange={setValorEletricidade} >
                        <View style={styles.radioItem}>
                            <RadioButton
                            value="Opcao 1"
                            color="#71BE70"  
                            />
                            <Text style={styles.textRadio}>R$</Text>
                        </View>
                        </RadioButton.Group>

                        <RadioButton.Group   value={valorEletricidade} onValueChange={setValorEletricidade} >
                            <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 2" color={valorEletricidade === "Opcao 2" ?  "#71BE70" : "#000"} />
                                    <Text style={styles.textRadio}>KW</Text>
                                </View>
                        </RadioButton.Group>
                    </View>

                    </View>

                    <View style={styles.card}>
                    <Text style={styles.textTitulo}>Consumo de gás</Text>
                    <View style={styles.eletricidade}>
                        <TextInput
                            editable
                            multiline
                            numberOfLines={4}
                            maxLength={40}             
                            style={styles.textInput}
                        />
                        <RadioButton.Group value={valorGas} onValueChange={setValorGas} >
                            <View style={styles.radioItem}>
                                <RadioButton value="Opcao 3" color={valorGas === "Opcao 3" ?  "#71BE70" : "#000"} />
                                <Text style={styles.textRadio}>R$</Text>
                            </View>
                        </RadioButton.Group>
                        <RadioButton.Group value={valorGas} onValueChange={setValorGas} >
                            <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 4" color={valorGas === "Opcao 4" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>KW</Text>
                                </View>
                        </RadioButton.Group>
                    </View>
                    </View>

                    <View style={styles.card2}>

                    <Text style={styles.textTitulo}>Locomoção</Text>
                    <View  style={styles.listaLocomocao}>
                        <View style={styles.listaUm}>
                            <RadioButton.Group value={transporteSelecionado} onValueChange={setTransporteSelecionado} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 5" color={transporteSelecionado === "Opcao 5" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Moto</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group value={transporteSelecionado} onValueChange={setTransporteSelecionado}  >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 6" color={transporteSelecionado === "Opcao 6" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Carro</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group value={transporteSelecionado} onValueChange={setTransporteSelecionado}  >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 7" color={selectedValue === "Opcao 7" ?  "#71BE70" : "#000"} />
                                    <Text style={styles.textRadio}>Barco</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group value={transporteSelecionado} onValueChange={setTransporteSelecionado}  >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 8" color={transporteSelecionado === "Opcao 8" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Caminhão</Text>
                                </View>
                            </RadioButton.Group>
                        </View>

                        <View style={styles.listaDois}>
                        <RadioButton.Group value={transporteSelecionado} onValueChange={setTransporteSelecionado}  >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 9" color={transporteSelecionado === "Opcao 9" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Ônibus</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group value={transporteSelecionado} onValueChange={setTransporteSelecionado}  >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 10"  color={transporteSelecionado === "Opcao 10" ?  "#71BE70" : "#000"} />
                                    <Text style={styles.textRadio}>Avião</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group value={transporteSelecionado} onValueChange={setTransporteSelecionado}  >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 11" color={transporteSelecionado === "Opcao 11" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Helicóptero</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group value={transporteSelecionado} onValueChange={setTransporteSelecionado} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 12" color={transporteSelecionado === "Opcao 12" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Trem</Text>
                                </View>
                            </RadioButton.Group>
                        </View>
                    </View>
                    <Text style={styles.textTitulo}>KMs Percorridos</Text>

                        <View style={styles.groupKMPercorridos}>
                            <TextInput
                                editable
                                multiline
                                numberOfLines={4}
                                maxLength={40}             
                                style={styles.textInput}
                            />

                            <TouchableOpacity style={styles.btnSalvar} onPress={() => Alert.alert('Botão Customizado Pressionado!')}>
                                                <Text style={styles.textBtnSalvar}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>


                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, paddingBottom: 140 }} showsVerticalScrollIndicator={true}  indicatorStyle= "black">
                    <View style={styles.tabela} >
                        <FlatList
                            data={dados}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                            <View style={styles.row}>
                                <Text style={styles.cell}>{item.nome}</Text>
                                <Text style={styles.cell}>{item.KM}</Text>
                            </View>
                        )}
                        />
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.btnCalcular} onPress={() => Alert.alert('Botão Customizado Pressionado!')}>
                                                <Text style={styles.textbtnCalcular}
                                                 onPress={() => router.push('/(tabs)/resultados')}>Calcular CO³</Text>
                </TouchableOpacity>
            </ScrollView>

            <Navbar />            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    card: {
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#71BE70",
        borderRadius: 15,
        justifyContent: 'center',
        height: 120,
        width: 370,
    },
    card2: {
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#71BE70",
        borderRadius: 15,
        justifyContent: 'center',
        height: 320,
        width: 370,
    },
    viewLogo: {
        paddingTop: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    imageLogo: {
        width: 65,
        height: 65,
        backgroundSize: "cover"
    },

    viewImagemLogo: {
        width: 55,
        height:70
    },

    nomeAppLogo:{
        fontSize: 22,
        fontWeight: "700"
    },

    textTitulo: {
        fontSize: 18,
        paddingBottom: 3,
        fontWeight: 700,
        marginLeft: 30
    },

    textTituloEletricidade:{
        fontSize: 18,
        paddingBottom: 3,
        fontWeight: 700,
        marginLeft: 30
    },

    textInput: {
        width: 50,
        height: 30,
        backgroundColor: "transparent",
        borderBottomWidth: 2,
        borderBottomColor: "#71BE70",
        paddingLeft: 10,
        paddingTop: 7,
        fontSize: 15
    },

    eletricidade: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,   
        marginLeft: 30   
    },

    listaUm: {

    },

    listaDois: {

    },

    radioGroup: {

    },

    formulario:{
        
    },
    
    radioItem: {
        display: "flex",
        flexDirection: "row"

    },

    textRadio: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    listaLocomocao: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10
    },

    groupKMPercorridos: {
        paddingTop: 6,
        paddingLeft: 30,
        display: "flex",
        flexDirection: "row",
        gap: 15
    },

    btnSalvar: {
        width: 126,
        height: 40,
        backgroundColor: "#71BE70",
        borderRadius: 24,
    },

    textBtnSalvar: {
        textAlign: "center",
        fontWeight: 700,
        paddingTop: 8,
        fontSize: 16
    },

    row : {
        paddingLeft: 50,
        flexDirection: "row",
        gap: 100,
        backgroundColor: "#71BE70",
    },

    cell: {
        paddingBottom: 4,
        fontWeight: 500,
        fontSize: 15,
        textAlign: "center"
    },

    tabela: {
        position: "relative",
        margin: "auto",
        marginTop: 20,
        padding: 12,
        width: 370,
        height: 95,
        backgroundColor: "#71BE70",
        borderRadius: 15,
    
    },

    btnCalcular: {
        position: "absolute",
        width: 370,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        top: 750,
        left: 0,
        borderRadius: 24,
        backgroundColor: "#71BE70",
    },

    textbtnCalcular:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    },

})

