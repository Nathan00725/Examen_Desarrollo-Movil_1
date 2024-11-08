import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { useCuenta } from '../../Context/Proviader';

export default function Inicio({ navigation }: any) {
    const { dinero, transacciones, depositar } = useCuenta();

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>¡Hola, Usuario!</Text>
            <Text style={styles.dineroText}>Saldo Actual: L.{dinero}</Text>
            <FlatList
                data={transacciones}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Text>{item.texto_usar}</Text>}
                ListEmptyComponent={<Text>No hay transacciones</Text>}
            />
            <View style={styles.buttonContainer}>
                <Button title="Depositar L.500" onPress={depositar} />
                <View style={styles.buttonGroup}>
                    <Button title="Ir a Transferencias" onPress={() => navigation.navigate('Transferencias')} />
                    <Button title="Ver Historial" onPress={() => navigation.navigate('Historial')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 20,
        marginBottom: 10,
    },
    dineroText: {
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonGroup: {
        flexDirection: 'row',
        marginTop: 10,
    },
});
