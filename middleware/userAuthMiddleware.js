const jwt = require('jsonwebtoken');

const requireuserAuth = (req, res, next) => {
    if (req.cookies && req.cookies.usertoken) {
        const usertoken = req.cookies.usertoken;

        jwt.verify(usertoken, 'Challenge App | kunkkybaba was here doing wonders for users', (err, decodedToken) => {
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

module.exports = requireuserAuth;
