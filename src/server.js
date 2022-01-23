const app =require("./index");
const connect=require("./config/db");

app.listen(3000,async()=>{
    try{
        await connect();
        console.log("listning on port 3000");
    }
    catch(err){
        console.log(err.message);
    }
})