const postdata=async (url,data)=>{
    try{
        let res = await fetch(url,{
            method:"POST",
            mode:"cors",
            cache:"no-cache",
            credentials:"same-origin",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data),
        });
        if(res.status!=201)
            return {message:"invalid credentials"};
        
        let response=await res.json();
        return response;
    }
    catch(err){
        console.log("err message", err)
    }
}

module.exports=postdata;