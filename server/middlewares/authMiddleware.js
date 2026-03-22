const jwt = require("jsonwebtoken");

exports.protect = async (req,res,next) => {
    try{
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                success:false,
                message:"Token missing"
            })
        }

        const token = authHeader.split(" ")[1];

        // Verify Token
        const decode = jwt.verify(token,process.env.JWT_SECRET);

        req.user = decode;

        next()


    }
    catch(error){
        return res.status(501).json({
                success:false,
                message:"Invalid Request"
            })
    }
}