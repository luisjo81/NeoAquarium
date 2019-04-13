// Incluímos la librería para poder controlar el servo
#include <Servo.h>
 
// Declaramos la variable para controlar el servo
Servo servoFeeder;

#define FLOAT_SENSOR 2     // the number of the pushbutton pin
#define WATER_LEVEL_LED 6      // the number of the LED pin
#define FILTER_RELAY 7
#define FEEDER_BUTTON 8

bool filterState = 0;
int buttonVal = 0;

long lastDebounceTime = 0;  // the last time the output pin was toggled
long debounceDelay = 50;    // the debounce time; increase if the output flickers
 
 
void setup() {
  // Iniciamos el monitor serie para mostrar el resultado
  Serial.begin(9600);
 
  // Iniciamos el servo para que empiece a trabajar con el pin 9
  servoFeeder.attach(9);

  // initialize the LED pin as an output:
  pinMode(WATER_LEVEL_LED, OUTPUT);
  // initialize the pushbutton pin as an input: 
  pinMode(FLOAT_SENSOR, INPUT_PULLUP);

  pinMode(FILTER_RELAY, OUTPUT);

  pinMode(FEEDER_BUTTON, INPUT);

  servoFeeder.write(180);
}
 
void loop() {
  //Posición de reposo
  /*
  servoFeeder.write(180);
  delay(10000);
  servoFeeder.write(160);
  delay(500);
  servoFeeder.write(180);*/
  
  /////////////////////////////////////////////////////////////
  //CODIGO SENSOR NIVEL DE AGUA
  
  if(digitalRead(FLOAT_SENSOR) == LOW) 
  {
    // turn LED on:
    digitalWrite(WATER_LEVEL_LED, HIGH);
  } 
  else 
  {
    // turn LED off:
    digitalWrite(WATER_LEVEL_LED, LOW);
  }
  
  /////////////////////////////////////////////////////////////
  
  /////////////////////////////////////////////////////////////
  //CODIGO DISPENSADOR ALIMENTO
  
  buttonVal = digitalRead(FEEDER_BUTTON);

  //filter out any noise by setting a time buffer

  if (buttonVal == LOW) {
    digitalWrite(WATER_LEVEL_LED, LOW);
  }else {
    digitalWrite(WATER_LEVEL_LED, HIGH);
    servoFeeder.write(160);
    delay(500);
    servoFeeder.write(180);
    digitalWrite(WATER_LEVEL_LED, LOW);
  }
  /////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////
  //CODIGO FILTRO
  /*
  digitalWrite(RELAY,0);           // Turns ON Relays 1
  delay(10000);                              

  digitalWrite(RELAY,1);          // Turns Relay Off
  delay(10000);*/
}
