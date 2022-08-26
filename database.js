const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//solicitudes o declaraciones previas
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


//conectar a atlas MongoDB
mongoose.connect("mongodb+srv://nobledatabase:gKOaMOLbgZ98vKsh@nobletm.8lamdcy.mongodb.net/appUsersNobles", {useNewUrlParser: true});


//1. Schema
const usuarioSchema = {
    firstName: String,
    surName:String,
    email:String,
    password:String
}

//2. Model
const Usuario = new mongoose.model("Usuario", usuarioSchema);

//Metodo post de express
app.post('/registrar', function(req, res){

    //save
    const usuarioFNameForm= req.body.firstName;
    const usuarioSNameForm=req.body.surName;
    const emailForm=req.body.email;
    const passwordForm=req.body.password;

    //3. Build document
    const usuarioDB = new Usuario({
        firstName: usuarioFNameForm,
        surName:usuarioSNameForm,
        email:emailForm,
        password:passwordForm
    });

    //4. Submit to DB and save
    usuarioDB.save();

});

app.listen(5000, function(){
    console.log("server express on port 5000");
})



//DAtos importantes borrar despues
//userDatabase = nobledatabase
//passwordDatabase = gKOaMOLbgZ98vKsh