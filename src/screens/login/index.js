import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import colors from '../../constants/colors';
import BackgroundFish from '../../assets/backgrounds/background-1.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    _clickEventListener() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={BackgroundFish}>
                <KeyboardAvoidingView behavior={'padding'} style={styles.mainContainer}>
                    <Text style={styles.title}>Neo Aquarium</Text>
                    <View style={styles.formContainer}>
                        <View style={styles.container}>
                            <TextInput 
                                placeholder="Usuario" 
                                placeholderTextColor = 'rgba(255,255,255,0.7)'
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}/>
                            <TextInput 
                                placeholder="Contraseña"
                                placeholderTextColor = 'rgba(255,255,255,0.7)'
                                secureTextEntry 
                                style={styles.input}/>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => {this._clickEventListener()}}>
                                <Text style={styles.buttonText}>Ingresar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
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
    title: {
        flex: 1,
        color: colors.white,
        marginTop: 10,
        width: '100%',
        height: '10%',
        textAlign: 'center',
        fontFamily: 'Verdana',
        fontSize: 40,
    },
    mainContainer: {
        flex: 1
    },
    formContainer: {
        flex: 1
    },
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: colors.white,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: colors.blue2,
        padding: 15
    },
    buttonText: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: '700'
    }
})