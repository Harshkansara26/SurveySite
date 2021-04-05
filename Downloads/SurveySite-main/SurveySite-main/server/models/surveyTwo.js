let mongoose = require('mongoose');

let SurveyTwo = mongoose.Schema({
    questionOne: String,
    questionTwo: String,
    questionThree: String,
    questionFour: String
},
{
    collection: 'survey_two'
});

module.exports = mongoose.model('SurveyTwo', SurveyTwo);