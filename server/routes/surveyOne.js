let express = require('express');
let router = express.Router();
let passport = require('passport')


let surveyOneController = require('../controllers/surveyOne');

/* GET Order List page -- READ Operation */
router.get('/list', passport.authenticate('jwt', {session: false}),surveyOneController.displaySurveyList);

/* POST Route for processing the Add Order Page */
router.post('/add', surveyOneController.processAddPage);

/* GET router for the DELETE Survey Response page - DELETE */
router.delete('/delete/:id', passport.authenticate('jwt', {session: false}), surveyOneController.performResponseDeletion);

module.exports = router;