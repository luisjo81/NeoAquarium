import {
    StyleSheet
} from 'react-native';
import colors from '../../constants/colors';

//Styles const sheet
const styles = StyleSheet.create({
    //Filtration Screen
    filtrationScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    filtrationScreenMainContainer: {
        alignItems: 'center',
        backgroundColor: colors.transparentBlack,
        borderColor: colors.blue2,
        borderWidth: 2,
        height: '30%',
        marginLeft: '17%',
        marginTop: '25%',
        width: '65%'
    },
    filtrationScreenSwitch: {
        flex: 1
    },
    filtrationScreenText: {
        color: colors.white,
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    //Food Screen
    foodScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    foodScreenButtonText: {
        color: colors.white,
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center'
    },
    foodScreenMainContainer: {
        alignItems: 'center',
        flex: 1,
        marginTop: '60%'
    },
    foodScreenSmallContainer: {
        borderWidth: 2,
        borderColor: colors.blue2,
        height: 80,
        marginHorizontal: 2,
        width: 200
    },
    //Home Screen
    homeScreenCard: {
        flexBasis: '48%',
        marginHorizontal: 2,
        marginVertical: 2
    },
    homeScreenCardContent: {
        paddingHorizontal: 16,
        paddingVertical: 12.5
    },
    homeScreenCardFooter: {
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 25,
        paddingHorizontal: 16,
        paddingTop: 12.5
    },
    homeScreenCardHeader: {
        alignItems: "center",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 17
    },
    homeScreenCardImage: {
        alignSelf: 'center',
        height: 70,
        width: 70
    },
    homeScreenList: {
        backgroundColor: colors.black,
    },
    homeScreenListContainer: {
        alignItems: 'center'
    },
    homeScreenListInfoText: {
        color: colors.white,
        flex: 1,
        fontSize: 12,
        textAlign: 'center'
    },
    homeScreenListTitleText: {
        color: colors.white,
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    homeScreenMainContainer: {
        backgroundColor: colors.black,
        flex: 1,
        marginTop: 20
    },
    //Humidity Screen
    humidityScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    humidityScreenDataText: {
        color: colors.white,
        fontSize: 40,
        marginTop: 20,
        textAlign: 'center'
    },
    humidityScreenMainContainer: {
        alignItems: 'center',
        backgroundColor: colors.transparentBlack,
        borderColor: colors.blue2,
        borderWidth: 2,
        height: '30%',
        marginLeft: '17%',
        marginTop: '40%',
        width: '65%'
    },
    humidityScreenTitleText: {
        color: colors.white,
        fontSize: 30,
        marginTop: 5
    },
    //Light Screen
    lightScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    lightScreenButtonBox: {
        borderColor: colors.blue2,
        borderWidth: 2,
        height: 58,
        marginHorizontal: 2,
        width: 95
    },
    lightScreenButtonText: {
        color: colors.white,
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center'
    },
    lightScreenInput: {
        color: colors.white,
        backgroundColor: colors.transparentGrey,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: 80
    },
    lightScreenMainContainer: {
        alignItems: 'center',
        backgroundColor: colors.transparentBlack,
        borderColor: colors.blue2,
        borderWidth: 2,
        height: '70%',
        marginLeft: '17%',
        marginTop: '25%',
        width: '65%'
    },
    lightScreenSwitch: {
        flex: 1
    },
    lightScreenTitleText: {
        color: colors.white,
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    //Login Screen
    loginScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    loginScreenBackContainer: {
        padding: 20
    },
    loginScreenButtonContainer: {
        backgroundColor: colors.blue2,
        padding: 15
    },
    loginScreenButtonText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center'
    },
    loginScreenFormContainer: {
        flex: 1
    },
    loginScreenInputContainer: {
        color: colors.white,
        backgroundColor: colors.transparentGrey,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    loginScreenMainContainer: {
        flex: 1
    },
    loginScreenSigninLinkText: {
        color: colors.white,
        fontSize: 15,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    loginScreenTitleText: {
        color: colors.white,
        flex: 1,
        marginTop: 10,
        fontFamily: 'Verdana',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        height: '10%',
        textAlign: 'center',
        width: '100%'
    },
    //Menu Screen
    menuScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    menuScreenCard: {
        borderWidth: 2,
        borderColor: colors.blue2,
        flexBasis: '48%',
        height: 200,
        marginHorizontal: 2,
        width: 150
    },
    menuScreenCardHeader: {
        alignItems: "center",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 17
    },
    menuScreenCardImage: {
        alignSelf: 'center',
        height: 90,
        marginTop: 5,
        width: 90
    },
    menuScreenList: {
        height: 10,
        paddingBottom: '50%'

    },
    menuScreenListContainer: {
        alignItems: 'center'
    },
    menuScreenMainContainer: {
        flex: 1,
        marginTop: 5
    },
    menuScreenOptionContainer: {
        height: '70%'
    },
    menuScreenTitleText: {
        color: colors.white,
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 42,
        textAlign: 'center'
    },
    //Signin Screen
    signinScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    signinScreenButtonContainer: {
        backgroundColor: colors.blue2,
        padding: 15
    },
    signinScreenButtonText: {
        color: colors.white,
        fontWeight: '700',
        textAlign: 'center'
    },
    signinScreenFormContainer: {
        flex: 1,
        marginBottom: 270
    },
    signinScreenInputContainer: {
        backgroundColor: colors.transparentGrey,
        color: colors.white,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    signinScreenMainContainer: {
        flex: 1
    },
    signinScreenSecondContainer: {
        padding: 20
    },
    signinScreenTitleText: {
        color: colors.white,
        flex: 1,
        fontFamily: 'Verdana',
        fontSize: 40,
        height: '10%',
        marginTop: 10,
        textAlign: 'center',
        width: '100%'
    },
    //Temperature Screen
    temperatureScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    temperatureScreenDataText: {
        color: colors.white,
        fontSize: 40,
        marginTop: 20,
        textAlign: 'center'
    },
    temperatureScreenMainContainer: {
        alignItems: 'center',
        backgroundColor: colors.transparentBlack,
        borderColor: colors.blue2,
        borderWidth: 2,
        marginLeft: '17%',
        marginTop: '40%',
        height: '30%',
        width: '65%'
    },
    temperatureScreenTitleText: {
        color: colors.white,
        fontSize: 30,
        marginTop: 5
    },
    //Water Level
    waterLevelScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    waterLevelScreenMainContainer: {
        alignItems: 'center',
        backgroundColor: colors.transparentBlack,
        borderColor: colors.blue2,
        borderWidth: 2,
        height: '30%',
        marginLeft: '17%',
        marginTop: '40%',
        width: '65%'
    },
    waterLevelScreenTitleText: {
        color: colors.white,
        fontSize: 30,
        marginTop: 20,
        textAlign: 'center'
    },
    waterLevelScreenDataText: {
        color: colors.white,
        fontSize: 20,
        marginTop: 5
    }
})

export default styles;
