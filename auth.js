const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
   try {
     const token=req.headers.authorization.split(" ")[1]
     console.log(token)
     const decodedtoken=jwt.verify(token, 'secretKey')
    
     next(); 

   } catch (error) {
    if (error.name === "TokenExpiredError") {
        return res.status(401).send({
            message: 'token expired',
            status: -1
        })
    } else if (error.name === "JsonWebTokenError") {
        return res.status(401).send({
            message: 'unvalid token',
            status: -1
        })
    } else {
        return res.status(401).send({
            message: 'unstatus',
            status: -1
        })
    }
   }
}