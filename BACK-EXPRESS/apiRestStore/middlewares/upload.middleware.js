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
        //const error = new Error('NO SE PUEDE CARGAR ARCHIVOS DE ESTE TIPO '+mimeType);
        req.uploadError ={
            error:'NO SE PUEDE CARGAR ARCHIVOS DE ESTE TIPO '+mimeType
        }
        cb(null, false) 
    }
}

const uploadStorage = multer({storage:upload, fileFilter:validateTypeFile});

module.exports = uploadStorage;