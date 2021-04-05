const {Schema, model} = require('mongoose')

const SurveySchema = Schema({
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

module.exports = model('Survey', SurveySchema)