const express=require('express');
// we use const because so that no one could override.
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
// first I need to tell whcih folder I want to use for static files

//before routes get rendered we need to call
//ejs layouts to render the layout

app.use(expressLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//use express router
app.use('/',require('./routes'));//by default it will look for index.js 
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
if(err){
    // console.log(err);
    // But there's another way to handle error,"Interpolation" is used to print error message.
    console.log(`Error: ${err}`);
}
console.log(`Server is running on port: ${port}`);
})
