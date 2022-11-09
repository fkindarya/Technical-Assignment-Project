const model = require('../models')
const {User} = model

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

let registerAuth = async(req, res) => {
    const data = req.body

    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds)
    data.password = hash

    const user = await User.create(data)

    res.status(201).json(user)
}

let loginAuth = async(req, res) => {
    const data = await req.body

    const userData = await User.findOne({
            where: {
                email: data.email
            }
        }
    )

    if(userData){
        const check = bcrypt.compareSync(data.password, userData.password)

        if(check){
            const token = jwt.sign(
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
        } else {
            res.status(401).json({
                message: "Unauthorized"
            })
        }
    } else {
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}

module.exports = {
    registerAuth,
    loginAuth
}