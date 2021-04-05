let express = require('express');
let router = express.Router();

let surveyThreeController = require('../controllers/surveyThree');

/* GET Order List page -- READ Operation */
router.get('/', surveyThreeController.displaySurveyList);

/* POST Route for processing the Add Order Page */
router.post('/add', surveyThreeController.processAddPage);

module.exports = router;