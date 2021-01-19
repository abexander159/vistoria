import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} label="Email" mode="outlined" autoCompleteType="email" keyboardType="email-address"/>
            <TextInput style={styles.input} label="Senha" mode="outlined" secureTextEntry/>
            <RectButton style={styles.button} onPress={() => {}}>
                <Text style={{ color: '#EFEFEF', fontSize: 24, textAlign: 'center' }}>Entrar</Text>
            </RectButton>
            <Text style={{ fontSize: 16, color: '#7209B7', marginLeft: 90, marginBottom: 20 }}>Não é registrado? Crie uma conta</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    title: {
        fontSize: 48,
        color: '#3A0CA3',
        marginBottom: '60%'
    },
    input: {
        borderColor: '#7209B7',
        width: '85%',
        borderRadius: 8,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#560BAD',
        width: '85%',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20
    }
});

export default Login;