const { Router } = require('express');
const router = Router();
var bodyParse = require('body-parser');
// const conn = require('../../config/conexionBD');


router.use(bodyParse.json());

router.post('/login', async function (req, res) {
    let puerto = req.body.username;
    let puerto = req.body.username;


    // select empleado nombre apellido, Cargo, contraseña, idEmpleado

    let puerto = req.body.username;
    console.log(puerto);


    res.json({
        respuesta: "MONCHO SE LA COME",
        puerto: puerto
    })

});




module.exports = router;