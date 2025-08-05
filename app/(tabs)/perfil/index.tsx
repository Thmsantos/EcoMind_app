import Navbar from '@/components/navbar/navbar';
import axios from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import {View, Text, Image, TouchableOpacity,  StyleSheet,  ScrollView,  TextInput,  Dimensions,  Keyboard,  Animated, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const baseWidth = width * 0.9;

export default function Profile() {
  const params =  useLocalSearchParams()
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [userForm, setUserForm] = useState<any>()

  const navbarTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  

  useEffect(() => {
    Animated.timing(navbarTranslateY, {
      toValue: isKeyboardVisible ? 100 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isKeyboardVisible]);

 

  const navegarPara = (rota: any) => {
    router.push(rota);
  };

  const handleSalvar = () => {
    // const dadosAtualizados = {
    //   username: username || userData.username,
    //   email: email || userData.email,
    // };
    // console.log('Dados salvos:', dadosAtualizados);
  };

/*   useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.post('http://127.0.0.1:2010/api/user/search', {
          id: params.userId,
        });
        setUserForm(res.data);
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      }
    };
  
    if (params.userId) {
      fetchUser();
    }
  }, [params.userId]); */

  
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image source={require("../../../assets/images/avatar.png")} style={styles.avatar} />
            <Text style={styles.username}>{/* {userForm.usuario ?? ""} */}</Text>
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
        </View>

        <View style={styles.statsContainerdois}>
          <View style={styles.statBox}>
            <Icon name="star" size={20} color="black" style={styles.statIcon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>Pontos</Text>
            </View>
          </View>

          <View style={styles.statBox}>
            <Icon name="arrow-down" size={20} color="black" style={styles.statIcon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statValue}>0,00 kg</Text>
              <Text style={styles.statLabel}>CO₂ economizado</Text>
            </View>
          </View>
        </View>

        <View style={styles.estatisticas}>
          <TouchableOpacity
            style={styles.btnRedireciona}
            onPress={() => navegarPara('/(tabs)/estatisticas')}
          >
            <Text style={styles.textoBotao}>
              📊 Estatísticas <Icon style={styles.arrowright} name="chevron-right" size={12} color="#ccc" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnRedirecionadois}
            onPress={() => navegarPara('/(tabs)/ranking')}
          >
            <Text style={styles.textoBotao}>
              🏆 Ranking <Icon style={styles.arrowrightduo} name="chevron-right" size={12} color="#ccc" />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containeredit}>
          <Text style={styles.titulo}>Editar Perfil</Text>

          <Text style={styles.titleInput}>Nome*</Text>
          <TextInput
            style={styles.input}
          /*   value={userForm.nome ?? ""} */
            // onChangeText={setUsername}
          />

          <Text style={styles.titleInput}>Usuário*</Text>
          <TextInput
            style={styles.input}
           /*  value={userForm.usuario ?? ""} */
            // onChangeText={setEmail}
          />

          <Text style={styles.titleInput}>Email*</Text>
          <TextInput
            style={styles.input}
          /*   value={userForm.email ?? ""} */
            // onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.titleInput}>Senha*</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            keyboardType="default"
          />

          <TouchableOpacity style={styles.botao} onPress={handleSalvar}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


      <Animated.View style={{ transform: [{ translateY: navbarTranslateY }] }}>
        <Navbar />
      </Animated.View>
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
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    },
    headerContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
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
    statsContainer: {
        width: baseWidth, 
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },
    statsContainerdois: {
        width: baseWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center'
    },
    statBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#71BE70',
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginHorizontal: 10,
        elevation: 5,
        width: baseWidth / 2.1,
    },
    statIcon: {
        marginLeft: 0,
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
    estatisticas: {
        width: baseWidth, 
        marginTop: 20,
        alignSelf: 'center',
        padding: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnRedireciona: {
        width: baseWidth, 
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#71BE70',
    },
    btnRedirecionadois: {
        width: baseWidth,
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
        backgroundColor: '#71BE70',
        padding: 14,
        borderRadius: 30,
        borderWidth: 0,
        alignItems: "center",
        width: baseWidth, 
        alignSelf: 'center'
    },
    containeredit: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: 80,
        width: baseWidth, 
        alignSelf: 'center'
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
        width: baseWidth,
        alignSelf: 'center',
        ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {})
    },
    medal: {
        width: 35,
        height: 35
    }
});
