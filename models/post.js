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

    },
    //include the array of ids of all comments in this post Schema itself

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }] 
    
},{
    // timestamps tell you two things created and upadated at 
    timestamps:true,
});

//Now we need to export this

const Post=mongoose.model('Post',postSchema);
module.exports=Post;