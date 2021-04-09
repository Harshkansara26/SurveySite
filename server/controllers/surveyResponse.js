let express = require('express');
let router = express.Router();
const SurveyResponse = require('../models/surveyResponse');


class SurveyResponseController {
    async index(req, res) {
        try {
            let survey = await SurveyResponse.find({})
            return res.status(200).json({success: true, data: survey})
        } catch (error) {
            return res.status(500).json({success: false, error: error.message})
        }
    }

    async create(req, res) {
        try {
            let payload = {
                ...req.body,
                // user: req.user.id
            }
            let survey = new SurveyResponse(payload)
            await survey.save()
            return res.status(200).json({success: true, data: survey})
        } catch (error) {
            return res.status(500).json({success: false, error: error.message})
        }
    }
}

module.exports = new SurveyResponseController()

module.exports.performSurveyDeletion =  (req, res, next) => {
    let id = req.params.id;
    SurveyResponse.remove({_id: id}, (err) =>{
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh book list
            res.json(id);
        }
    });
}