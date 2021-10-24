const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { appendFile } = require("fs");
const { use } = require("./routes/entries.routes");

//Initializations   
//Inicializando la app para que todo funcione
const app = express();


//Settings
app.set('port',process.env.PORT||3000);
//Indicandole a express la ruta donde se encuentra el directorio views, con ayuda de __dirname
app.set('views',path.join(__dirname,'views'));
//Inicializando el motor de vistas en este caso se utilizará ejs
app.set('view engine','ejs');

//Middlewares  

//Utilizar Morgan para obtener información sobre las peticiones que se realizan al servidor, se define dev para que sea corta
app.use(morgan('dev'));
//Utilizar middleware de express para transforman información proveniente del cliente como los formularios a un JSON, especificar que extend:false pues no se recibirán archivos o tipos complejos
app.use(express.urlencoded({extended:false}));

//Routes   
//Especificar donde estará el enrutador
app.use(require('./routes/entries.routes'));

//404 Handlers
//Tratar el caso que luego de pasar por los enutadores no se pueda determinar la ruta que se especifica, entonces en ese caso imprimir error o renderizar page
app.use((req,res)=>{
    res.status(404).render('404');
});

//Start     
//Iniciando la app, escuchar por el puerto 
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});