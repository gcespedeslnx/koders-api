const express = require('express');
const cors = require("cors");
const helmet = require("helmet")

const kodersRoutes = require("./routes/koders.routes");
const mentorRoutes = require("./routes/mentor.routes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/koders",kodersRoutes);

app.use("/Mentor",mentorRoutes);
app.get("/",(request, response)=>{
    response.json({
        success:true,
        message:"kodersAPI",
    });
});

module.exports = app;