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

/* GET router for the DELETE Survey One Response page - DELETE */
module.exports.performResponseDeletion =  (req, res, next) => {
    let id = req.params.id;
    SurveyOne.remove({_id: id}, (err) =>{
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

//Survey One Edit

/* POST router for the EDIT Survey One page - UPDATE */
module.exports.processSurveyOneResUpdate = (req, res, next) => {
    let id = req.params.id;
    console.log('vamsi test  ' + id);
    let updatedSurveyOne = SurveyOne ({
        _id: id,
        questionOne: req.body.questionOne,
        questionTwo: req.body.questionTwo,
        questionThree: req.body.questionThree,
        questionFour: req.body.questionFour,
    });

    updatedSurveyOne.updateOne({_id: id}, updatedSurveyOne, (err) => {
        if(err){
            console.log(err);
            res.end(err); 
        } else {
            // refresh booklist
            return res.json(updatedSurveyOne);
           
        }
    });
};

/* GET router for the EDIT Book page - UPDATE */
module.exports.displayEditResponse = (req, res, next) => {
    let id = req.params.id;
    SurveyOne.findById(id, (err, resposeToEdit) =>{
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            return res.json(resposeToEdit);
        }
    });
};