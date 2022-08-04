// http://localhost:8000
const Post=require('../models/post');

module.exports.home=function(req,res){
    // return res.end('<h1>Express is up for codeial</h1>');
    // console.log(req.cookies);
    // res.cookie('user_id','25');
    //cookies coming in as request, but going as a response
    // so I need to change the value in res

    Post.find({},function(err,posts){
        return res.render('home',{
            title:'Codeial|Home',
            posts:posts
        });
        //so passing on all the  posts now to display we use home views
    })

    //Populating the user of each posts
    Post.find({}).populate('user').exec(function(err,post){
        
    })
    
}

// http://localhost:8000/action
module.exports.action=function(req,res){
    return res.end('<h1>And Yuup</h1>')
}
//where home is the name of the function, hit the url and it will return the response. 

// module.exports.subposts=function(req,res){
//     return res.render('home.ejs')
// }


