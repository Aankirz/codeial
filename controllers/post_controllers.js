module.exports.posts=function(req,res){
    return res.end('<h1>Posts Section</h1>')
}

const Post=require('../models/post')
const User=require('../models/user')


module.exports.create=function(req,res){
   Post.create({
    content:req.body.content,
    // user:req.user._id
   },function(err,post){
      if(err){
        console.log('error in creating post');
        return;
      }
      return res.redirect('back');
      //ToDo check of user signed in or not
 //Now creating routes for it.
   })
}
module.exports.create1=async function(req,res){
  try{
    let posts=await Post.create({
      content:req.body.content,
    })
    return res.redirect('back');
  }catch(err){
   console.log('error in creating post');
  }
  
  
}