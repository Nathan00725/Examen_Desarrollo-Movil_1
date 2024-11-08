import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { useCuenta } from '../../Context/Proviader';

export default function Historial() {
    const { transacciones } = useCuenta();

    return (
        <View style={styles.container}>
            <Text>Historial de Transacciones:</Text>
            <FlatList
                data={transacciones}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Text>{item.texto_usar}</Text>}
                ListEmptyComponent={<Text>No hay transacciones</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
