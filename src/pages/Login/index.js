import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation, setAuth }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit () {
        try {
            
            const body = { email, password };

            const response = await fetch("http://10.0.2.2:3333/login", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();

            if (parseResponse.token) {
                AsyncStorage.setItem("token", parseResponse.token);
                
                setAuth(true);
                console.log("Login realizado com sucesso!");
            } else {
                setAuth(false);
                console.log(parseResponse);
            }

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput 
                style={styles.input} 
                label="Email" mode="outlined" 
                autoCompleteType="email" 
                keyboardType="email-address"
                value={email}
                onChangeText={(value) => setEmail(value)}
            />
            <TextInput 
                style={styles.input} 
                label="Senha" mode="outlined" 
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
            />
            <RectButton style={styles.button} onPress={handleSubmit}>
                <Text style={{ color: '#EFEFEF', fontSize: 24, textAlign: 'center' }}>Entrar</Text>
            </RectButton>
            <Text onPress={() => {navigation.navigate('Register')}} style={{ fontSize: 16, color: '#7209B7', marginLeft: 90, marginBottom: 20, fontWeight: 'bold' }}>Não é registrado? Crie uma conta</ Text>
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