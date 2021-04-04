let express = require('express');
let router = express.Router();

let surveyOneController = require('../controllers/surveyOne');

/* GET Order List page -- READ Operation */
router.get('/list', surveyOneController.displaySurveyList);

/* POST Route for processing the Add Order Page */
router.post('/add', surveyOneController.processAddPage);

/* GET router for the DELETE Survey Response page - DELETE */
router.delete('/delete/:id', surveyOneController.performResponseDeletion);

module.exports = router;