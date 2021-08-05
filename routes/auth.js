const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const {userSigninValidator} = require('../validators/authValidator')
const { runValidation } = require('../validators')
const {checkSignin, signin} = require('../controllers/authApiController')

// @route         GET api/auth
// @desc          Get logged in user
// @access        Private

router.get('/',auth, checkSignin, runValidation)

// @route         POST api/auth
// @desc          Auth user and get token
// @access        Public

router.post('/', userSigninValidator , runValidation, signin)

module.exports =router