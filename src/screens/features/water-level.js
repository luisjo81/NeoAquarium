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
 
export default class WaterLevel extends Component
{
    constructor()
    {
        super();
        this.state = { 
            isLevelCorrect: null
        }  
    }
 
    componentWillMount()
    {
        this.getWaterLevel();
    }
 
    getWaterLevel = () =>
    {
        if(this.isLevelCorrect === true){
            this.setState({ isLevelCorrect: true }); 
        } else {
            this.setState({ isLevelCorrect: false}); 
        } 
    }
 
    componentWillUnmount()
    {
        clearInterval(this.timer);
    }
 
    componentDidMount()
    {
        this.timer = setInterval(() =>
        {
            this.getWaterLevel();
        }, 1000);
    }
 
    render()
    {
        return(
            <ImageBackground style={styles.waterLevelScreenBackground} source={BackgroundBlue}> 
                <View style = { styles.waterLevelScreenMainContainer }>
                    <View>
                        <Text style = { styles.waterLevelScreenTitleText}> Nivel de agua</Text>
                        <Text style = { styles.waterLevelScreenDataText }>{ this.state.isLevelCorrect }</Text>                    
                    </View>
                </View>
            </ImageBackground>
            
        );
    }
}
