import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from 'react-native';
import colors from '../../constants/colors';
import styles from '../../constants/styles';

//Icons
import IconHumidity from '../../assets/icons/water.png';
import IconFood from '../../assets/icons/food.png';
import IconPump from '../../assets/icons/pump.png';
import IconLight from '../../assets/icons/light.png';
import IconTemperature from '../../assets/icons/thermometer.png';
import IconLevel from '../../assets/icons/water-level.png';
//Backgrounds
import BackgroundBlue from '../../assets/backgrounds/background-2.png';
import BackgroundMov from '../../assets/backgrounds/background-mov.gif';

export default class Menu extends React.Component {
    static navigationOptions = {
        title: 'MI ACUARIO',
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
          data: [
              {
                key: "food", 
                title: "Alimento", 
                color: colors.black, 
                image: IconFood
              },
              {
                key: "pump", 
                title: "Filtración",   
                color: colors.black,
                image: IconPump
              },
              {
                key: "light", 
                title: "Iluminación",  
                color: colors.black,
                image: IconLight
              },
              {
                key: "temperature", 
                title: "Temperatura",  
                color: colors.black,
                image: IconTemperature
              },
              {
                key: "humidity", 
                title: "Humedad", 
                color: colors.black,  
                image: IconHumidity
              },
              {
                key: "level", 
                title: "Nivel de Agua",  
                color: colors.black,
                image: IconLevel
              }
          ]
        };
      }
    
      _clickEventListener(key) {
        if(key === "food"){
          this.props.navigation.navigate('Food');
        }
        if(key === "pump"){
          this.props.navigation.navigate('Filtration');
        }
        if(key === "light"){
          this.props.navigation.navigate('Light');
        }
        if(key === "temperature"){
          this.props.navigation.navigate('Temperature');
        }
        if(key === "humidity"){
          this.props.navigation.navigate('Humidity');
        }
        if(key === "level"){
          this.props.navigation.navigate('WaterLevel');
        }
      }
    
      render() {
        return (
            <ImageBackground style={styles.menuScreenBackground} source={BackgroundBlue}>
                 <View style={styles.menuScreenMainContainer}>
                    <FlatList style={styles.menuScreenList}
                    contentContainerStyle={styles.menuScreenListContainer}
                    data={this.state.data}
                    horizontal={true}
                    keyExtractor={(item) => {
                        return item.key;
                    }}
                    renderItem={({item}) => {
                        return (
                        <TouchableOpacity style={[styles.menuScreenCard, {backgroundColor:item.color}]} onPress={() => {this._clickEventListener(item.key)}}>
                            <View style={styles.menuScreenCardHeader}>
                              <Text style={styles.menuScreenTitleText}>{item.title}</Text>
                            </View>
                            <Image style={styles.menuScreenCardImage} source={item.image}/>
                        </TouchableOpacity>
                        )
                    }}/>
                </View>
                <View style={styles.menuScreenOptionContainer}>
                  <ImageBackground style={styles.menuScreenBackground} source={BackgroundMov}>
                  </ImageBackground>
                </View>
            </ImageBackground>
        );
      }
  }
   