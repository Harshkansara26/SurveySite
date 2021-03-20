let express = require('express');
let router = express.Router();

let SurveyOne = require('../models/surveyOne');

module.exports.displaySurveyList = (req, res, next) => {
    SurveyOne.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.json(surveyList);
        }
    });
}

module.exports.processAddPage = (req, res, next) => {

    //Create a new Survey Object
    let newSurvey = SurveyOne({
        "questionOne": req.body.questionOne,
        "questionTwo" : req.body.questionTwo,
        "questionThree" : req.body.questionThree,
        "questionFour" : req.body.questionFour
    });

    // Add new Order Object to the Database
    SurveyOne.create(newSurvey, (err, Survey) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Added New Survey'});
        }
    }); 
}