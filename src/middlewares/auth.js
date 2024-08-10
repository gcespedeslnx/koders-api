const createError = require("http-errors");

const koderUsesCases = require("../usescases/koders.usescases");

const jwt = require("../lib/jwt");

function auth(request, response, next){
    try {
     
        const authorization =request.headers.authorization;

        const token = authorization?.replace("Bearer","");
         if(!token){
            throw createError(404,"Token es required in authorizacion header");
        }

        const  payload = jwt.verify(token);

        const koder = koderUsesCases.getById(payload.id);

        request.koder = koder;

        next();
        
    } catch (error) {
        response.status(400);

        response.json ({
            success:false,
            message:error.message,
        });
      
    }
 }

 module.exports = auth;