const model = require('../models')
const {ToDoList} = model

let getAllToDoList = async(req, res) => {
    const todolists = await ToDoList.findAll()

    res.status(200).json(todolists)
}

let addToDoList = async(req, res) => {
    const todolist = await ToDoList.create(
        {
            title: req.body.title,
            description: req.body.description,
            startTime: req.body.startTime,
            status: false,
            // userId: 1
        }
    )

    res.status(201).json(addToDoList)
}

let getToDoListByID = async(req, res) => {
    const todolist = await ToDoList.findByPk(req.params.id)

    res.status(200).json(todolist)
}

let updateToDoListByID = async(req, res) => {
    await ToDoList.update(
        {
            title: req.body.title,
            description: req.body.description,
            startTime: req.body.startTime,
            status: req.body.status,
            // userId: 1
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

let deleteToDoListByID = async(req, res) => {
    await ToDoList.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(201).json({
        message: 'Delete success'
    })
}

module.exports = {
    getAllToDoList,
    addToDoList,
    getToDoListByID,
    updateToDoListByID,
    deleteToDoListByID
}