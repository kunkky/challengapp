const express = require("express");
const { Questions } = require('../model/question');
const { Users } = require('../model/user');
const Joi = require("joi");
const bodyParse = require("body-parser");
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const  requireAuth = require("../middleware/authMiddleware")

const checkPasswordValidation = require('../passwordValidator');

const createToken = (id )=>{
    const expDate = 3 * 24 * 60 * 60;
    return token = jwt.sign({id}, 'Challenge App | kunkkybaba was here doing wonders', { expiresIn: expDate});

 
}

//default Get
router.get("/",(req,res)=>{
    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Challenge app api",
        data: "no data Sent"
    });
})

//done Question fecting works
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
router.post('/getQuestionById', bodyParse.json(), async (req, res) => {
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

        const question = await Questions.findOne({ _id });
        console.log(question);
        return res.status(200).send({
            responseCode: "00",
            responseMessage: "Question Retrieved successfully",
            data: question
        });


    }

})
//admin Routes

//createQuestions Api
router.post('/createQuestions', bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        questionType: Joi.string().min(3).max(20).required(),
        questionLevel: Joi.string().min(3).max(20).required(),
        question: Joi.string().min(20).required(),
        solution: Joi.string().min(20).required(),
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
    const { questionType, questionLevel, question, solution,author } = req.body;
    
   
    try {
        //save in database
        const newQuestion = new Questions({
            questionType, questionLevel, question, solution, author,
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

//delete Post 
router.delete('/deleteQuestionsById', bodyParse.json(), async (req, res) => {
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
    else{
        //check if id exists
        const { _id } = req.body;

        //Delete
        const result = await Questions.deleteOne({ _id });
        console.log(result);
        if (result.deletedCount > 0) {

            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Question deleted successfully",
                data: []
            });
        
        }
        else{
            //question does not exist
            return res.status(400).send({
                responseCode: "00",
                responseMessage: "Question Does Not Exist",
                data: []
            });
        }


    
    }

})

router.put('/updateQuestionsById', bodyParse.json(), async (req, res) => {
        const Schema = Joi.object({
        questionType: Joi.string().min(3).max(20).required(),
        questionLevel: Joi.string().min(3).max(20).required(),
        question: Joi.string().min(20).required(),
        solution: Joi.string().min(20).required(),
        author: Joi.string().required(),
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
    const { questionType, questionLevel, question, solution, author, _id } = req.body;

    try {
        const result = await Questions.updateOne(
            { _id },
            { $set: 
                    //save in database
                {
                questionType, questionLevel, question, solution, author,_id,
                dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
                }
            }
        );
        console.log(result);
        if (result.modifiedCount>0){
            //successful
            return res.status(200).send({
                responseCode: "00",
                responseMessage: 'update successful',
                data: {
                    questionType, questionLevel, question, solution, author, _id,
                    dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
                }
            });
        }
        else{
            //not successful
            return res.status(400).send({
                responseCode: "96",
                responseMessage: 'cannot update',
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
router.get('/getAllUsers', async (req, res) => {
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
        phone: Joi.string().required().min(3).max(15)
        
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
    const { level, fullname, stack, email, password, phone } = req.body;
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
                    , hashedPassword,phone,
                    dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
                });
            //save user to db
               const createUser= await newUser.save()
               //create Token for user
            const token = createToken(newUser._id.toString()+ newUser.fullname.toString()+ newUser.phone.toString())
                res.cookie('token', token, { httpOnly: true, maxAge:3*24*60*60*1000});

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



//user Login
router.post('/login', bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        password: Joi.string().required(),
        email: Joi.string().required().email().max(50)

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
    const { email, password } = req.body;
    try {
        //check if data exist
        const existUser = await Users.findOne({ email });
        if (existUser === null) {
            //return error user doesnt exist
          return  res.status(400).send({
                responseCode: "96",
                responseMessage: "Email Not Registered",
              data: null
            })
        }
        else {

            //check if password equals
            const Auth = await bcrypt.compare(password, existUser.hashedPassword )
            if (Auth===true){
                //create Token for user
                const token = createToken(existUser._id.toString())
                res.cookie('token', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 });

                //send info to user
                res.status(200).send({
                    responseCode: "00",
                    responseMessage: "User Signed in successfully",
                    data: existUser
                })


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