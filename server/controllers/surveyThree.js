let express = require('express');
let router = express.Router();
let SurveyThree = require('../models/surveyThree');
module.exports.displaySurveyList = (req, res, next) => {
    SurveyThree.find((err, surveyList) => {
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
    let newSurvey = SurveyThree({
        "questionOne": req.body.questionOne,
        "questionTwo" : req.body.questionTwo,
        "questionThree" : req.body.questionThree,
        "questionFour" : req.body.questionFour
    });
    // Add new Order Object to the Database
    SurveyThree.create(newSurvey, (err, Survey) => {
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

/* GET router for the DELETE Survey Three Response page - DELETE */
module.exports.performResponseDeletion =  (req, res, next) => {
    let id = req.params.id;
    SurveyThree.deleteOne({_id: id}, (err) =>{
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh book list
            //res.redirect('/surveyOne/list');
            res.json(id);
        }
    });
}