let express = require('express');
let router = express.Router();

let surveyTwoController = require('../controllers/surveyTwo');

/* GET Survey List page -- READ Operation */
router.get('/list', surveyTwoController.displaySurveyList);

/* POST Route for processing the Add Survey Response */
router.post('/add', surveyTwoController.processAddPage);

/* GET router for the DELETE Survey Response - DELETE */
router.delete('/delete/:id', surveyTwoController.performSurveyResponseDeletion);

module.exports = router;