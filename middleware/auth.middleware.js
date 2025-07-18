const jwt = require('jsonwebtoken')


const auth = async(req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({success:false, msg: "auth failed"})
    }
    // Bearer bdflnbbe(verifying the token structure)
    const token = authHeader.split(" ")[1]
    try {
        const payload = jwt.verify(token, process.env.jwt_secret)
        req.user = {userId: payload.userId, name: payload.name}
        next()
    } catch (error) {
        res.send(401).json({success:false, msg:"auth failed"})  
    }
}

module.exports = auth