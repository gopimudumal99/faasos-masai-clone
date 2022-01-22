const postdata=async (url,data)=>{
    try{
        let res = await fetch(url,{
            method:"POST",           
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data),
        });        
        
        let response=await res.json();
        return response;
    }
    catch(err){
        console.log("err message", err)
    }
}

module.exports=postdata;