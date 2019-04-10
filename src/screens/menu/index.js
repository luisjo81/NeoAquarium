import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from 'react-native';
import colors from '../../constants/colors';
import IconHumidity from '../../assets/icons/water.png';
import IconFood from '../../assets/icons/food.png';
import IconPump from '../../assets/icons/pump.png';
import IconLight from '../../assets/icons/light.png';
import IconTemperature from '../../assets/icons/thermometer.png';
import IconLevel from '../../assets/icons/water-level.png';
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
            //this.props.navigation.navigate('Menu');
        }
        if(key === "humidity"){
            
        }
        if(key === "level"){
            //this.props.navigation.navigate('Menu');
        }
      }
    
      render() {
        return (
            <ImageBackground style={styles.background} source={BackgroundBlue}>
                 <View style={styles.container}>
                    <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    horizontal={true}
                    keyExtractor={(item) => {
                        return item.key;
                    }}
                    renderItem={({item}) => {
                        return (
                        <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this._clickEventListener(item.key)}}>
                            <View style={styles.cardHeader}>
                              <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <Image style={styles.cardImage} source={item.image}/>
                        </TouchableOpacity>
                        )
                    }}/>
                </View>
                <View style={styles.optionContainer}>
                  <ImageBackground style={styles.background} source={BackgroundMov}>

                  </ImageBackground>
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
      marginTop: 5
    },
    list: {
      paddingBottom: '50%',
      height: 10
    },
    listContainer:{
      alignItems:'center'
    },
    card:{
      marginHorizontal: 2,
      flexBasis: '48%',
      width: 150,
      height: 200,
      borderWidth: 2,
      borderColor: colors.blue2
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
      paddingHorizontal: 16
    },
    cardImage:{
      height: 90,
      width: 90,
      alignSelf: 'center',
      marginTop: 5
    },
    title:{
      fontSize:16,
      flex:1,
      color: colors.white,
      fontWeight:'bold',
      textAlign: 'center',
      marginTop: 42
    },
    optionContainer: {
      height: '70%'
    }
});     