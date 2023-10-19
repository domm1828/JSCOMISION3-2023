const validateRequest = (req,resp,next,schema) =>{

    const options={
        abortEarly:false,
        stripUnknown:true
    }
    const {error,value} = schema.validate(req.body,options);
    if(error){
        console.log(error);
        const errors = error.details.map((elements)=>{
            const errorMessage={
                label:elements.context.key,
                message:elements.message
            }
            return errorMessage;
        })
        resp.status(400).json({errors});
    }
    else{
        req.body = value;
        next();
    }

}
module.exports = validateRequest;