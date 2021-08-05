const { check } = require('express-validator')

exports.userSignupValidator = [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
        // .withMessage('Name is required'),
    check('email', 'Must be a valid email address')
        .isEmail(),
        // .withMessage(),
    check('password', 'Password must be at least 6 characters long')
        .isLength({ min: 6 })
        // .withMessage()
]


exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
]