const model = require('../models')
const {ToDoList} = model

const jwt = require('jsonwebtoken')

let getAllToDoList = async(req, res) => {
    try {
        const auth = await req.headers.authorization
        const token = await auth.split(" ")[1]

        const verified = await jwt.verify(token, 'secret')

        const todolists = await ToDoList.findAll(
            {
                where: {
                    userId: verified.id
                }
            }
        )

        res.status(200).json(todolists)
    } catch (error) {
        res.status(401).json({message: "Unauthorized"})
    }
}

let addToDoList = async(req, res) => {
    try {
        const auth = await req.headers.authorization
        const token = await auth.split(" ")[1]

        const verified = await jwt.verify(token, 'secret')

        const todolist = await ToDoList.create(
            {
                title: req.body.title,
                description: req.body.description,
                startTime: req.body.startTime,
                status: false,
                userId: verified.id
            }
        )
    
        res.status(201).json(todolist)
    } catch (error) {
        res.status(401).json({message: "Unauthorized"})
    }
}

let getToDoListByID = async(req, res) => {
    try {
        const auth = await req.headers.authorization
        const token = await auth.split(" ")[1]

        const verified = await jwt.verify(token, 'secret')
        
        const todolist = await ToDoList.findByPk(req.params.id)
        
        if (todolist.userId != verified.id) {
            res.status(401).json({message: "Unauthorized"})
        }

        res.status(200).json(todolist)
    } catch (error) {
        res.status(401).json({message: "Unauthorized"})
    }
}

let updateToDoListByID = async(req, res) => {
    try {
        const auth = await req.headers.authorization
        const token = await auth.split(" ")[1]

        await jwt.verify(token, 'secret')

        await ToDoList.update(
            {
                title: req.body.title,
                description: req.body.description,
                startTime: req.body.startTime,
                status: req.body.status
            }, {
                where: {
                    id: req.params.id
                }
            }
        )
        
        res.status(201).json({
            message: 'Update success'
        })
    } catch (error) {
        res.status(401).json({message: "Unauthorized"})
    }

}

let deleteToDoListByID = async(req, res) => {
    try {
        const auth = await req.headers.authorization
        const token = await auth.split(" ")[1]

        await jwt.verify(token, 'secret')
        
        await ToDoList.destroy({
            where: {
                id: req.params.id
            }
        })
    
        res.status(201).json({
            message: 'Delete success'
        })
    } catch (error) {
        res.status(401).json({message: "Unauthorized"})
    }
}

let deleteAllToDoList = async(req, res) => {
    try {
        const auth = await req.headers.authorization
        const token = await auth.split(" ")[1]

        const verified = await jwt.verify(token, 'secret')

        await ToDoList.destroy({
            where: {
                userId: verified.id
            }
        })

        res.status(201).json({
            message: 'Delete success'
        })

    } catch (error) {
        res.status(401).json({message: "Unauthorized"})
    }
}

module.exports = {
    getAllToDoList,
    addToDoList,
    getToDoListByID,
    updateToDoListByID,
    deleteToDoListByID,
    deleteAllToDoList
}