const isAdmin = (req,res,next)=>{

    console.log(req.headers);
    console.log(req.headers.isadmin);
    if(req.headers.isadmin == '1'){
        next();
    }
    else{
        res.status(401).send('Error, no puedes acceder');
    }

}
module.exports = isAdmin;