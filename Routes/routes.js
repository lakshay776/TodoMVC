const mongoose= require('mongoose')
const {ToDoModel}= require('../Model/database.js')
const express= require('express')
const router= express.Router()
const {addTask}= require('../Contorllers/addTask.js')
const {getTask}= require('../Contorllers/getTasks.js')

router.post('/addTask',addTask)
// router.get('/getTask',getTask)

module.exports={router}