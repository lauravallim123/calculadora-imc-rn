import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    title: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#89ff9b',
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        fontSize: 16,
        marginTop: 20,
        paddingLeft: 10
    },
    button: {
        backgroundColor: '#358c46',
        width: '80%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    resultado: {
        fontSize: 20,
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default function App() {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [idade, setIdade] = useState('')
    const [resultado, setResultado] = useState('')

    function calcular() {
        const pesoF = parseFloat(peso)
        const alturaF = parseFloat(altura)
        const idadeF = parseInt(idade)

        const imc = pesoF / (alturaF * alturaF)

        let classificacao = ''

        if (idadeF > 20) {
            if (imc < 18.5) {
                classificacao = 'Abaixo do peso'
            } else if (imc < 24.9) {
                classificacao = 'Peso saudável'
            } else if (imc < 29.9) {
                classificacao = 'Sobrepeso'
            } else if (imc < 35) {
                classificacao = 'Obesidade grau I'
            } else if (imc < 40) {
                classificacao = 'Obesidade grau II'
            } else {
                classificacao = 'Obesidade grau III'
            }
        } else if (idadeF >= 2 && idadeF <= 19) {
            if (imc < 18.5) {
                classificacao = 'Abaixo do peso'
            } else if (imc < 24.9) {
                classificacao = 'Peso saudável'
            } else if (imc < 29.9) {
                classificacao = 'Sobrepeso'
            } else {
                classificacao = 'Obesidade'
            }
        } 

        setResultado(`IMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`)
    }

    function limpar() {
        setAltura('')
        setPeso('')
        setIdade('')
        setResultado('')
    }

    return (
        <View style={styleApp.container}>
            <Text style={styleApp.title}>Aplicativo para calcular{'\n'}IMC</Text>

            <TextInput
                value={peso}
                onChangeText={setPeso}
                style={styleApp.input}
                placeholder='Peso'
                keyboardType='numeric'
            />
            <TextInput
                value={altura}
                onChangeText={setAltura}
                style={styleApp.input}
                placeholder='Altura'
                keyboardType='numeric'
            />
            <TextInput
                value={idade}
                onChangeText={setIdade}
                style={styleApp.input}
                placeholder='Idade'
                keyboardType='numeric'
            />

            <TouchableOpacity style={styleApp.button} onPress={calcular}>
                <Text style={styleApp.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styleApp.button} onPress={limpar}>
                <Text style={styleApp.buttonText}>Limpar</Text>
            </TouchableOpacity>

            {resultado ? <Text style={styleApp.resultado}>{resultado}</Text> : null}
        </View>
    )
}