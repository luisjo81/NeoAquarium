import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import colors from '../../constants/colors';
import IconAquarium from '../../assets/icons/aquarium-2.png';
import IconGears from '../../assets/icons/gears.png';
import IconInfo from '../../assets/icons/info.png';
import IconExit from '../../assets/icons/exit.png';
import MQTTClient from '../../mqtt';

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
  
    _clickEventListener(key) {
        if(key === 1){
            this.props.navigation.navigate('Menu');
        }
        if(key === 2){
            //this.props.navigation.navigate('Menu');
        }
        if(key === 3){
            //this.props.navigation.navigate('Menu');
        }
        if(key === 4){
            this.props.navigation.navigate('Login');
        }
    }
  
    render() {
      return (
        <View style={styles.container}>
          <FlatList style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor= {(item) => {
              return item.key;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this._clickEventListener(item.key)}}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <Image style={styles.cardImage} source={item.image}/>
                  <View style={styles.cardFooter}>
                    <Text style={styles.subTitle}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}/>
        </View>
      );
    }
}
  
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        backgroundColor: colors.black
    },
    list: {
        backgroundColor:colors.black,
    },
    listContainer:{
        alignItems:'center'
    },
    card:{
        marginHorizontal:2,
        marginVertical:2, 
        flexBasis: '48%',
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems:"center", 
        justifyContent:"center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage:{
        height: 70,
        width: 70,
        alignSelf:'center'
    },
    title:{
        fontSize:16,
        flex:1,
        color: colors.white,
        fontWeight:'bold',
        textAlign: 'center'
    },
    subTitle:{
        fontSize:12,
        flex:1,
        color: colors.white,
        textAlign: 'center'
    },
    icon:{
        height: 20,
        width: 20, 
    }
});     