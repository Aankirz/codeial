module.exports.home=function(req,res){
    return res.end('<h1>Express is up for codeial</h1>');
}
module.exports.action=function(req,res){
    return res.end('<h1>And Yuup</h1>')
}
//where home is the name of the function 