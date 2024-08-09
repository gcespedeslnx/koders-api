// CLI
// nos permitira administrar los recursos de kodemia
// - koders 
//  - add (koders add --name=[name] --email=[email])
//  - rm  (koders rm --id=[id]
//  - ls 
// - mentors
// - generations
const db =require("./src/lib/db");
const kodersActions = require("./src/commands/koders.commands")

const resource = process.argv[2]; // koders, mentors, generations
const action = process.argv[3]; // add, rm, ls

const alllowedActions={
    koders: kodersActions,
    mentors:{},
    generations:{},
};

db.connect()
   .then(async ()=>{
      console.log("DB connected");
      const resourceActions = alllowedActions[resource];

      if (!resourceActions){
          console.error(`UNKNOWN RESOURCE ${resource}`);
          process.exit(0);
      }
      
      const requestedAction = resourceActions[action];
      
      if(!requestedAction){
          console.error(`UNKNOWN ACTION ${action}`);
          process.exit(3);
      }
      
      requestedAction();  
              
     }
   )
   .catch((error)=>{
      console.error("DB connection error:", error);
      process.exit(1);
   });

