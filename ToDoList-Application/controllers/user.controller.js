const model = require('../models')
const {User} = model

let getAllUser = async(req, res) => {
    const users = await User.findAll({
        attributes: {exclude: ['password']}
    })

    res.status(200).json(users)
}

let getUserByID = async(req, res) => {
    const user = await User.findByPk(req.params.id, {
        attributes: {exclude: ['password']}
    })

    if(user){
        res.status(200).json(user)
    } else {
        res.status(404).json({message: "No user found"})
    }

}

let updateUserByID = async(req, res) => {
    const user = await User.findByPk(req.params.id, {
        attributes: {exclude: ['password']}
    })

    if(user){
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
    } else {
        res.status(404).json({message: "No user found"})
    }
}

let deleteUserByID = async(req, res) => {
    const user = await User.findByPk(req.params.id, {
        attributes: {exclude: ['password']}
    })

    if(user){
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
    
        res.status(201).json({
            message: 'Delete success'
        })
    } else {
        res.status(404).json({message: "No user found"})
    }
}

module.exports = {
    getAllUser,
    getUserByID,
    updateUserByID,
    deleteUserByID
}