const mongoose =require('mongoose')
const {ToDoModel} = require('../Model/database.js')

function addTask(req,res){
    const body= req.body
    ToDoModel.create({
        taskName:body.taskName,
        taskDescription:body.taskDescription,
        endTime:body.endTime
    })
    res.status(201).json({message:"added new task"})
}
module.exports={addTask}