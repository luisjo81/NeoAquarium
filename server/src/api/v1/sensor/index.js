import Sensor from "../../../models/sensor";
function CreateSensorsRoutes (server){

server.route([
    {
        method:"GET",
        path: "/api/v1/sensor",
        handler: function (request,reply){
            var respuesta =Sensor.findOne({},{  _id: 0,__v:0 }).sort({_id:-1}).limit(1)

            return respuesta
        }

    },
    {
        method:"POST",
        path: "/api/v1/sensor",
        handler: function (request,reply){
            const {temperature,humidityPercent,waterLevel}= request.payload;
            const sensor =new Sensor ({
                temperature,humidityPercent,waterLevel
            })
            
            return sensor.save();
        }

    }
])

}
export default CreateSensorsRoutes

