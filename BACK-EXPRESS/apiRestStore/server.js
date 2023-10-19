const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const port=5500;
const userRouter=require('./routers/users.routers')
const isAdmin = require('./middlewares/isAdmin.middleware')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//app.use(isAdmin);
/** Routes Router Direcciones enrrutamiento 
 * method http GET POST PUT DELETE PATCH HEAD OPTIONS
 * app.Method(PATH,FUNCTION HANDLER)
*/
/**MODEL DEFINICION DE ESTRUCTURA DE DATOS VIEW(UI) CONTROLLER LOGICA FUNCIONES */
app.get('/',(req,res)=>{
    res.send({message:'Hello world...'});
})
app.post('/prueba',(req,res)=>{
    res.json({message:'Hello Prueba'});
});
app.use('/users',userRouter);


app.listen(port,()=>{
    console.log("Server Running http://localhost:"+port);
})