

const getUserAll = (req,res)=>{
    res.json({message:'user GET'});
};

const  createUser = (req,res)=>{
    console.log(req.body);
    console.log(req.headers)
    res.json({message:'user POST'});
};

const  updateUser = (req,res)=>{
    res.json({message:'user PUT'});
};

const  deleteUser = (req,res)=>{
    res.json({message:'user DELETE'});
};

const filterUser =(req,res)=>{
    console.log(req.params);
    console.log(req.query)
    res.json({message:'ROUTER DYNAMIC', params : req.params, query : req.query});
}

module.exports ={getUserAll,createUser,updateUser,deleteUser,filterUser}