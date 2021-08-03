const { check, validationResult } = require('express-validator');

//validation check for request for admin and user customerccccvvvbccccxccc

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('lastName'),
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long')
];

exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req); //returns array of erros
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg }) //showing only first error msg message
    }
    next();
}