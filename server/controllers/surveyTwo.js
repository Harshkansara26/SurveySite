let express = require('express');
let router = express.Router();

let SurveyTwo = require('../models/surveyTwo');

module.exports.displaySurveyList = (req, res, next) => {
    SurveyTwo.find((err, surveyList) => {
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
    let newSurvey = SurveyTwo({
        "questionOne": req.body.questionOne,
        "questionTwo" : req.body.questionTwo,
        "questionThree" : req.body.questionThree,
        "questionFour" : req.body.questionFour
    });

    // Add new Order Object to the Database
    SurveyTwo.create(newSurvey, (err, Survey) => {
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

/* GET router for the DELETE Book page - DELETE */
module.exports.performSurveyResponseDeletion =  (req, res, next) => {
    let id = req.params.id;
    SurveyTwo.remove({_id: id}, (err) =>{
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh book list
            res.json(id);
        }
    });
};