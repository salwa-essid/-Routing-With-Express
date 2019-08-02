const express=require('express')
const app=express()




app.use(date=(req,res,next)=>{
        let requestAt=new Date().getHours();
        if(requestAt>= 8 && requestAt<=17)
     {   next()}
     else {
         res.status(505).send('Our office is not open now')
     }
      
    }) 


app.use(express.static(__dirname+'/public'))


app.listen(3000,(err)=>{
    if(err) console.log("serveur is not runing")
    else console.log("serveur is  runing on port 3000")
})