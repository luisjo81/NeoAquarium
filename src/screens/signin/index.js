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
import BackgroundBlue from '../../assets/backgrounds/background-2.png';

global.ipAddress = '192.168.43.175'
global.port = 4000

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: ''
        };
    }
  
    _onEmailTextChanged = event => {
        this.setState({
            email: event.nativeEvent.text,
        });
    }

    _onFirstNameChanged = event => {
        this.setState({
            firstName: event.nativeEvent.text,
        });
    }

    _onLastNameChanged = event => {
        this.setState({
            lastName: event.nativeEvent.text,
        });
    }

    _onPasswordTextChanged = event => {
        this.setState({
            password: event.nativeEvent.text,
        });
    }

    _onPhoneNumberTextChanged = event => {
        this.setState({
            phoneNumber: event.nativeEvent.text,
        });
    }

    _onUserNameTextChanged = event => {
        this.setState({
            userName: event.nativeEvent.text,
        });
    }

    _printUserData (){
        console.log('Username:' + this.state.userName);
        console.log('First Name:' + this.state.firstName);
        console.log('Last Name:' + this.state.lastName);
        console.log('Email:' + this.state.email);
        console.log('Phone Number:' + this.state.phoneNumber);
        console.log('Password:' + this.state.password);
    }

    _registerUser() {
        url = "http://" + ipAddress + ":" + port + "/api/v1/login";
        const formData = new FormData();
        formData.append('username', this.state.userName),
        formData.append('name', this.state.firstName),
        formData.append('lastName', this.state.lastName),
        formData.append('password', this.state.password),
        formData.append('email', this.state.email),
        formData.append('cell', this.state.phoneNumber)

        console.log("url:"+url);
      
        fetch(url,{
              method: 'POST',
              body: formData
              }).then(function (response) {
                return response.json();
              }).then(function (result) { 
                console.log(result);
                if(!result.error){
                 this.setState({ 
                                status: result.error,
                                wholeResult: result
                              });
                 alert("Registro completado");
                 console.log("User signed succesfully");
                 this._printUserData();
                 this._setDefaultData();
                 this.props.navigation.navigate('Home');
                }else{
                    Alert.alert("Problema al registrarse, inténtelo de nuevo");
                    console.log(result);
                    }
                }).catch(function (error) {
                    console.log("ERROR: " + error);
                    alert("Result:" + error)
                });
    }

    _setDefaultData() {
        this.setState({
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: ''
        });
    }

    _verifyUserForm() {
        if (
            this.state.userName === '' ||
            this.state.firstName === '' ||
            this.state.lastName === '' ||
            this.state.email === '' ||
            this.state.phoneNumber === '' ||
            this.state.password === '' 
            )
            {
                alert("Se deben completar todos los espacios");
            } else {
                this._registerUser()
            }
        
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={BackgroundBlue}>
                <KeyboardAvoidingView behavior={'padding'} style={styles.mainContainer}>
                    <Text style={styles.title}>Registrarse</Text>
                    <View style={styles.formContainer}>
                        <View style={styles.container}>
                            <TextInput 
                                placeholder="Usuario" 
                                placeholderTextColor = 'rgba(255,255,255,0.7)'
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={this.state.userName}
                                onChange={this._onUserNameTextChanged}
                                style={styles.input}/>
                            <TextInput 
                                placeholder="Nombre" 
                                placeholderTextColor = 'rgba(255,255,255,0.7)'
                                autoCorrect={false}
                                value={this.state.firstName}
                                onChange={this._onFirstNameChanged}
                                style={styles.input}/>
                            <TextInput 
                                placeholder="Apellido" 
                                placeholderTextColor = 'rgba(255,255,255,0.7)'
                                autoCorrect={false}
                                value={this.state.lastName}
                                onChange={this._onLastNameChanged}
                                style={styles.input}/>
                            <TextInput 
                                placeholder="Correo electrónico" 
                                placeholderTextColor = 'rgba(255,255,255,0.7)'
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={this.state.email}
                                onChange={this._onEmailTextChanged}
                                style={styles.input}/>
                            <TextInput 
                                placeholder="Número Telefónico" 
                                placeholderTextColor = 'rgba(255,255,255,0.7)'
                                keyboardType='phone-pad'
                                returnKeyType='done'
                                value={this.state.phoneNumber}
                                onChange={this._onPhoneNumberTextChanged}
                                style={styles.input}/>
                            <TextInput 
                                placeholder="Contraseña"
                                placeholderTextColor = 'rgba(255,255,255,0.7)'
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                                value={this.state.password}
                                onChange={this._onPasswordTextChanged} 
                                style={styles.input}/>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => {this._verifyUserForm()}}>
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
        flex: 1,
        marginBottom: 270
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