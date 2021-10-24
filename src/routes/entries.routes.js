//Clase del modulo express
const { Router } = require("express")

//Instancia de la clase
const router = Router();

//Importar funciones del controlador
const {renderIndex,renderNewEntry,createNewEntry} = require('../controllers/entries.controller');

//Utilizar las funciones  según la rutas entradas en la app
//Rutas con método get
router.get('/',renderIndex);

router.get('/new-entry',renderNewEntry);

//Ruta con método post
router.post('/new-entry',createNewEntry);

//Exportar clase
module.exports = router;
