const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const port=5500;
const userRouter=require('./routers/users.routers')
const productsRouter = require('./routers/products.routers')
const addressRouter = require('./routers/address.routers')
const loginRouter = require('./routers/login.routers')
const isAdmin = require('./middlewares/isAdmin.middleware')

const errorHandler = (error, request, response, next) => { 
    const status = error.status || 400 
    response.status(status).json({ "error": true,message:error.message})
  }
  const invalidPathHandler = (request, response, next) => {
    response.status(404)
    response.json({ "error": true,message:'Invalida la ruta'})
  }

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
app.use('/products',productsRouter);
app.use('/address',addressRouter);
app.use('/login',loginRouter);


app.use(invalidPathHandler)
app.use(errorHandler)


app.listen(port,()=>{
    console.log("Server Running http://localhost:"+port);
})