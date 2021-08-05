const express = require('express')
const router = express.Router()
const { runValidation } = require('../validators')
const {userSignupValidator} = require('../validators/authValidator')
const {register} = require('../controllers/userApiController')

// @route         POST api/users
// @desc          Register a user
// @access        Public

router.post('/', userSignupValidator, runValidation, register)

module.exports =router