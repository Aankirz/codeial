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