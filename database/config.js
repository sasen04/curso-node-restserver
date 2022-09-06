const mongoose = require("mongoose")




const dbConection = async()=> {
 try {
    
    await mongoose.connect(process.env.MONGODB_CNN,{
   /*      useNewUrkParser:true,
        useUnifiedTopology: true,
         useCreateIndex:true,
        useFindAndModify:false */ 
    })
        console.log ("base de datos online");

 } catch (error) {
    console.log(error);
    throw new error("no sirvio"); 
 }


}

module.exports = {
    dbConection
}