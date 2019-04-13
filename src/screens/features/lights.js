import React, { Component } from 'react'
import { 
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity
 } from 'react-native'
import SwitchButton from '../../components/switch.js'
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundBlue from '../../assets/backgrounds/background-2.png';
import MQTTClient from '../../mqtt';

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
        mqttc = new MQTTClient("encenderfiltro",0);
        alert('Modo fiesta!!')   
    }   

   _toggleSwitch = (value) => {
    this.setState({switchValue: value});
    this.switchState = this.state.switchValue;
    console.log('Switch Value: ' + value);
    if (this.switchState === false){
      mqttc = new MQTTClient("encenderluz",0,0);
    } else{
      mqttc = new MQTTClient("apagarluz",0.0);
    } 
   }

   render() {
      return (
        <ImageBackground style={styles.lightScreenBackground} source={BackgroundBlue}>
                 <View style={styles.lightScreenMainContainer}>
                    <Text style={styles.lightScreenTitleText}>Encender/Apagar</Text>
                    <SwitchButton
                        _toggleSwitch = {this._toggleSwitch}
                        switchValue = {this.state.switchValue}
                        style={styles.lightScreenSwitch}
                    />
                    <Text style={styles.lightScreenTitleText}>Modo Fiesta</Text>
                    <TextInput 
                        placeholder="Minutos" 
                        placeholderTextColor = {colors.transparentWhite}
                        keyboardType='number-pad'
                        returnKeyType='done'
                        style={styles.lightScreenInput}
                    />
                    <TouchableOpacity style={[styles.lightScreenButtonBox, {backgroundColor:colors.black}]} onPress={() => {this._clickEventListener()}}>
                        <Text style={styles.lightScreenButtonText}>Comenzar</Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
        );
   }
}
 