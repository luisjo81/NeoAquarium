import React, { Component } from 'react'
import { 
    Text,
    View,
    ImageBackground
 } from 'react-native'
import SwitchButton from '../../components/switch.js';
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundBlue from '../../assets/backgrounds/background-2.png';
import MQTTClient from '../../mqtt';

global.switchState = true;
  
export default class Filtration extends Component {
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
          switchValue: true
      }  
   }

   _toggleSwitch = (value) => {
      this.setState({switchValue: value});
      this.switchState = this.state.switchValue;
      console.log('Switch Value: ' + value);
      if (this.switchState === false){
        mqttc = new MQTTClient("encenderfiltro",0);
      } else{
        mqttc = new MQTTClient("apagarfiltro",0);
      }  
   }

   render() {
      return (
        <ImageBackground style={styles.filtrationScreenBackground} source={BackgroundBlue}>
                 <View style={styles.filtrationScreenMainContainer}>
                    <Text style={styles.filtrationScreenText}>Encender/Apagar</Text>
                    <SwitchButton
                        _toggleSwitch = {this._toggleSwitch}
                        switchValue = {this.state.switchValue}
                        style={styles.filtrationScreenSwitch}
                    />
                </View>
        </ImageBackground>
        );
   }
}
