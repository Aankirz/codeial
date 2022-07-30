// one controller that could control many users
// will create one kind of schema
// and then we can use this schema to create many users

module.exports.profile=function(req,res){
    return res.render('users_profile',{
        title:'Profile'
    })
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
    //TODO Later
}

module.exports.createSession=function(req,res){
    //TODO Later
}