const Survey = require('../models/survey')
class SurveyController {
    async index(req, res) {
        try {
            let survey = await Survey.find({})
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
            let survey = new Survey(payload)
            await survey.save()
            return res.status(200).json({success: true, data: survey})
        } catch (error) {
            return res.status(500).json({success: false, error: error.message})
        }
    }
    
    async update(req, res) {
        try {
            let data = await Survey.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, new: true})
            return res.status(200).json({success: true, data: data}) 
        } catch (error) {
            return res.status(500).json({success: false, error: error.message})
        }
    }
 }

module.exports = new SurveyController()