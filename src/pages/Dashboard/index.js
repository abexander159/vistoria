import React from 'react';
import { View, StyleSheet } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboardaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3A0CA3',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});

export default Dashboard;