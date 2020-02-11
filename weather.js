import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';

export default class Weather extends Component{
    render(){
        return(
            <LinearGradient 
            colors={["#00C6FB", "#005BEA"]} 
            style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name="ios-rainy"/>
                    <Text style={styles.temp}>35º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining So much...</Text>
                    <Text style={styles.subtitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'flex-start',
        paddingLeft: 25,
    },
    title: {
        fontSize: 38,
        fontWeight: '300',
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    },
    subtitle: {
        fontSize: 20,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
})