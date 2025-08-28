const {ToDoModel}= require('../Model/database.js')

async function getTasks(req,res){
    try{const data=await ToDoModel.find()
    res.json(data)
    }catch(err){
        console.log(err)
    }
}
module.exports={getTasks}