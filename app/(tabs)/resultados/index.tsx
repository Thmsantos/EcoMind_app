import Navbar from '@/components/navbar/navbar';
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../../../components/header';
import colors from '@/components/colors/colors';

export default function Resultados() {
    return (
        <View style={styles.container}>
            <Header title="Resultados" />

            <ScrollView contentContainerStyle={styles.viewMain}>
                <Text style={styles.textTitulo}>Resultados</Text>

                <View style={styles.groupText}>
                    <View style={styles.groupTextResultadosUm}>
                        <Text style={styles.textResultado}>Eletricidade</Text>
                        <Text style={styles.textResultadoEmissoes}>Emissões CO²: 0,0003</Text>
                        <Text style={styles.textResultado}>Transporte Individual</Text>
                        <Text style={styles.textResultadoEmissoes}>Emissões CO²: 0,0003</Text>
                    </View>

                    <View style={styles.groupTextResultadosDois}>
                        <Text style={styles.textResultado}>Gás</Text>
                        <Text style={styles.textResultadoEmissoes}>Emissões CO²: 0,0003</Text>
                        <Text style={styles.textResultado}>Transporte Coletivo</Text>
                        <Text style={styles.textResultadoEmissoes}>Emissões CO²: 0,0003</Text>
                    </View>
                </View>

                <Text style={styles.textTotalEmissoesBold}>
                    Total emissões CO² : <Text style={styles.textTotalEmissoes}> 0,0015</Text>
                </Text>

                <Image source={require("../../../assets/images/iconePlanta.png")} style={styles.logoPlanta} />

                <View style={styles.textMensagem}>
                    <Text style={styles.textMensagemInner}>
                        Para compensar suas emissões é preciso restaurar 0,04 m² de floresta. Isso equivale a 1 árvores
                    </Text>
                </View>
            </ScrollView>

            <Navbar userId={''} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    viewMain: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 20,
    },

    textTitulo: {
        fontSize: 22,
        paddingTop: 20,
        fontWeight: '800',
        color: colors.secondary,
        letterSpacing: 1,
    },

    groupText: {
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 25,
        gap: 20,
    },

    textResultado: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.secondary,
        letterSpacing: 1,
    },

    textResultadoEmissoes: {
        paddingBottom: 30,
        letterSpacing: 1,
        color: colors.textDark,
    },

    groupTextResultadosUm: {
        paddingBottom: 10,
    },

    groupTextResultadosDois: {},

    textTotalEmissoesBold: {
        paddingLeft: 40,
        fontSize: 22,
        fontWeight: '800',
        color: colors.secondary,
        letterSpacing: 1,
    },

    textTotalEmissoes: {
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 1,
        color: colors.textDark,
    },

    textMensagem: {
        marginTop: 20,
        alignItems: 'center',
        width: 373,
        height: 91,
        backgroundColor: colors.primary,
        borderRadius: 28,
        padding: 20,
        justifyContent: 'center',
    },

    textMensagemInner: {
        fontWeight: '600',
        letterSpacing: 1,
        color: colors.  textPrimary,
        textAlign: 'center',
    },

    logoPlanta: {
        marginTop: 80,
        width: 59,
        height: 59,
    },
});
