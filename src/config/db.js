const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect(
      "mongodb+srv://faasos:faasos_1234@cluster0.r55cz.mongodb.net/faasosClone"
    );
}
//mongodb+srv://faasos:faasos_1234@cluster0.r55cz.mongodb.net/faasosClone
// "mongodb+srv://masaifaasos:masai_faasos@cluster0.shcdu.mongodb.net/myFirstDatabase

