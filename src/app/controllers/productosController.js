const { Router } = require('express');
const router = Router();
var bodyParse = require('body-parser');
// const conn = require('../../config/conexionBD');


router.use(bodyParse.json());

router.post('/addProduct', async function (req, res) {

    let BarCode = req.body.BarCode;
    let StrockProduct = req.body.StrockProduct;
    let selectCategoria = req.body.selectCategoria;
    let selectBajoResguardo = req.body.selectBajoResguardo;
    let selectEstado = req.body.selectEstado;
//  insert into producto values('nombre', 'descripcion', cantidad, resguardo, empleado, barcode, categoria, compraid, estado)


    res.json({
        respuesta: "MONCHO SE LA COME",
        puerto: puerto
    })

});




module.exports = router;