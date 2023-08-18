const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
console.log(req.cookies);
    if (req.cookies.Token) {
        const token = req.cookies.Token; // Access the 'Token' cookie
        console.log(token);
        jwt.verify(token, 'Challenge App | gadjjajcabdhcjadbajkvhcan hjc', (err, decodedToken) => {
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
