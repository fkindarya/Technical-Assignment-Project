const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

const router = require('./routes')

// Menerima input berupa json
app.use(express.json())

// Menuju router
app.use(router)

// Saat di run akan ditampilkan
app.listen(PORT, () => {
    console.log('server running on port', PORT)
})