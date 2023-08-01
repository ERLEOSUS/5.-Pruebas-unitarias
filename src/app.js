const express=require('express')
const app=express()
app.use(express.json())
app.use('/users', require('./routes/user'))

app.listen (3000)
console.log ('Server corriendo en el Puerto 3000')

module.exports = app;