const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');

const db=mongoose.connection;

//whenever there is an error,we use db.on('error',function(err){})

db.on('error',console.error.bind(console,'Error connecting to MongoDB'));

db.once('open',function(){
    //i.e connection is open
    console.log('Connected to MongoDB');
})
//finally to make this useful we need to export the db object

module.exports=db;