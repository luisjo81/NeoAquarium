import React, { Component } from 'react'
import { 
    Text,
    View,
    ImageBackground,
    StyleSheet
 } from 'react-native'
import SwitchButton from '../../components/switch.js';
import colors from '../../constants/colors';
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
        <ImageBackground style={styles.background} source={BackgroundBlue}>
                 <View style={styles.container}>
                    <Text style={styles.text}>Encender/Apagar</Text>
                    <SwitchButton
                        _toggleSwitch = {this._toggleSwitch}
                        switchValue = {this.state.switchValue}
                        style={styles.switch}
                    />
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
        height: '30%',
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
        //marginBottom: 20
    },
    switch: {
        flex: 1        
    }
});     