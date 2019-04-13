'use strict';

import Hapi from 'hapi';
import mongoose from 'mongoose';
import CreateLoginsRoutes from "./api/v1/login";
import CreateSensorsRoutes from "./api/v1/sensor";
//Connect to mongo instance

mongoose.connect('mongodb+srv://rafael:trini12.@soad-uc3rv.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

// Create a server with a host and port
const server=Hapi.server({
    host:'186.15.208.139',
    port:80
});
CreateLoginsRoutes(server);
CreateSensorsRoutes(server);
// Start the server
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
