const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    if (req.cookies && req.cookies.admintoken) {
        console.log(req.cookies.admintoken);
        const admintoken = req.cookies.admintoken;
        jwt.verify(admintoken, 'Challenge App | kunkkybaba was here doing wonders', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.status(401).send({
                    responseCode: "96",
                    responseMessage: "Invalid Token",
                    data: null
                });
            } else {
                console.log(decodedToken); 
                next();
            }
        });
    } else {
        res.status(401).send({
            responseCode: "96",
            responseMessage: "Token missing",
            data: null
        });
    }
};

module.exports = requireAuth;
