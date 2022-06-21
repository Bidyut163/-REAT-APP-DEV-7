const { body } = require('express-validator');

module.exports = [
    body('appealNum', 'Please enter a appeal number').isLength({ min: 1 }),
    body('complaintNum', 'Please enter a complaint number').isLength({
        min: 1,
    }),
    body('appellant', 'Please enter a appellant name').isLength({ min: 1 }),
    body('respondent', 'Please enter a respondent name').isLength({
        min: 1,
    }),
];
