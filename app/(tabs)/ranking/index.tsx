import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
    // Dados de exemplo para o ranking
    const rankingData = [
        { id: 1, name: 'User01', progress: 0.8 }, // Adicionado progresso para exemplo
        { id: 2, name: 'User02', progress: 0.6 },
        { id: 3, name: 'User03', progress: 0.4 },
        { id: 4, name: 'User04', progress: 0.2 },
        // Adicione mais usuários conforme necessário
    ];

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />
                    <Text style={styles.headerTitle}>Ranking de Economia</Text> 
                </View>
            </View> 

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Texto explicativo */}
                <Text style={styles.text2}>
                Esse mês, você ganhou 334 pontos por reduzir 10% do seu CO2! Continue assim!
                </Text>

                {/* Ranking */}
                <View style={styles.rankingContainer}>
                    {rankingData.map((user) => (
                        <View key={user.id} style={styles.rankingItem}>
                            <View style={styles.rankingItemContent}>
                                <View style={styles.rankingPosition}>
                                    <Text style={styles.rankingPositionText}>{user.id}</Text>
                                </View>
                                <View style={styles.userInfo}>
                                    <Text style={styles.rankingName}>{user.name}</Text>
                                    <View style={styles.progressBar}>
                                        <View style={[styles.progress, { width: `${user.progress * 100}%` }]} />
                                    </View>
                                </View>
                            </View> 
                        </View> 
                    ))}
                </View>
            </ScrollView>

            {/* Navbar */}
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="calculator" size={24} color="black" />
                    <Text style={styles.navText}>Calculadora</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="home" size={24} color="black" />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="user" size={24} color="black" />
                    <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#71BE70',
        width: '100%',
        height: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'relative',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
    },
    logo: {
        width: 70, 
        height: 70,
        marginRight: -15,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 2,
    },
    text2: {
        color: '#00000',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 30,
    },
    rankingContainer: {
        width: '90%',
        marginTop: 25,
    },
    rankingItem: {
        backgroundColor: '#E8F5E9',
        padding: 15,
        marginBottom: 22,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#71BE70',
    },
    rankingItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rankingPosition: {
        backgroundColor: '#71BE70',
        width: 35,
        height: 35,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    rankingPositionText: {
        color: 'white',
        fontWeight: 'bold',
    },
    userInfo: {
        flex: 1,
    },
    rankingName: {
        fontSize: 20,
        marginBottom: 5,
    },
    progressBar: {
        height: 8,
        backgroundColor: '#00000',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: '#71BE70',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#71BE70',
        paddingVertical: 10,
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 14,
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
    },
});