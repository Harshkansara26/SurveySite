let mongoose = require('mongoose');

let SurveyOne = mongoose.Schema({
    questionOne: String,
    questionTwo: String,
    questionThree: String,
    questionFour: String
},
{
    collection: 'survey_one'
});

module.exports = mongoose.model('SurveyOne', SurveyOne);