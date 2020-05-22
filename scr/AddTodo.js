import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert, Text } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    var [value1, setValue1]  = useState(value1);
    var [value2, setValue2]  = useState(value2);
    var S

    const pressHandler = () => {
        if (value1 >= 0) {
            S = 0.5 * value1 * value2;
            Alert.alert("Площадь треугольника равна: " + S)
        } 
        else {
            Alert.alert('Введите положительные числа в поля');
        }
    };

    return (
        <View>
            <View style = {styles.block1}>
                <Text style = {styles.form1}>S = 0.5 * a * h</Text>
            </View>
            <View style = {styles.block2}>
                <Text style = {styles.form2}>S - площадь</Text>
                <Text style = {styles.form2}>a - основание</Text>
                <Text style = {styles.form2}>h — высота</Text>
            </View>
            <View style = {styles.block3}>
                <Text style = {styles.form1}>Введите основание:  </Text>
                <TextInput 
                    placeholder = '0'    
                    style = {styles.input}
                    keyboardType = 'numeric'  
                    onChangeText = {setValue1}                                      
                    value1 = {value1}
                    maxLength = {8}
                />
            </View>
            <View style = {styles.block3}>
                <Text style = {styles.form1}>Введите высоту:  </Text>
                <TextInput 
                    placeholder = '0'                
                    style = {styles.input}
                    keyboardType = 'numeric'  
                    onChangeText = {setValue2}                  
                    value2 = {value2}
                    maxLength = {8}                    
                />
            </View>
            <View style = {styles.buttons}>
                <Button color = 'black' title = " Рассчитать " onPress = {pressHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form1: {
        fontSize: 25
    },
    form2: {
        fontSize: 15,
        fontStyle: 'italic'
    },
    block1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10        
    },
    block2: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 15
    },
    block3: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 3        
    },
    input: {
        width: '30%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        fontSize: 20,
        textAlign: 'center',
        borderBottomColor: 'black'
    },
    buttons: {
      width: '100%',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 15
    }
});