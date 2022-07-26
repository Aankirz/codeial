const express=require('express');
// we use const because so that no one could override.
const app=express();
const port=8000;

//use express router
app.use('/',require('./routes'));//by default it will look for index.js 

app.listen(port,function(err){
if(err){
    // console.log(err);
    // But there's another way to handle error,"Interpolation" is used to print error message.
    console.log(`Error: ${err}`);
}
console.log(`Server is running on port: ${port}`);
})