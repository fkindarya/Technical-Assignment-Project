const express = require('express')
const { 
    getAllToDoList,
    getToDoListByID,
    addToDoList,
    updateToDoListByID,
    deleteToDoListByID,
    deleteAllToDoList
} = require('../controllers/todolist.controller')

todolistRouter = express.Router()

todolistRouter.get('/', getAllToDoList)
todolistRouter.post('/', addToDoList)
todolistRouter.delete('/', deleteAllToDoList)
todolistRouter.get('/:id', getToDoListByID)
todolistRouter.put('/:id', updateToDoListByID)
todolistRouter.delete('/:id', deleteToDoListByID)

module.exports = todolistRouter