const express = require("express");
const { Questions } = require('../model/question');
const { Users } = require('../model/user');
const { Levels } = require('../model/level');
const Joi = require("joi");
const bodyParse = require("body-parser");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const requireAuth = require("../middleware/authMiddleware");
const requireuserAuth = require("../middleware/userAuthMiddleware");


const checkPasswordValidation = require('../passwordValidator');
const { Types } = require("../model/type");

const createToken = (id,type )=>{
    let signature = "Challenge App | kunkkybaba was here doing wonders";
    if (type==='user'){
        signature +=' for users';
    }
    const expDate = 3 * 24 * 60 * 60;
    return token = jwt.sign({ id }, signature, { expiresIn: expDate});

 
}

//default Get
router.get("/",(req,res)=>{
    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Challenge app api",
        data: "no data Sent"
    });
})

//default Get
router.get('/logout', bodyParse.json(), async (req, res) => {
    //check error and return error
        try {
            //delete Token
            res.cookie('token', 'Bye', { httpOnly: true, maxAge: 1 });            
            return res.status(200).send({
                responseCode: "00",
                responseMessage: " Logged out successfully",
                data: null
            });

        } catch (error) {
            console.log(error);
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to logout",
                data: null

            });
        }


})
//done Question fecting works for admin
router.get('/getAllQuestions', requireAuth, async (req, res) => {
    try {
        const question = await Questions.find();
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Question Fetch Successfully",
            data: question
        })
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "internal Server erroe",
            data: null
        })
    }
})


//Get Question by id 
router.get('/getQuestionById', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        _id: Joi.string()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        const { _id } = req.body;

        try {
            const items = await Questions.find({ _id });
            
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Question Retrieved successfully",
                data: items
            });

        } catch (error) {
            console.log(error);
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Failed to retrieve "+_id,
                data: null

            });
        }

    }

})
//user Routes userAuthMiddleware
router.get('/getAllUserQuestions', requireuserAuth, async (req, res) => {
    try {
        const question = await Questions.find();
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Question Fetch Successfully",
            data: question
        })
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "internal Server erroe",
            data: null
        })
    }
})


//Get Question by id 
router.get('/getUserQuestionById', requireuserAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        _id: Joi.string()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        const { _id } = req.body;

        try {
            const items = await Questions.find({ _id });
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Question Retrieved successfully",
                data: items
            });
        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to retrieve "+_id,
                data: null
            });
        }
    }

})

//Get Question by Level
router.get('/getUserQuestionByLevel', requireuserAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        questionLevel: Joi.string()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        console.log(error);
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        const { questionLevel } = req.body;

        try {
            const items = await Questions.find({ questionLevel });
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Question Retrieved successfully",
                data: items
            });
        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to retrieve " + level,
                data: null
            });
        }
    }

})

//Get Question by Category
router.get('/getUserQuestionByCategory', requireuserAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        questionType: Joi.string()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        console.log(error);
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        const { questionType } = req.body;

        try {
            const items = await Questions.find({ questionType });
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Question Retrieved successfully",
                data: items
            });
        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to retrieve " + questionType,
                data: null
            });
        }
    }

})

//admin Routes

//createQuestions Api
router.post('/createQuestions', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        questionType: Joi.string().min(3).max(20).required(),
        questionLevel: Joi.string().min(3).max(20).required(),
        question: Joi.string().min(20).required(),
        solution: Joi.string().min(20).required(),
        answer: Joi.string().required(),
        author: Joi.string().required()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { questionType, questionLevel, question, solution, author, answer } = req.body;
    
   
    try {
        //save in database
        const newQuestion = new Questions({
            questionType, questionLevel, question, solution, author, answer,
            dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
        });
        
        await newQuestion.save()
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Question created successfully",
            data: newQuestion
        })
    
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "Internal server error",
            data: 'null'+error
        })
        
    }
})
//createQuestions Levels Api
router.post('/createQuestionLevel', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        questionLevel: Joi.string().min(3).max(20).required(),
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { questionLevel} = req.body;


    try {
        //save in database
        const newLevel = new Levels({
            questionLevel, 
            dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
        });

        await newLevel.save()
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Question Level created successfully",
            data: newLevel
        })

    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "Internal server error",
            data: 'null' + error
        })

    }
})

//createQuestions Types Api
router.post('/createQuestionType', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        questionType: Joi.string().min(3).max(20).required(),
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { questionType } = req.body;


    try {
        //save in database
        const newType = new Types({
            questionType,
            dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
        });

        await newType.save()
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Question Type created successfully",
            data: newType
        })

    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "Internal server error",
            data: 'null' + error
        })

    }
})


//delete Post 
router.delete('/deleteQuestionsById', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        _id: Joi.string()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        console.log("error");
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else{
        //check if id exists
        const { _id } = req.body;
        //Delete
        try {
            const result = await Questions.deleteOne({ _id });
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Question "+_id+" deleted successfully",
                data: []
            });
        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to Delete " + _id,
                data: null
            });
        }

    
    }

})


//delete Level 
router.delete('/deleteLevelById', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        _id: Joi.string()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        console.log("error");
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        const { _id } = req.body;
        //Delete
        try {
            const result = await Levels.deleteOne({ _id });
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Question " + _id + " deleted successfully",
                data: []
            });
        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to Delete " + _id,
                data: null
            });
        }


    }

})

//delete Type 
router.delete('/deleteTypeById', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        _id: Joi.string()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        console.log("error");
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        const { _id } = req.body;
        //Delete
        try {
            const result = await Types.deleteOne({ _id });
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Type or Category  " + _id + " deleted successfully",
                data: []
            });
        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to Delete " + _id,
                data: null
            });
        }


    }

})


//Update by Id
router.put('/updateQuestionsById', requireAuth, bodyParse.json(), async (req, res) => {
        const Schema = Joi.object({
        questionType: Joi.string().min(3).max(20).required(),
        questionLevel: Joi.string().min(3).max(20).required(),
        question: Joi.string().min(20).required(),
        solution: Joi.string().min(20).required(), 
        author: Joi.string().required(),
        answer: Joi.string().required(),
        _id: Joi.string().required()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { questionType, questionLevel, question, solution, author, _id, answer } = req.body;

    try {
        const result = await Questions.updateOne(
            { _id },
            { $set: 
                    //save in database
                {
                questionType, questionLevel, question, solution, author, _id, answer,
                dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
                }
            }
        );
        console.log(result);
        if (result.modifiedCount>0){
            //successful
            return res.status(200).send({
                responseCode: "00",
                responseMessage: _id+' updated successfully',
                data: {
                    questionType, questionLevel, question, solution, author, _id, answer,
                    dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
                }
            });
        }
        else{
            //not successful
            return res.status(400).send({
                responseCode: "96",
                responseMessage: 'cannot update'+_id,
                data: null
            });
        }
    } catch (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: 'cannot update',
            data: null
        });
    }
})
//Get all users
router.get('/getAllUsers', requireAuth, async (req, res) => {
    try {

        const question = await Users.find();
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Users Fetch Successfully",
            data: question
        })
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "internal Server erroe",
            data: null
        })
    }
})

//Get all Levels
router.get('/getAllLevels', async (req, res) => {
    try {

        const question = await Levels.find();
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Levels Fetch Successfully",
            data: question
        })
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "internal Server erroe",
            data: null
        })
    }
})

//Get all Levels
router.get('/getAllTypes', async (req, res) => {
    try {

        const question = await Types.find();
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Levels Fetch Successfully",
            data: question
        })
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "internal Server erroe",
            data: null
        })
    }
})



//user registration
router.put('/registeration', bodyParse.json(), async (req, res) => {
    const strongPasswordRegex = /(?=.*[A-Z])^(?=.*[a-z])^(?=.*[0-9])/;
    const Schema = Joi.object({
        stack: Joi.string().min(2).max(20).required(),
        level: Joi.string().min(2).max(20).required(),
        fullname: Joi.string().min(2).required(),
        password: Joi.string().min(8).required().regex(strongPasswordRegex).messages({
            'string.pattern.base': 'Password must include at least one uppercase letter, one lowercase letter, and one digit',
        }),
        email: Joi.string().required().email().min(3).max(50),
        phone: Joi.string().required().min(3).max(15),
        type: Joi.string().required().min(3).max(15),        
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { level, fullname, stack, email, password, phone ,type} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        //check if data exist
        const existUser = await Users.findOne({ email });
        if (existUser === null)
            {
                //save in database
                const newUser = new Users({
                    level, fullname, stack, email
                    , hashedPassword,phone, type:"user",
                    dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON(),type
                });
            //save user to db
               const createUser= await newUser.save()
               //create Token for user
            const token = createToken(newUser._id.toString()+ newUser.fullname.toString()+ newUser.phone.toString(), "user")
            res.cookie(type+'token', token, { httpOnly: true, maxAge:3*24*60*60*1000});

                //send info to user
                res.status(200).send({
                    responseCode: "00",
                    responseMessage: "User Registrating successfully",
                    data: newUser
                })
            }
        else{
            res.status(400).send({
                responseCode: "96",
                responseMessage: "User already registered",
                data: null
            })
        
        }

    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "Internal server error",
            data: 'null' + error
        })

    }
})



//admin Login userLogin
router.post('/login', bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        email: Joi.string().required().email().max(50),
        type: Joi.string().required(),
        password: Joi.string().required(),
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    console.log(req.body.type);

    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { email, password, type } = req.body;
    
    try {
        //check if data exist
        const existUser = await Users.findOne({ email });
        if (existUser === null) {
            //return error user doesnt exist
          return  res.status(400).send({
                responseCode: "96",
                responseMessage: "Wrong Credentials",
              data: null
            })
        }
        else {

            //check if password equals
            const Auth = await bcrypt.compare(password, existUser.hashedPassword )
            if (Auth===true){
                if (existUser.type.toString() === type){
                    //create Token for user
                    const token = createToken(existUser._id.toString() + existUser.fullname.toString() + existUser.phone.toString(), type)
                    res.cookie(type+'token', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 });

                    //send info to user
                    res.status(200).send({
                        responseCode: "00",
                        responseMessage: "User Signed in successfully",
                        data: existUser
                    })
                }
                else{

                    //send info to user
                    res.status(400).send({
                        responseCode: "96",
                        responseMessage: "You are not allowed here",
                        data: null
                    })
                
                }

            }
            else{
                res.status(400).send({
                    responseCode: "96",
                    responseMessage: "Wrong Password",
                    data: null
                })
            
            
            }

        }

    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "Internal server error",
            data: 'null' + error
        })

    }
})


//user logout
router.post("/logout", (req, res) => {
    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Challenge app api",
        data: "no data Sent"
    });
})

//user password update
router.put("/passwordUpdate", (req, res) => {
    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Challenge app api",
        data: "no data Sent"
    }); 
})

module.exports.questionRouter = router;