const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/user');

//authentication using passport: so first finding a user with email id (findOne)
passport.use(new LocalStrategy({ //accessing through schema
    usernameField:'email' // to detect a user(because email is the only thing that's unique)
},
  function(email,password,done){
  //so email and pswd will be passed on
  User.findOne({email:email},function(err,user){
    if(err){
        console.log('error in finding the user in local strategy');
        return done(err);
    }
    if(!user||user.password != password){
        console.log('Invalid username/password');
        return done(null,false); //user not found or password is wrong but not an error
    }
    return done(null,user);
})
}
))

// Serializing the user to decide which key is to be kept in the cookies
// When the users signs it, we find the id send it to the cookie and the cookie is send to the browser
passport.serializeUser(function(user,done){
    done(null,user.id);
    //so we just want to store the user id in an encrypted format

})

//deserialising the user meaning which user is accessing to verify in the db
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
if(err){
    console.log('Error in finding the user -> Passport');
    return done(err);
}
return done(null,user);
    });
})
//check if the user is auth
passport.checkAuthentication=function(req,res,next){
    // if the user is signed in, then pass on the request to the next function(contd)
    if(req.isAuthenticated()){
// to check if the user is already signed in or not
return next();
    }
    //if the user is not signed in
    return res.redirect('/users/sign-in')
}

passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
        
    }
}
module.exports=passport;