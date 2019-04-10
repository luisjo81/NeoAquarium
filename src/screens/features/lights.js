import React, { Component } from 'react'
import { 
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    StyleSheet
 } from 'react-native'
import SwitchButton from '../../components/switch.js'
import colors from '../../constants/colors';
import BackgroundBlue from '../../assets/backgrounds/background-2.png';

export default class Light extends Component {
    static navigationOptions = {
        title: 'Filtración',
        headerStyle: {
            backgroundColor: colors.black
          },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.white
        },
      };

   constructor() {
      super();
      this.state = {
         switchValue: true,
      }
   }

   _clickEventListener(key) {
    alert('Modo fiesta!!')
    }   

   _toggleSwitch = (value) => {
      this.setState({switchValue: value})
      console.log('Switch Value: ' + value)
   }

   render() {
      return (
        <ImageBackground style={styles.background} source={BackgroundBlue}>
                 <View style={styles.container}>
                    <Text style={styles.text}>Encender/Apagar</Text>
                    <SwitchButton
                        _toggleSwitch = {this._toggleSwitch}
                        switchValue = {this.state.switchValue}
                        style={styles.switch}
                    />
                    <Text style={styles.text}>Modo Fiesta</Text>
                    <TextInput 
                        placeholder="Minutos" 
                        placeholderTextColor = 'rgba(255,255,255,0.7)'
                        keyboardType='number-pad'
                        returnKeyType='done'
                        style={styles.input}
                    />
                    <TouchableOpacity style={[styles.buttonBox, {backgroundColor:colors.black}]} onPress={() => {this._clickEventListener()}}>
                        <Text style={styles.buttonText}>Comenzar</Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
        );
   }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    container: {
        marginTop: '25%',
        marginLeft: '17%',
        width: '65%',
        height: '70%',
        borderWidth: 2,
        borderColor: colors.blue2,
        backgroundColor: 'rgba(0,0,0, .5)',
        alignItems: 'center'
    },
    text: { 
        fontSize: 15,
        flex: 1,
        color: colors.white,
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    switch: {
        flex: 1        
    },
    input: {
        height: 40,
        width: 80,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: colors.white,
        paddingHorizontal: 10
    },
    buttonText: { 
        fontSize: 12,
        flex: 1,
        color: colors.white,
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    buttonBox:{
        marginHorizontal: 2,
        width: 95,
        height: 58,
        borderWidth: 2,
        borderColor: colors.blue2
      },
});     