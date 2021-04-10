
let express = require('express');
let router = express.Router();
let passport = require('passport');

let surveyThreeController = require('../controllers/surveyThree');

/* GET Order List page -- READ Operation */
router.get('/', surveyThreeController.displaySurveyList);
router.get('/list', passport.authenticate('jwt', {session: false}),  surveyThreeController.displaySurveyList);

/* POST Route for processing the Add Order Page */
router.post('/add', surveyThreeController.processAddPage);

/* GET router for the DELETE Survey Response page - DELETE */
router.delete('/delete/:id', passport.authenticate('jwt', {session: false}),  surveyThreeController.performResponseDeletion);

module.exports = router;