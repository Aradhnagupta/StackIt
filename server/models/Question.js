const mongoose=require('mongoose')

const QuesSchema= new mongoose.Schema({
    Question:{
         type:String,
        required:true
    },
    Description:{
         type:String,
    required:true
    },
    Tags:{
        type:[String],
    }

})

module.exports= mongoose.model("QuesSchema",QuesSchema)