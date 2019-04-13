# NeoAquarium

NeoAquarium es un producto que nació para facilitar el mantenimiento de los acuarios basándose en el concepto de IoT (Internet of Things), donde se desarrolló una App Móvil (Android y iOS) utilizando React Native con el fin de controlar los diferentes módulos con los que cuenta el acuario. Todos los comandos se realizan desde la App, la cual se comunica con el acuario por medio de un servidor web, por lo que podremos estar al tanto del mismo desde cualquier lugar con conexión a internet. 

## Inicio
A continuación se brindan todas las intrucciones necesarias para preparar el ambiente de desarrollo.

### Pre-requisitos
Se necesita tener instalado los siguientes IDE's.

```
Visual Studio Code      https://code.visualstudio.com/
Arduino IDE             https://www.arduino.cc/en/Main/Software/
```

Además, también serán necesarios los siguientes entornos.

```
Node.js                 https://nodejs.org/es/
Mongo.DB                https://www.mongodb.com/download-center
```
### Instalación
Una vez que tengamos las herramientas anteriores, empezaremos a instalar los paquetes necesarios.

Lo primero que necesitamos son las utilidades de línea de comando de Expo.CLI.

```
npm install -g expo-cli
```

Ahora, procedemos a crear nuestro proyecto.

```
expo init NeoAquarium
cd NeoAquarium
```

Ahora que nos encontramos en el directorio correspondiente a nuestro proyecto, instalaremos todos los paquetes necesarios para el funcionamiento del mismo.

```
npm install
npm install mongoose
npm install react-navigation
npm install react_native_mqtt --save
npm install toggle-switch-react-native
```

## Prueba
Una vez instalados todos los paquetes, podemos ejecutar nuestro proyecto.

```
npm start
```

Luego de ejecutar el comando se abrirá una página web en un browser, la cual mostrará un código QR que debe ser escaneado con el teléfono móvil en el que se quiere llevar a cabo las pruebas.



## Herramientas de desarrollo
* [Node.js](https://nodejs.org/es/) - Entorno de ejecución para JavaScript
* [React Native](https://facebook.github.io/react-native/) - Entorno para desarrollo de aplicaciones nativas
* [MongoDB](https://www.mongodb.com/) - Base de datos en la nube
* [Visual Studio Code](https://code.visualstudio.com/) - Editor de código
* [Arduino](https://www.arduino.cc/) - Plataforma para integración de hardware y software
* [Postman](https://www.getpostman.com) - Plataforma para prueba de API's

## Autores
* **Luis Martínez Ramírez** - *Desarrollo de App y Prototipo*
* **Rafael Vargas Solís** - *Desarrollo de Servidor Web y Prototipo*

