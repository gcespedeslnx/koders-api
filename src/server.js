const express = require('express');
const kodersRoutes = require("./routes/koders.routes");
const mentorRoutes = require("./routes/mentor.routes");

const app = express();

app.use(express.json());

app.use("/koders",kodersRoutes);

app.use("/Mentor",mentorRoutes);
app.get("/",(request, response)=>{
    response.json({
        success:true,
        message:"kodersAPI",
    });
});

module.exports = app;