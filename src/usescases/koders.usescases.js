const Koder = require("../models/koder.model");
const encryption = require("../lib/encryption");
const jwt= require("../lib/jwt")

async function login(data){
     
    const koder = await Koder.findOne({email:data.email}).select("+password");

    if(!koder){
        throw(401, "Invalid credential");
    }
    
    const isValidPassword = encryption.compare(data.password, koder.password);

    if(!isValidPassword){
        throw(401, "Invalid credential");
    }

    const token = jwt.sign({id:koder._id})
    
    return token;

}


async function signup(data){
    const koderFound = await Koder.findOne({email:data.email});

    if(koderFound){
        throw createError(409, "User already exist");
    }

    if (!data.password){
        throw createError(400, "Password is required");
    }

    if (data.password.length < 6){
        throw createError(400,"Password mut be at least 6 characters");

    }

    const password = encryption.encrypt(data.password);

    data.password = password;

    const newKoder = await Koder.create(data);

    return newKoder;
}



async function create(data){
    const newKoder = await Koder.create(data);
    return newKoder;
}

async function getAll(){
    const koders = await Koder.find({});
    return koders;
}

async function getById(id){
    const koders = await Koder.findById(id);
    return koders;
}

async function updateById(id,newData){
    const koders = await Koder.findByIdAndUpdate(id, newData,{new:true});
    return koders;
}

async function deleteById(id){
    const koderFound = await Koder.findById(id);

    if (!koderFound){
        throw createError(404,"Koder not found");
    }
    
    const deleteKoder = await Koder.findByIdAndDelete(id);
    return deleteKoder;
}

module.exports ={
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    login,
    signup,
};
