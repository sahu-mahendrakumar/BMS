const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    //get the token
    //verify the token.
    //get the user out of the token.
    console.log(req.headers.authorization);
    try{
        const token = req.headers.authorization.split(" ")[1];
        const verifiedtoken = jwt.verify(token, "Scaler_BMS");
        req.body.userId = verifiedtoken.userId;
        next();
    }catch(error){
        res.status(401).send({success:false, message: "Token invalid"});    
    }
}