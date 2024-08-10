const Koder = require("../models/koder.model");
const encryption = require()

async function login(data){
    const koder = await Koder.findOne({email:data.email}).select("+password");

    if(!koder){
        throw(401, "invalid credential");
    }
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
};
