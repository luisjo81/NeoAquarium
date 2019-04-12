import React, { Component } from 'react'
import { 
    Text,
    View,
    ImageBackground,
    StyleSheet
 } from 'react-native'
import colors from '../../constants/colors';
import BackgroundBlue from '../../assets/backgrounds/background-2.png';

export default class Temperature extends Component {
    static navigationOptions = {
        title: 'Temperatura',
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
         
      }
   }

   _updateInfo() {
       
   }

   render() {
      return (
        <ImageBackground style={styles.background} source={BackgroundBlue}>
                 <View style={styles.container}>
                    <Text style={styles.text}>Encender/Apagar</Text>
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
    }
});     