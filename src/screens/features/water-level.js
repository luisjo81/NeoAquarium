import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground 
} from 'react-native';
import colors from '../../constants/colors';
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
            <ImageBackground style={styles.background} source={BackgroundBlue}> 
                <View style = { styles.container }>
                    <View>
                        <Text style = { styles.titleText }>Nivel de agua</Text>
                        <Text style = { styles.dataText }>{ this.state.isLevelCorrect }</Text>                    
                    </View>
                </View>
            </ImageBackground>
            
        );
    }
}
 
const styles = StyleSheet.create(
{
    background: 
    {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    container:
    {
        marginTop: '40%',
        marginLeft: '17%',
        width: '65%',
        height: '30%',
        borderWidth: 2,
        borderColor: colors.blue2,
        backgroundColor: 'rgba(0,0,0, .5)',
        alignItems: 'center'

    },
    dataText:
    {
        fontSize: 40,
        color: colors.white,
        marginTop: 20,
        textAlign: 'center'
    },
    titleText:
    {
        color: colors.white,
        fontSize: 30,
        marginTop: 5
    }
});