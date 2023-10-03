

const getUserAll = (req,res)=>{
    res.json({message:'user GET'});
};

const  createUser = (req,res)=>{
    res.json({message:'user POST'});
};

const  updateUser = (req,res)=>{
    res.json({message:'user PUT'});
};

const  deleteUser = (req,res)=>{
    res.json({message:'user DELETE'});
};

module.exports ={getUserAll,createUser,updateUser,deleteUser}