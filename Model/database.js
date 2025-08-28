const mongoose= require('mongoose')

const ToDoSchema= mongoose.Schema({
    
    taskName:{
        type:String,
        required:true
    },
    taskDescription:{
        type:String, 
        required:true
    },
    createdAt:{
        type: Date,
        required:true,
        default:Date.now()
    },
    endTime:{
        type:Date, 
        required:true
    }
})
const ToDoModel= mongoose.model('ToDoModel', ToDoSchema);
module.exports= {ToDoModel}