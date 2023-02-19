const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports.verifyToken = (req, res, next)=>{
    
    let token = req.headers['authentication']

    if(token)
    {
        token = req.headers['authentication'].split(' ')[1]
        
        jwt.verify(token, process.env.secret_key, (err, valid)=>{
            if(err)
            {
                res.json(
                        {
                            error: true,
                            success: false,
                            message: "An error has been occurred while validating JWT"
                        }
                    )
                }
                else
                {
                    req.token_data = valid
                    next();
                }
            }
            )
        }
        else{
        res.json(
            {
                error: true,
                success: false,
                message: "JSON Web Token is required to fetch user data!!!"
            }
        )
    }
}