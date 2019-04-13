import React, { Component } from 'react';
import {
    ImageBackground,
    KeyboardAvoidingView,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import colors from '../../constants/colors';
import styles from '../../constants/styles';
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

    _printUserData() {
        console.log('Username:' + this.state.userName);
        console.log('First Name:' + this.state.firstName);
        console.log('Last Name:' + this.state.lastName);
        console.log('Email:' + this.state.email);
        console.log('Phone Number:' + this.state.phoneNumber);
        console.log('Password:' + this.state.password);
    }

    //Connect with the server to create user
    _registerUser() {
        url = "http://" + ipAddress + ":" + port + "/api/v1/login";
        const formData = new FormData();
        formData.append('userName', this.state.userName),
            formData.append('name', this.state.firstName),
            formData.append('lastName', this.state.lastName),
            formData.append('password', this.state.password),
            formData.append('email', this.state.email),
            formData.append('cell', this.state.phoneNumber)

        console.log("url:" + url);

        fetch(url, {
            method: 'POST',
            body: formData
        }).then(function (response) {
            return response.json();
        }).then(function (result) {
            console.log(result);
            if (!result.error) {
                this.setState({
                    status: result.error,
                    wholeResult: result
                });
                alert("Registro completado");
                console.log("User signed succesfully");
                this._printUserData();
                this._setDefaultData();
                this.props.navigation.navigate('Login');
            } else {
                Alert.alert("Problema al registrarse, inténtelo de nuevo");
                console.log(result);
            }
        }).catch(function (error) {
            //console.log("ERROR: " + error);
            //alert("Result:" + error)
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

    //Checks if all the spaces in form have information
    _verifyUserForm() {
        if (
            this.state.userName === '' ||
            this.state.firstName === '' ||
            this.state.lastName === '' ||
            this.state.email === '' ||
            this.state.phoneNumber === '' ||
            this.state.password === ''
        ) {
            alert("Se deben completar todos los espacios");
        } else {
            this._registerUser()
        }

    }

    render() {
        return (
            <ImageBackground style={styles.signinScreenBackground} source={BackgroundBlue}>
                <KeyboardAvoidingView behavior={'padding'} style={styles.signinScreenMainContainer}>
                    <Text style={styles.signinScreenTitleText}>Registro</Text>
                    <View style={styles.signinScreenFormContainer}>
                        <View style={styles.signinScreenSecondContainer}>
                            <TextInput
                                placeholder="Usuario"
                                placeholderTextColor={colors.transparentWhite}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={this.state.userName}
                                onChange={this._onUserNameTextChanged}
                                style={styles.signinScreenInputContainer} />
                            <TextInput
                                placeholder="Nombre"
                                placeholderTextColor={colors.transparentWhite}
                                autoCorrect={false}
                                value={this.state.firstName}
                                onChange={this._onFirstNameChanged}
                                style={styles.signinScreenInputContainer} />
                            <TextInput
                                placeholder="Apellido"
                                placeholderTextColor={colors.transparentWhite}
                                autoCorrect={false}
                                value={this.state.lastName}
                                onChange={this._onLastNameChanged}
                                style={styles.signinScreenInputContainer} />
                            <TextInput
                                placeholder="Correo Electrónico"
                                placeholderTextColor={colors.transparentWhite}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={this.state.email}
                                onChange={this._onEmailTextChanged}
                                style={styles.signinScreenInputContainer} />
                            <TextInput
                                placeholder="Número Telefónico"
                                placeholderTextColor={colors.transparentWhite}
                                keyboardType='phone-pad'
                                returnKeyType='done'
                                value={this.state.phoneNumber}
                                onChange={this._onPhoneNumberTextChanged}
                                style={styles.signinScreenInputContainer} />
                            <TextInput
                                placeholder="Contraseña"
                                placeholderTextColor={colors.transparentWhite}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                                value={this.state.password}
                                onChange={this._onPasswordTextChanged}
                                style={styles.signinScreenInputContainer} />
                            <TouchableOpacity style={styles.signinScreenButtonContainer} onPress={() => { this._verifyUserForm() }}>
                                <Text style={styles.signinScreenButtonText}>Finalizar Registro</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}
