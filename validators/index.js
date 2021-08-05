const { validationResult } = require('express-validator')

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(errors.array()[0].msg)
        return res.status(400).json({ error: errors.array()[0].msg})
    }
    next()
}