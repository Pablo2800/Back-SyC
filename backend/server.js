require('dotenv').config()
const express = require('express');
const { connectDB } = require('./config/db')
const routes = require('./routes/productRoutes')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())

app.use('/', routes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
            console.log(`Server raised in port ${PORT}`)
        })

connectDB()