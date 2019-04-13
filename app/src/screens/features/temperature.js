import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground 
} from 'react-native';
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundBlue from '../../assets/backgrounds/background-2.png';
import MQTTClient from '../../mqtt';
 
export default class Temperature extends Component
{
    constructor()
    {
        super();
        this.state = { 
            actualTemperature: null
        }  
    }
 
    componentWillMount()
    {
        this.getTemperature();
    }
 
    getTemperature = () =>
    {
        let celsiusGrades = new Date().getSeconds();
 
        if( celsiusGrades < 10 )
        {
            celsiusGrades = '0' + celsiusGrades;
        }   
 
        this.setState({ actualTemperature: celsiusGrades + ' °C' });    
    }
 
    componentWillUnmount()
    {
        clearInterval(this.timer);
    }
 
    componentDidMount()
    {
        this.timer = setInterval(() =>
        {
            this.getTemperature();
        }, 1000);
    }
 
    render()
    {
        return(
            <ImageBackground style={styles.temperatureScreenBackground} source={BackgroundBlue}> 
                <View style = { styles.temperatureScreenMainContainer}>
                    <View>
                        <Text style = { styles.temperatureScreenTitleText}>Temperatura</Text>
                        <Text style = { styles.temperatureScreenDataText }>{ this.state.actualTemperature }</Text>                    
                    </View>
                </View>
            </ImageBackground>
            
        );
    }
}
 