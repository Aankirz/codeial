const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    content:{
        type:String,
       required:true
    },
    //since we are accessing the user, and try to link it.
    user:{
       type:mongoose.Schema.ObjectId,
       ref:'User'

    }
        
    
},{
    // timestamps tell you two things created and upadated at 
    timestamps:true,
});

//Now we need to export this

const Post=mongoose.model('Post',postSchema);
module.exports=Post;