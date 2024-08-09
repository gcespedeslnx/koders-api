// call express services
const express = require("express");
const createError = require("http-errors");

// import uses cases mentors
const mentorUsesCases = require("../usescases/mentor.usescases");

const router = express.Router();

// -----> CRUD operations <--------

// Get all mentors ok
router.get("/",async (request, response)=>{
  try {
    const mentor = await mentorUsesCases.getAll();
    response.json({
        succes: true,
        messsage: "All Mentors",
        data:{mentor}
    })
  } catch (error) {
    response.status(400);
    response.json({
        success:false,
        message:error.message,
    })
  }
});

// Get mentor  by id ok
router.get("/:id",async (request, response)=>{
    try {
        const id = request.params.id;
        const mentor = await mentorUsesCases.getById(id);
        if (!mentor){
            throw createError(404, "Mentor not found");
        }
        response.json({
            success:true,
            message:"Mentor by id",
            data: {mentor},
        });
    } catch (error) {
    response.status(400);
    response.json({
        success: false,
        message:error.message,
    });      
    }
});

// Create new mentor ok
router.post("/",async (request, response)=>{
    try {
        const mentorData = request.body;
        const newMentor = await mentorUsesCases.create(mentorData);
        response.json({
            success:true,
            message: "Mentor created",
            data:{mentor:newMentor}
        });
    } catch (error) {
        response.status(400);
        response.json({
            success: false,
            message:error.message,
        }); 
    }
});

// Update mentor ok
router.patch("/:id",async (request, response)=>{
  try {
    const id = request.params.id;
    const mentorData = request.body;
    const mentorFound = await mentorUsesCases.getById(id);
    
    if (!mentorFound){
        throw createError(404,"Mentor not found");
    }

    const mentorUdated = await mentorUsesCases.updateById(id, mentorData);
    
    response.json({
        success: true,
        message: "Mentor updated",
        data: {mentor: mentorUdated}

    })
  } catch (error) {
    response.status(400);
    response.json({
        success: false,
        message:error.message,
    });
  }

});

// Delete mentor
router.delete("/:id",async (request, response)=>{
  try {
    const id =request.params.id;
    const mentorFound = await mentorUsesCases.getById(id);
     
    if (!mentorFound){
        throw createError(404,"Mentor not found");
    }

    const mentorDeleted = await mentorUsesCases.deleteById(id);

    response.json({
        success: true,
        message: "Mentor deleted",
        data: {mentor: mentorDeleted},
    });

} catch (error) {
    response.status(400);
    response.json({
        success: false,
        message:error.message,
    });
  }    
});


// End CRUD operations


module.exports = router;
