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


//admin Routes
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
            dateCreated: new Date().toJSON()
        });
        
        const result = await newQuestion.save();
        console.log(
            `A document was inserted with the _id: ${result.insertedId}`,
        );
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Question created successfully",
            data: `A document was inserted with the _id: ${result.insertedId}`
        })
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "Internal server error",
            data: 'null'+error
        })
        
    }
})
//done Question fecting works
router.get('/getAllQuestions', async(req, res)=>{
    try{
       
        const question = await Questions.find();
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Question Fetch Successfully",
            data: question
        })
    }catch(error){
        res.status(500).send({
            responseCode:"96",
            responseMessage:"internal Server erroe",
            data:null
        })
    }
})

router.put('/updateQuestionsById', bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        title: Joi.string().min(3).max(20).required(),
        content: Joi.string().min(20).required(),
        author: Joi.string().required(),
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
    const { title, content, author } = req.body;
    try {
        let question = await Questions.findOne({ title })
        if (question) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "No Post Found with Id",
                data: null
            });
        } else {
            //save back to db
            question = { title, content, author, dateUpdated: new Date().toJSON() }
            await question.save()
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Question Updated Successfully",
                data: question
            });
        }
    } catch (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });
    }
})

router.delete('/deleteQuestionsById', bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        title: Joi.string().min(3).max(20).required(),
        content: Joi.string().min(20).required(),
        author: Joi.string().required(),
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
    const { title, content, author } = req.body;

})


module.exports.router = router;