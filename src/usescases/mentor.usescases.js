const createHttpError = require("http-errors");
const Mentor = require("../models/mentor.model");
// create new mentor 
async function  create(data){
    const newMentor = await Mentor.create(data);
    return newMentor;
}

// get all mentors
async function getAll(){
    const mentor = await Mentor.find({});
    return mentor;
}

// get mentor by id
async function getById(id){
   const mentor = await Mentor.findById(id);
   return mentor;
}

// update  mentor by id
async function updateById(id, newData){
    const mentor = await Mentor.findByIdAndUpdate(id,newData,{new:true});
    return mentor;    
}

// delete mentor by id
async function deleteById(id){
    const mentorFind = await Mentor.findById(id);

     if(!mentorFind){
         throw createError(404,"Mentor not found");
     }
     const deleteMentor = await Mentor.findByIdAndDelete(id);
    
     return deleteMentor;
}


module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
}

