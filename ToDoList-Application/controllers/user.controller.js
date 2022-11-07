const model = require('../models')
const {User} = model

let getAllUser = async(req, res) => {
    const users = await User.findAll()

    res.status(200).json(users)
}

let getUserByID = async(req, res) => {
    const user = await User.findByPk(req.params.id)

    res.status(200).json(user)
}

let updateUserByID = async(req, res) => {
    await User.update(
        {
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        }, {
            where: {
                id: req.params.id
            }
        }
    )

    res.status(201).json({
        message: 'Update success'
    })
}

let deleteUserByID = async(req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(201).json({
        message: 'Delete success'
    })
}

module.exports = {
    getAllUser,
    getUserByID,
    updateUserByID,
    deleteUserByID
}