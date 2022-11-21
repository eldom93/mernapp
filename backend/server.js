require('dotenv').config()
const express = require('express')

// creates express app 
const app = express()

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'welcome to khara'})
})


//listening for req
app.listen(process.env.PORT, () => {
    console.log('kos omaku koloko')
})

process.env