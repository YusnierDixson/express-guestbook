//Definir la lógica de la app
const entries = [];
const renderIndex = (req,res) =>{
    //Pasarle al index, el array con las entradas en forma de objeto
    res.render('index',{entries});
};

const renderNewEntry = (req,res) =>{
    res.render('new-entry');
};

const createNewEntry = (req,res) =>{
    //Recuperando datos recibidos desde el formulario
    const newEntry = {
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    };
    entries.push(newEntry);
    res.redirect('/');
};
//Exportar funciones creadas
module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry
}