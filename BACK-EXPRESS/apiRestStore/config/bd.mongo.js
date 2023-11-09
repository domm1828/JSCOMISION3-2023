const mongoose = require("mongoose");

const urlMongo="mongodb+srv://duglas:rVfVJYlNrHEOTcgM@cluster0.6i6zmxs.mongodb.net/";

mongoose.connect(urlMongo).then(()=>{
    console.log("Conection Exitosa")
}).catch((err)=>{
    console.log(err)
});