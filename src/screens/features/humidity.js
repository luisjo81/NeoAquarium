import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ImageBackground 
} from 'react-native';
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundBlue from '../../assets/backgrounds/background-2.png';
import MQTTClient from '../../mqtt';
 
export default class Humidity extends Component
{
    constructor()
    {
        super();
        this.state = { 
            actualHumidity: null
        }  
    }
 
    componentWillMount()
    {
        this.getHumidity();
    }
 
    getHumidity = () =>
    {
        let humidityPercentage = new Date().getSeconds();
 
        if( humidityPercentage < 10 )
        {
            humidityPercentage = '0' + humidityPercentage;
        }   
 
        this.setState({ actualHumidity: humidityPercentage + ' %' });    
    }
 
    componentWillUnmount()
    {
        clearInterval(this.timer);
    }
 
    componentDidMount()
    {
        this.timer = setInterval(() =>
        {
            this.getHumidity();
        }, 1000);
    }
 
    render()
    {
        return(
            <ImageBackground style={styles.humidityScreenBackground} source={BackgroundBlue}> 
                <View style = { styles.humidityScreenMainContainer }>
                    <View>
                        <Text style = { styles.humidityScreenTitleText }>Humedad</Text>
                        <Text style = { styles.humidityScreenDataText }>{ this.state.actualHumidity }</Text>                    
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
