const express=require('express')
const app=express()
const jwt=require('jsonwebtoken')
const bodyparser= require('body-parser');
const router=express.Router()
const port =3000
const jwtcontrol=require('./auth')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))



router.post("/login", function(req,res,next){
      const {email}=req.body; 
 // a minutes token
      const token=jwt.sign ({
        email:email,
        ad:'maykıl',
        exp:Math.floor(Date.now()/1000)+60,
        issuer:'www.present.com' 
      }, 'secretKey')
      res.send(token)
     // secretkey like a sign's of person
})

router.post("/post", jwtcontrol,  function(req,res,next){
    res.send('<h2>helooo</h2>')
})

router.get("", function(req,res,next){
    res.send("here is get")
})

app.use("/", router)
app.listen(port, function(){
    console.log("localhost is working")
})




