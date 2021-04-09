const express = require('express')
const passport = require('passport')
const router = express.Router()
const Survey = require('../controllers/survey')

const auth = passport.authenticate('jwt', {session: false})

router.get('/', [], Survey.index)
router.post('/create', [], Survey.create)


/* GET router for the DELETE Survey Response - DELETE */
router.delete('/delete/:id', [], Survey.performSurveyDeletion);

router.get('/:id',[],Survey.show )

module.exports = router