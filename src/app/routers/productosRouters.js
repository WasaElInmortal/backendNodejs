const { Router } = require('express');
const router = Router();
const productos = require('../controllers/productosController');



router.post('/addProduct', productos);



module.exports = router;