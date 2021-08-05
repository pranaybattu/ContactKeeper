const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')



exports.checkSignin = async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

exports.signin = async (req,res) => {
    const {email, password} = req.body

    try {
        let user = await User.findOne({email})

        if(!user) {
            return res.status(400).json({msg: 'Invalid credentials'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({msg: 'Invalid credentials'})
        }

        const payload = {
            user:{
                id:user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000,
        }, (err,token) => {
            if(err) throw err;
            res.json({token})
        }) 
    }
    catch(err) {
        console.error(err.message)
        res.status(500).json({ error: 'Server Error'})
    }
}