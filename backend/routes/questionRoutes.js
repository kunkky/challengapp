const express = require("express");
const { Questions } = require('../model/question');
const dbConnection = require('mongoose')

const Joi = require("joi");
const bodyParse = require("body-parser");

const router = express.Router()

//default Get
router.get("/",(req,res)=>{
    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Challenge app api",
        data: "no data Sent"
    });
})

//done Question fecting works
router.get('/getAllQuestions', async (req, res) => {
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

//user registration
router.put("/registeration", (req, res) => {
    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Challenge app api",
        data: "no data Sent"
    });
})

//user Login
router.post("/login", (req, res) => {
    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Challenge app api",
        data: "no data Sent"
    });
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

module.exports.router = router;