let mongoose = require('mongoose');

let SurveyThree = mongoose.Schema({
    questionOne: String,
    questionTwo: String,
    questionThree: String,
    questionFour: String
},
{
    collection: 'survey_three'
});

module.exports = mongoose.model('SurveyThree', SurveyThree);