// http://localhost:8000
const Post=require('../models/post');

const User=require('../models/user');
module.exports.home=async function(req,res){
    // return res.end('<h1>Express is up for codeial</h1>');
    // console.log(req.cookies);
    // res.cookie('user_id','25');
    //cookies coming in as request, but going as a response
    // so I need to change the value in res

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:'Codeial|Home',
    //         posts:posts
    //     });
    //     //so passing on all the  posts now to display we use home views
    // })


//get all the posts of a user if we have the user’s id (user_id) from our current schema

//The following query deletes all users with age > 10


//populate the comments in that post and the user of each of the comments
// Post.find({}).populate('comments').populate('user').exec(function(err,posts){




    //Populating the user of each posts

    // Post.find({}).populate('user').exec(function(err,post){
    //     return res.render('home',{
    //         title:'Codeial|Home',
    //         posts:post
    //     });
    // })
    
 //Populating the user of each posts
  // Post.find({})
  // .populate('user')
  // .populate({
  //   path:'comments',
  //   populate:{
  //       path:'user'
  //   }
  // }) 
  // .exec(function(err,posts){
  //   return res.render('home',{
  //       title:'Codeial|Home',
  //       posts:posts
  //   });
  // })

// Much cleaner code Async Await
try{
  let posts=await Post.find({})
  .populate('user')
  .populate({
    path:'comments',
    populate:{
        path:'user'
    }
  }) ;
  
  let users=await User.find({});
  return res.render('home',{
    title:'Codeial|Home',
    posts:posts
  });
}catch(err){
  console.log('Error',err);
}




}
//Using then
// Post.find({}).populate('comments').then(function());

// let posts=Post.find({}).populate('comments').exec();

// posts.then(); //will control the execution of the above promise


//Now using aync await : it tells the server that this code is asynchronous and it will wait for the promise to be resolved


// http://localhost:8000/action
module.exports.action=function(req,res){
    return res.end('<h1>And Yuup</h1>')
}
//where home is the name of the function, hit the url and it will return the response. 

// module.exports.subposts=function(req,res){
//     return res.render('home.ejs')
// }


