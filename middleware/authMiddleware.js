const jwt = require('jsonwebtoken');
const { Tokens } = require('../model/token');

const requireAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if authorization header is missing
    if (!authHeader) {
        return res.status(401).json({
            responseCode: "96",
            responseMessage: "Authorization header missing",
            data: null
        });
    }

    try {
        // Check if token exists in the database
        const queryToken = { token: JSON.parse(authHeader) }
        const tokens = await Tokens.find(queryToken);

        if (tokens.length === 0) {
            return res.status(401).json({
                responseCode: "96",
                responseMessage: "Token not found",
                data: null
            });
        }

        // Verify token using jwt.verify
        jwt.verify(JSON.parse(authHeader), 'ChallengeApp_gadjjajcabdhcjadbajkvhcanhjc', (err, decodedToken) => {
            if (err) {
                return res.status(401).json({
                    responseCode: "96",
                    responseMessage: "Invalid token",
                    data: null
                });
            } else {
                req.user = decodedToken; // Attach decoded user data to the request object
                next(); // Proceed to the next middleware or route handler
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            responseCode: "96",
            responseMessage: "Internal server error " + error,
            data: null
        });
    }
};

module.exports = requireAuth;
