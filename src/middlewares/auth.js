const createError = require("http-errors");


function auth(request, response, next){
    try {
     
        const authorization =request.headers.suthorization;

        const token = authorization?.replace("Bearer","");
         if(!token){
            throw createError(404,"Token es required in authorizacion header");
        }

        const  payload = jwt.verify(token);
        next();
        
    } catch (error) {
        response(error.status, 401);

        responsse.json ({
            success:false,
            message:error.message,
        });

        module.exports = auth;

        
    }
    


}