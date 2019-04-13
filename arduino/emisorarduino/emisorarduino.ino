  #include <SoftwareSerial.h>

 
  // Declaro un nuevo puerto para la comunicación serie
  SoftwareSerial mySerial(0, 1); // RX, TX
 
  void setup()
  {
    mySerial.begin(9600); // Comienzo de la comunicación serie
     
  }
 
  void loop()
  {
    // Lee y almacena el estado del pulsador
 
 
    // Si el pulsador está presionado
                               
      mySerial.write('H'); // Enviamos 'H' por el puerto serie (TX)
      delay(2000);              
      mySerial.write('L'); // Enviamos 'L' por el puerto serie (TX)
      delay(2000);
    }
  
