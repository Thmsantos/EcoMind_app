import { SetStateAction, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert, ScrollView, TextInput, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';

export default function Calculadora(){

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
                    <Text style={styles.textTituloEletricidade}>Consumo de eletricidade</Text>
                    <View style={styles.eletricidade}>
                        <TextInput
                            editable
                            multiline
                            numberOfLines={4}
                            maxLength={40}             
                            style={styles.textInput}
                        />
                        <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                            <View style={styles.radioItem}>
                                <RadioButton value="Opcao 1" color={selectedValue === "Opcao 1" ?  "#71BE70" : "#000"}  />
                                <Text style={styles.textRadio}>R$</Text>
                            </View>
                        </RadioButton.Group>
                        <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                            <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 2" color={selectedValue === "Opcao 2" ?  "#71BE70" : "#000"} />
                                    <Text style={styles.textRadio}>KW</Text>
                                </View>
                        </RadioButton.Group>
                    </View>


                    <Text style={styles.textTitulo}>Consumo de gás</Text>
                    <View style={styles.eletricidade}>
                        <TextInput
                            editable
                            multiline
                            numberOfLines={4}
                            maxLength={40}             
                            style={styles.textInput}
                        />
                        <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                            <View style={styles.radioItem}>
                                <RadioButton value="Opcao 3" color={selectedValue === "Opcao 3" ?  "#71BE70" : "#000"} />
                                <Text style={styles.textRadio}>R$</Text>
                            </View>
                        </RadioButton.Group>
                        <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                            <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 4" color={selectedValue === "Opcao 4" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>KW</Text>
                                </View>
                        </RadioButton.Group>
                    </View>


                    <Text style={styles.textTitulo}>Locomoção</Text>
                    <View  style={styles.listaLocomocao}>
                        <View style={styles.listaUm}>
                            <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 5" color={selectedValue === "Opcao 5" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Moto</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 6" color={selectedValue === "Opcao 6" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Carro</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 7" color={selectedValue === "Opcao 7" ?  "#71BE70" : "#000"} />
                                    <Text style={styles.textRadio}>Barco</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 8" color={selectedValue === "Opcao 8" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Caminhão</Text>
                                </View>
                            </RadioButton.Group>
                        </View>

                        <View style={styles.listaDois}>
                        <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 9" color={selectedValue === "Opcao 9" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Ônibus</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 10"  color={selectedValue === "Opcao 10" ?  "#71BE70" : "#000"} />
                                    <Text style={styles.textRadio}>Avião</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 11" color={selectedValue === "Opcao 11" ?  "#71BE70" : "#000"}  />
                                    <Text style={styles.textRadio}>Helicóptero</Text>
                                </View>
                            </RadioButton.Group>

                            <RadioButton.Group onValueChange={handleChange} value={selectedValue} >
                                <View style={styles.radioItem}>
                                    <RadioButton value="Opcao 12" color={selectedValue === "Opcao 12" ?  "#71BE70" : "#000"}  />
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


                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }} showsVerticalScrollIndicator={true}  indicatorStyle= "black">
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
                                                <Text style={styles.textbtnCalcular}>Calcular CO³</Text>
                </TouchableOpacity>
            </ScrollView>


            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navItem}>
                    <FontAwesome name="calculator" size={24} color="black" />
                    <Text style={styles.navText}>Calculadora</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <FontAwesome name="home" size={24} color="black" />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <FontAwesome name="user" size={24} color="black" />
                    <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    formulario: {
        paddingLeft: 30,
        paddingRight: 30,
    },

    textTitulo: {
        fontSize: 18,
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 3,
        fontWeight: 700
    },

    textTituloEletricidade:{
        fontSize: 18,
        paddingLeft: 25,
        paddingBottom: 3,
        fontWeight: 700
    },

    textInput: {
        width: 169,
        height: 24,
        borderRadius: 10,
        backgroundColor: "#71BE70",
        paddingLeft: 15,
        paddingTop: 2,
    },

    eletricidade: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        
    },

    listaUm: {

    },

    listaDois: {

    },

    radioGroup: {

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
        paddingLeft: 20
    },

    groupKMPercorridos: {
        paddingLeft: 25,
        paddingTop: 6,
        display: "flex",
        flexDirection: "row",
        gap: 15
    },

    btnSalvar: {
        width: 126,
        height: 24,
        backgroundColor: "#71BE70",
        borderRadius: 24,
    },

    textBtnSalvar: {
        textAlign: "center",
        fontWeight: 700
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
        padding: 12,
        width: 319,
        height: 95,
        backgroundColor: "#71BE70",
        borderRadius: 15,
    
    },

    btnCalcular: {
        position: "absolute",
        width: 319,
        height: 35,
        top: 540,
        left: 50,
        borderRadius: 14,
        backgroundColor: "#71BE70",
    },

    textbtnCalcular:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: 5

    },

    navbar:{
        position: 'absolute',  
        top: 676,                
        left: 0,
        right: 0,
        height: 60,   
        padding: 10,         
        backgroundColor: "#71BE70", 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        zIndex: 0,
    },

    navItem:{
        alignItems: 'center'
    },

    navText:{
        fontSize: 14,
        color: 'black',
        marginTop: 5,
    }
})

