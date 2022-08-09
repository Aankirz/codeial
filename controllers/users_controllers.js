// one controller that could control many users
// will create one kind of schema
// and then we can use this schema to create many users

const User=require('../models/user');

module.exports.profile=function(req,res){
    
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(err){
                console.log('error in finding the user while profile');
                return;
            }
            if(user){
                return res.render('users_profile',{
                    title:'Codeial|Profile',
                    user:user
                })
            }else{
                return res.redirect('/users/sign-in');
            }
        })
    }else{
        return res.redirect('/users/sign-in');
    }
    
    
}

module.exports.user1=function(req,res){
    return res.end('<h1>User1</h1>')
}
// so now we are going to add some couple of acions
//rendering sign in actions
module.exports.signin=function(req,res){
    return res.render('user_sign_in',{
        title:'Codeial|Signin'
    })
}
//rendering sign up pages
module.exports.signup=function(req,res){
    return res.render('user_sign_up',{
        title:'Codeial|Signup'
    })
}

//get the sign up data
module.exports.create=function(req,res){
    //First step: check if the password and the confirm password are same
    if(req.body.password!=req.body.confirm_password){
        console.log(req.body.password);
        // console.log(req.body.confirm_password);
        console.log('password doesnt match');
        return res.redirect('back');//to send the user back to the previous page
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding the user in signing up');
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
         if(err){
        console.log('error in creating the user while signing up');
        return;
      }
      return res.redirect('/users/sign-in');
      }
            )
    } else{
        console.log('user already exists');
        return res.redirect('back');
    }
});
}

module.exports.createSession=function(req,res){
    //Steps to authenticate find the user
   //Find the user based on the email
   User.findOne({email: req.body.email},function(err,user){
    if(err){
//handle user found

        console.log('Error in finding the user in signing in');
        return;
    }
    console.log(user);
    if(user){
//handle password which doesn't match
if(user.password!=req.body.password){
    console.log(user.password);
    console.log(req.body.password);
    console.log('password doesnt match');
    return res.redirect('back');
}
   //handle session creation
    res.cookie('user_id',user.id) ;
  console.log('Hello');
    return res.redirect('/users/profile'); 
    }else{
 //handle user not found
 console.log('User doesnt exists');
 return res.redirect('back');
    }
   })
   

   

  
}