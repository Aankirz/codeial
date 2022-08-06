const express=require('express');
const cookieParser=require('cookie-parser');
// we use const because so that no one could override.
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

const db=require('./config/mongoose');
const session=require('express-session');

const passport=require('passport');
const passportLocal=require('./config/passport-local')

//Now we need to add a middleware that takes the cookies and encrypts it.

const flash=require('connect-flash');
const customMware=require('./config/middleware');


//Applying sass middleware
// const sassMiddleware=require('sass');
// app.use(sassMiddleware({
//     src:'/assets/scss',
//     dest:'/assets/css',
//     debug:true,
//     outputStlye:'extended',
//     prefix:'/css'// to indicate that after scss it goes to css.
// }))

// first I need to tell whcih folder I want to use for static files

//before routes get rendered we need to call
//ejs layouts to render the layout
app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//use express router
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'codeial',
    // ToDo Change the secret before deployment in production mode
    secret:"blahSomething",
    saveUninitialized:false, //when the user is not logged in ,so we don't want any extra data to get stored
    resave:false,
    cookie:{
        maxAge:(1000*60*100) //(time-to-live), in milliseconds, of the session cookie.
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(customMware.setFlash);
app.use('/',require('./routes'));//by default it will look for index.js 

app.listen(port,function(err){
if(err){
    // console.log(err);
    // But there's another way to handle error,"Interpolation" is used to print error message.
    console.log(`Error: ${err}`);
}
console.log(`Server is running on port: ${port}`);
})
