const model = require('../models')
const {User} = model

const jwt = require('jsonwebtoken')

let registerAuth = async(req, res) => {
    const user = await User.create({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    })

    res.status(201).json(user)
}

let loginAuth = async(req, res) => {
    const {email, password} = await req.body

    // const users = await User.findAll()

    // const userData = users.find(
    //     (user) => email === user.email && password === user.password
    // )

    const userData = await User.findOne(
        {
            where: {
                email: email,
                password: password
            }
        }
    )

    const token = await jwt.sign(
        {
            id: userData.id,
            fullName: userData.fullName,
            email: userData.email
        }, 'secret', { expiresIn: '1h' }
    )

    res.status(201).json({
        message: "Login success",
        token
    })
}

module.exports = {
    registerAuth,
    loginAuth
}