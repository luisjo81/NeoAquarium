import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundBlue from '../../assets/backgrounds/background-2.png';
import MQTTClient from '../../mqtt';

export default class FeatureFood extends React.Component {
    static navigationOptions = {
        title: 'Alimento',
        headerStyle: {
            backgroundColor: colors.black
          },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.white
        },
      };

      constructor(props) {
        super(props);
        this.state = {
        };
      }

      _clickEventListener(key) {
        mqttc = new MQTTClient("dispensar", 1);
        alert('Alimento Dispensado!')
      }
    
      render() {
        return (
            <ImageBackground style={styles.foodScreenBackground} source={BackgroundBlue}>
                 <View style={styles.foodScreenMainContainer}>
                    <TouchableOpacity style={[styles.foodScreenSmallContainer, {backgroundColor:colors.black}]} onPress={() => {this._clickEventListener()}}>
                        <Text style={styles.foodScreenButtonText}>Dispensar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
      }
  }
    
