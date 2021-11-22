const jwt = require('jsonwebtoken')

require('dotenv').config({silent:true})

module.exports = function (req,res,next){
    const token = req.header('Token')

    if (!token) return res.status(401).send('Acc Denied')

    try{
        const authorized = jwt.verify(token,process.env.SECRET_TOKEN)
        req.user = authorized
        next()
    }catch(err){
        res.status(400).send('Invalid Token')
    }
}
