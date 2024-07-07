const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();



//USO DE CORS
app.use(cors());

//SE ASIGNA UN PUERTO DE ENV O EL 3000 POR DEFECTO AL SERVIDOR
app.set('port', process.env.PORT || 3000);

//GENERA EL MANEJO DE LAS RUTAS MEDIANTE LOS ARCHIVOS ROUTERS
app.use(require('./app/routers/loginRouters'));



//MANDA LLAMAR LA CARPETA PUBLIC PARA DISPONER DE ELLA
app.use(express.static(__dirname+'/public'));

app.listen(app.get('port'),()=>{
    console.log('server run port', app.get('port'));
});