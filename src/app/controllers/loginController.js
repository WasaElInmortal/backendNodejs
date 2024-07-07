const { Router } = require('express');
const router = Router();
var bodyParse = require('body-parser');
const conn = require('../../config/conexionBD');


router.use(bodyParse.json());

router.post('/login', async function (req, res) {
    let username = req.body.username;
    let pass = req.body.password;

    let sql =`select * from empleados where Contraseña =${username} and contraseña = ${pass}`;

    let result = await conn.exeQuery(sql);

    // select empleado nombre apellido, Cargo, contraseña, idEmpleado

    // let puerto = req.body.username;
    // console.log(puerto);


    res.json({
        status: "OK",
        resultado: result
    })

});




module.exports = router;