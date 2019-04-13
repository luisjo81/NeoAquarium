//Se incluye biblioteca para el uso de ESP8266 independiente
#include "ESP_XYZ_StandAlone.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif
//Creación del objeto esp que controla las funciones de red
ESP_XYZ esp;
 #include <PubSubClient.h>
//Almacenamiento de los datos de la red inalámbrica
#define PIN            2
#define luz         14 
#define luz1         15
#define servoseñal         13
#include <Servo.h>
#define filtro         12  
// Declaramos la variable para controlar el servo
Servo servoFeeder;
char* ssid = "HUAWEIP10";
char* pass = "rafaelvs";

//Almacenamiento de los datos del servidor MQTT
String server = "m10.cloudmqtt.com";
String srv_user = "kfmxnwjy";
String srv_pass = "KG_sRW8_RVpw";
int port = 12692;


//Almacenamiento del ID del dispositivo
String device_id = "Dispositivo2";

//Almacenamiento de topic MQTT
String topic = "imagine/acuario";
void setup() {
  //Se inicializa el puerto Serial en 19200 baudios para comunicación con la computadora
  Serial.begin(115200);
pinMode(luz, OUTPUT);
pinMode(luz1, OUTPUT);
pinMode(filtro, OUTPUT);
 digitalWrite(filtro, HIGH);
 servoFeeder.attach(13);
 servoFeeder.write(180);
  //Esperar conexión con la computadora
  while(!Serial);

  //Si no hay conexión al punto de acceso, termina ejecución
  while(!esp.connectAP(ssid, pass));

  //Se imprime un mensaje verificando el correcto funcioonamiento del dispositivo
  Serial.println("Configuracion exitosa");

  //Se establece el id del dispositivo
  esp.MQTTConfig(device_id);

  //Se configura el servidor destino
  esp.MQTTSetServer(server, port, srv_user, srv_pass);

  //Suscripción a servidor MQTT
  esp.MQTTSubscribe(topic);

  //Configuración de función de callback
  esp.MQTTSetCallback(mqtt_callback);

}



void loop() {
  //Se verifica que el dispositivo este conectado
  if (!esp.MQTTConnected()) {
    //De lo contrario se conecta nuevamente
    esp.MQTTReconnect(device_id);
  }
  //Debe estar presente siempre que se utilice MQTTSubscriibe
  esp.MQTTLoop();
 
}

//Función de callback
//Debe retornar void y tener los mismos argumentos
void mqtt_callback(char* topic, byte* payload, unsigned int len) {
  String entrada="";
  //Notifica en puerto UART la recepción de un mensaje
  Serial.print("Mensaje recibido [");
  Serial.print(topic);
  Serial.print("] ");

  //Se imprime el mensaje caracter por caracter
  for (int i = 0; i < len; i++) {
   entrada=entrada+(char)payload[i];
  }
  Serial.println(entrada);
  //leer(entrada);

   int parser = entrada.indexOf(',');  //finds location of first 
   int parser2 = entrada.indexOf(',', parser+1 );   //finds location of second  
   String  funcion = entrada.substring( 0,parser);   //captures second data String
   String  funcion1 = entrada.substring( parser+1,parser2);   //captures second data String
   Serial.println(funcion);
   Serial.println(funcion1);

   int   n  = funcion1.toInt();
   funciones(funcion,n);
}

void funciones(String funcion, int tiempo){
  

   if (funcion=="dispensar"){
      servoFeeder.write(160);
      delay(tiempo*1000);
     servoFeeder.write(180);
        
   }
   else if (funcion=="apagarfiltro"){
    digitalWrite(filtro, HIGH);
    
   }
   else if (funcion=="encenderfiltro"){
    digitalWrite(filtro, LOW);
    
   }
   else if (funcion=="encenderluz"){
       digitalWrite(luz, HIGH);

   }
      
   else if (funcion=="apagarluz"){
       digitalWrite(luz, LOW);

   }
   else if (funcion=="luzespecial"){
      digitalWrite(luz1, HIGH);
      delay(1000);
      digitalWrite(luz1, LOW);

   }
}
 
