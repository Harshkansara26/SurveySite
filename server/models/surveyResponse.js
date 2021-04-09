const {Schema, model} = require('mongoose')

const SurveyResponse = Schema({
    name: {
        type: String
    },
    questions: [],
    user: {
        type: Schema.Types.Mixed,
        ref: 'User'
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {timestamp: true})

module.exports = model('SurveyResponse', SurveyResponse)