 #include <SoftwareSerial.h>
  const int LED = 2;  // Pin digital para el LED
  char estado;
 
  // Declaro un nuevo puerto para la comunicación serie
  SoftwareSerial mySerial(0, 1); // RX, TX
 
  void setup()
  {
    mySerial.begin(9600); // Comienzo de la comunicación serie
    pinMode(LED, OUTPUT);   // Pin digital 5 como salida
  }
 
  void loop()
  {
    // Si por el puerto serie llegan datos (RX)
    if (mySerial.available())
    {          
      // Almaceno el carácter que llega por el puerto serie (RX)
      estado = mySerial.read();  
     
      // Si es una 'H'
      if (estado == 'H')          
      {
        // Enciendo el LED (nivel ALTO)
        digitalWrite(LED, HIGH);        
      }
     
      // Si es una 'L'
      if (estado == 'L')          
      {
        // Apago el LED (nivel BAJO)
        digitalWrite(LED, LOW);        
      }
    }
  }
