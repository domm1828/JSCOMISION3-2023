const multer = require('multer');

const upload = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/images/')
    },
    filename:(req,file,callback)=>{
        console.log(file);
        let name = Date.now()+"_"+file.originalname;
        
        console.log(name);
        callback(null,name)
    },
});


const validateTypeFile = (req,file,cb) => {
    let mimeType= file.mimetype;
    if(mimeType.includes('image/png') || mimeType.includes('image/jpeg') ){
        cb(null, true)
    }
    else{
        
        cb(null, false) 
        cb(new Error('NO PUEDES SUBIR ARCHIVOS DE ESTE TIPO '+mimeType))
    }
}

const uploadStorage = multer({storage:upload, fileFilter:validateTypeFile});

module.exports = uploadStorage;