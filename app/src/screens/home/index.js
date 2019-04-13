import React, { Component } from 'react';
import { 
    View,
    FlatList,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';

//Server Protocol
import MQTTClient from '../../mqtt';

//Icons
import IconAquarium from '../../assets/icons/aquarium-2.png';
import IconGears from '../../assets/icons/gears.png';
import IconInfo from '../../assets/icons/info.png';
import IconExit from '../../assets/icons/exit.png';

export default class Home extends Component {
    static navigationOptions = {
        title: 'HOME',
        headerStyle: {
            backgroundColor: colors.black
          },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.white
        }
    };

    constructor(props) {
      super(props);
      mqttc = new MQTTClient("encenderfiltro",0);
      this.state = {
        data: [
            {
                key: 1, 
                title: "Mi Acuario", 
                color: colors.blue1, 
                description: "Monitorea tu acuario en tiempo real",  
                image: IconAquarium
            },
            {
                key: 2, 
                title: "Ajustes", 
                color: colors.blue2, 
                description: "Cambia configuraciones de la aplicación", 
                image: IconGears
            },
            {
                key: 3, 
                title: "Acerca de",   
                color: colors.blue2, 
                description: "Obtén información sobre la aplicación",  
                image: IconInfo
            },
            {
                key: 4, 
                title: "Salir",  
                color: colors.blue1, 
                description: "Vuelve a la pantalla de Inicio de Sesión",  
                image: IconExit
            }
        ]
      };
    }
  
    //Selects an option depending of the list item touched
    _clickEventListener(key) {
        if(key === 1){
            this.props.navigation.navigate('Menu');
        }
        if(key === 2){
            alert('Under Construction')
        }
        if(key === 3){
            alert('Desarrollado por Luis Martínez y Rafael Vargas para el curso de SOA');
        }
        if(key === 4){
            this.props.navigation.navigate('Login');
        }
    }
  
    render() {
      return (
        <View style={styles.homeScreenMainContainer}>
          <FlatList style={styles.homeScreenList}
            contentContainerStyle={styles.homeScreenListContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor= {(item) => {
              return item.key;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={[styles.homeScreenCard, {backgroundColor:item.color}]} onPress={() => {this._clickEventListener(item.key)}}>
                  <View style={styles.homeScreenCardHeader}>
                    <Text style={styles.homeScreenListTitleText}>{item.title}</Text>
                  </View>
                  <Image style={styles.homeScreenCardImage} source={item.image}/>
                  <View style={styles.homeScreenCardFooter}>
                    <Text style={styles.homeScreenListInfoText}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}/>
        </View>
      );
    }
}
  