import Navbar from '@/components/navbar/navbar';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
    const [isFocused, setIsFocused] = useState(false);
      
    const userData = {
        username: 'Mariana',
        email: 'mari@email.com',
        nome: 'Mariana',
        senha: 'mari123'
    };

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSalvar = () => {
        const dadosAtualizados = {
        username: username || userData.username,
        email: email || userData.email,
        };
        console.log('Dados salvos:', dadosAtualizados);
    };
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image source={require("../../../assets/images/avatar.png")} style={styles.avatar} />
                    <Text style={styles.username}>Mariana</Text>
                    <Text style={styles.email}>mari@gmail.com</Text>
                </View>
            </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                                            
                             <Icon name="trophy" size={20} color="black" style={styles.statIcon} /> 
                            <View style={styles.statTextContainer}>
                                <Text style={styles.statValue}>2 </Text>
                                <Text style={styles.statLabel}>Pódio</Text>
                            </View>
                        </View>

                        <View style={styles.statBox}>
                        <Icon name="leaf" size={20} color="black" style={styles.statIcon} />
                        <View style={styles.statTextContainer}>
                            <Text style={styles.statValue}>3.200</Text>
                            <Text style={styles.statLabel}>Consumo Total</Text>
                        </View>
                       </View>

                     
       
                       
                        
                    {/* <View style={styles.statBox}>
                            <Icon name="star" size={20} color="black" style={styles.statIcon} />
                            <View style={styles.statTextContainer}>
                                <Text style={styles.statValue}>0</Text>
                                <Text style={styles.statLabel}>Pontos</Text>
                            </View>
                        </View> */}
                    {/* <View style={styles.statBox}>
                        <Icon name="arrow-down" size={20} color="black" style={styles.statIcon} />
                        <View style={styles.statTextContainer}>
                            <Text style={styles.statValue}>0,00 kg</Text>
                            <Text style={styles.statLabel}>CO₂ economizado</Text>
                        </View>
                    </View>
                    <View style={styles.statBox}>
                        <Icon name="star" size={20} color="black" style={styles.statIcon} />
                        <View style={styles.statTextContainer}>
                            <Text style={styles.statValue}>0</Text>
                            <Text style={styles.statLabel}>Pontos</Text>
                        </View>
                    </View> */}
                </View>

                <View style={styles.statsContainerdois}>
                        <View style={styles.statBoxdois}>
                            <Icon name="star" size={20} color="black" style={styles.statIcon} />
                            <View style={styles.statTextContainer}>
                                <Text style={styles.statValue}>0</Text>
                                <Text style={styles.statLabel}>Pontos</Text>
                            </View>
                        </View>
                
                </View>
                
                <View style={styles.estatisticas}>
                    <TouchableOpacity style={styles.btnRedireciona}
                    onPress={() => router.push('/(tabs)/estatisticas')} >
                        <Text style={styles.textoBotao}>📊 Estatísticas <Icon style={styles.arrowright} name="chevron-right" size={12} color="#ccc" /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnRedirecionadois}
                    onPress={() => router.push('/(tabs)/ranking')}>
                        <Text style={styles.textoBotao}>🏆 Ranking <Icon style={styles.arrowrightduo} name="chevron-right" size={12} color="#ccc" /></Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.containeredit}>
                    <Text style={styles.titulo}>Editar Perfil</Text>
                    
                    <Text style={styles.titleInput}>Nome*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={userData.username}
                        value={username}
                        onChangeText={setUsername}
                    />

                    <Text style={styles.titleInput}>Usuário*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={userData.email}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Text style={styles.titleInput}>Email*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={userData.email}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <Text style={styles.titleInput}>Senha*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={userData.email}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />


                    <TouchableOpacity style={styles.botao} onPress={handleSalvar}>
                        <Text style={styles.textoBotao}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Navbar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#71BE70',
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'relative',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    },
    headerContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    containerAvatar: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 60,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 2,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    email: {
        fontSize: 18,
        color: '#000',
    },
    editProfile: {
        fontSize: 24,
        color: 'blue',
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    statsContainerdois:{
        marginTop: 20,
        justifyContent: 'flex-start',
        paddingLeft: 8
    },
    statBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#71BE70',
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginHorizontal: 10,
        width: 180,
        elevation: 5,
    },
    statBoxdois: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#71BE70',
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginHorizontal: 10,
        width: 180,
    },
    statIcon: {
        marginLeft: 15,
        marginRight: 10,
        marginBottom: 20
    },
    statTextContainer: {
        flexDirection: 'column',
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    statLabel: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000',
    },

    containeredit: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: 80
      },
      titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 24,
      },
      titleInput: {
        marginBottom: 10

      },
      input: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 14,
        marginBottom: 16,
        fontSize: 16,
      },
      estatisticas: {
        width: 370,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
      },
      
      btnRedireciona: {
        width: 370,
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#71BE70',
        textAlign: 'left',
        justifyContent: 'space-around'
      },
      btnRedirecionadois: {
        width: 370,
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderWidth: 2,
        borderColor: '#71BE70',
      },
      arrowright: {
        marginLeft: 200
        
      },
      arrowrightduo: {
        marginLeft: 220
      },
      textoBotao: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
        textAlign: 'left',
      },
      botao: {
        width: 370,
        backgroundColor: '#71BE70',
        padding: 14,
        paddingVertical: 12,
        paddingHorizontal:10,
        borderRadius: 12,
        borderWidth: 0,
        zIndex: 100,
        alignItems: "center",   
      },
      medal: {
        width: 35,
        height: 35
      }
});