#include <ESP8266WiFi.h>
#include <SPI.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include "DHT.h"
#include "RestClient.h"
const char* ssid     = "HUAWEIP10";
const char* password = "rafaelvs";
const char* host = "192.168.43.175";
#define HTTP_DEBUG
// Data wire is conntec to the Arduino digital pin 2
#define ONE_WIRE_BUS 14
#define FLOAT_SENSOR 12     // the number of the LED pin
#define DHTPIN 13  
#define DHTTYPE DHT22   // Sensor DHT22
// Setup a oneWire instance to communicate with any OneWire devices
OneWire oneWire(ONE_WIRE_BUS);
DHT dht(DHTPIN, DHTTYPE);
// Pass our oneWire reference to Dallas Temperature sensor 
DallasTemperature sensors(&oneWire);
RestClient client = RestClient("192.168.43.175",4000);
void setup() {
  Serial.begin(115200);
  delay(100);

  // We start by connecting to a WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

 while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP()); 
    pinMode(FLOAT_SENSOR, INPUT_PULLUP);
    sensors.begin();
     dht.begin();
}
String response;
String cadena;
String nivelAgua;
float h;
void loop() {
    sensors.requestTemperatures(); 
    h = dht.readHumidity(); //Leemos la Humedad
    if(digitalRead(FLOAT_SENSOR) == LOW) 
  {
    // turn LED on:
    nivelAgua="Alto";
  } 
  else 
  {
    // turn LED off:
    nivelAgua="bajo";
  }
  Serial.print("Humedad ");
  Serial.print(h);
  Serial.print(" %t");
  Serial.print("Celsius temperature: ");
  // Why "byIndex"? You can have more than one IC on the same bus. 0 refers to the first IC on the wire
  Serial.print(sensors.getTempCByIndex(0)); 
  Serial.print(" - Fahrenheit temperature: ");
  Serial.println(sensors.getTempFByIndex(0));
  Serial.println(nivelAgua);
 cadena="id=5ca6a93344bb9b4d20d5da15&temperature="+String(sensors.getTempCByIndex(0))+"&humidityPercent="+String(h)+"&waterLevel="+nivelAgua;
  int statusCode = client.post("/api/v1/sensor",cadena.c_str() );
  Serial.print("Status code from server: ");
  Serial.println(statusCode);
  Serial.print("Response body from server: ");
  Serial.println(response);
  delay(1000);
}
