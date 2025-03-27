import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
    return (
        <View style={styles.container}>

            {/* Cabeçalho */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />
                    <Text style={styles.headerTitle}>Meu Perfil</Text>
                </View>
            </View>  

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Foto do usuário */}
                <View style={styles.containerAvatar}>
                   <Image source={require("../../../assets/images/avatar.png")} style={styles.avatar} />
                   <Text style={styles.username}>User01</Text>
                </View>
                
                {/* Informações do usuário */}
                <Text style={styles.email}>user01@gmail.com</Text>

                <TouchableOpacity>
                    <Text style={styles.editProfile}>Editar usuário</Text>
                </TouchableOpacity>

                {/* Estatísticas */}
                <Text style={styles.sectionTitle}>Estatísticas</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Icon name="arrow-down" size={20} color="black" style={styles.statIcon} />
                        <View>
                            <Text style={styles.statValue}>0,00 kg</Text>
                            <Text style={styles.statLabel}>CO₂ economizado</Text>
                        </View>
                    </View>
                    <View style={styles.statBox}>
                        <Icon name="star" size={20} color="black" style={styles.statIcon} />
                        <View>
                            <Text style={styles.statValue}>0</Text>
                            <Text style={styles.statLabel}>Pontos</Text>
                        </View>
                    </View>
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
        height: 100,  // Aumentei um pouco para centralizar melhor
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
    containerAvatar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 40,
        marginLeft: -180,
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 2,
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 40,
        color: '#000',
        marginLeft: 15,
    },
    email: {
        fontSize: 24,
        color: '#000',
        marginBottom: 25,
        marginLeft: -170,
    },
    editProfile: {
        fontSize: 24,
        color: 'blue',
        marginLeft: -183,
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 60,
        marginLeft: -240,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    statBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#71BE70',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginHorizontal: 10,
        width: 180,
        justifyContent: 'center',
    },
    statIcon: {
        marginRight: 18,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginLeft: -60,
    },
    statLabel: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000',
        marginLeft: -1,

    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F8F8F8',
        paddingVertical: 10,
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: '#DADADA',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 14,
        color: 'black',
        marginTop: 5,
    },
});
