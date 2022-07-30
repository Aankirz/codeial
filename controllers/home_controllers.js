// http://localhost:8000
module.exports.home=function(req,res){
    // return res.end('<h1>Express is up for codeial</h1>');
    console.log(req.cookies);
    res.cookie('user_id','25');
    //cookies coming in as request, but going as a response
    // so I need to change the value in res

    return res.render('home',{
        title:'Home'
    });
}

// http://localhost:8000/action
module.exports.action=function(req,res){
    return res.end('<h1>And Yuup</h1>')
}
//where home is the name of the function, hit the url and it will return the response. 