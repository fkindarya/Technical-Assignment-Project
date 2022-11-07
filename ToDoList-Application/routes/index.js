const express = require('express')

const router = express.Router()

const authRouter = require('../routes/auth.route')
const userRouter = require('../routes/user.route')
const todolistRouter = require('../routes/todolist.route')

router.get('/', (req, res) => {
    res.status(200).json({message: 'Hello'})
})

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/todolist', todolistRouter)

module.exports = router