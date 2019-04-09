import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from 'react-native';
import colors from '../../constants/colors';
import BackgroundBlue from '../../assets/backgrounds/background-2.png';

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
          alert('Alimento Dispensado!')
      }
    
      render() {
        return (
            <ImageBackground style={styles.background} source={BackgroundBlue}>
                 <View style={styles.container}>
                    <TouchableOpacity style={[styles.box, {backgroundColor:colors.black}]} onPress={() => {this._clickEventListener()}}>
                        <Text style={styles.buttonText}>Dispensar</Text>
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
        flex: 1,
        marginTop: '60%',
        alignItems: 'center'
    },
    buttonText: { 
        fontSize: 25,
        flex: 1,
        color: colors.white,
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    box:{
        marginHorizontal: 2,
        width: 200,
        height: 80,
        borderWidth: 2,
        borderColor: colors.blue2
      },
});     