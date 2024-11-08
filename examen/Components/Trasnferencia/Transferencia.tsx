import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useCuenta } from '../../Context/Proviader';

export default function Transferencias() {
    const [cantidad, setCantidad] = useState('');
    const [receptor, setReceptor] = useState('');
    const { transferir } = useCuenta();

    const handleTransferencia = () => {
        const cantidadNumero = parseFloat(cantidad);
        if (!isNaN(cantidadNumero) && cantidadNumero > 0) {
            if (transferir(cantidadNumero, receptor)) {
                Alert.alert("Transferencia exitosa");
            } else {
                Alert.alert("Fondos insuficientes para la transferencia");
            }
        } else {
            Alert.alert("cantidad inválido. Introduzca un número válido mayor que 0.");
        }
        setCantidad('');
        setReceptor('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Número de Cuenta"
                value={receptor}
                onChangeText={setReceptor}
                style={styles.input}
            />
            <TextInput
                placeholder="cantidad a Transferir"
                value={cantidad}
                onChangeText={setCantidad}
                keyboardType="numeric"
                style={styles.input}
            />
            <Button title="Transferir Saldo" onPress={handleTransferencia} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        padding: 10,
    },
});
