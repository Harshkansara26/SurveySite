const express = require('express')
const passport = require('passport')
const router = express.Router()

const SurveyResponse = require('../controllers/surveyResponse')

router.get('/', [], SurveyResponse.index)
router.post('/create', [], SurveyResponse.create)
router.delete('/delete/:id', [], SurveyResponse.performSurveyDeletion);
module.exports = router