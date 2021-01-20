import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { ArrowLeft } from 'react-native-feather';

const Register = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    async function handleSubmit() {
        try {
            
            

        } catch (err) {
            console.error(err.message);
        }
    }
    
    
    return (
        <View style={styles.container}>
            <ArrowLeft onPress={() => {navigation.goBack()}} stroke="#3A0CA3" width={40} height={40} style={{ alignSelf: 'flex-start', marginBottom: 'auto', marginLeft: 10 }}/>
            <Text style={styles.title}>Cadastrar</Text>
            <View style={{width: '100%', alignItems: 'center' }}>
                <TextInput 
                    style={styles.input} 
                    label="Nome" mode="outlined" 
                    autoCompleteType="name" 
                    keyboardType="default"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput 
                    style={styles.input} 
                    label="Email" mode="outlined" 
                    autoCompleteType="email" 
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput 
                    style={styles.input} 
                    label="Senha" mode="outlined" 
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput 
                    style={styles.input} 
                    label="Confirmar senha" 
                    mode="outlined" 
                    value={password2}
                    onChangeText={setPassword2}
                    secureTextEntry
                />
                <RectButton style={styles.button} onPress={handleSubmit}>
                    <Text style={{ color: '#EFEFEF', fontSize: 24, textAlign: 'center' }}>Cadastrar</Text>
                </RectButton>   
            </View>         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 40

    },
    title: {
        fontSize: 48,
        color: '#3A0CA3',
        marginBottom: '30%'
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

export default Register;