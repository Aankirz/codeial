const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    name:{
        type:String,
        required:true
    },

},{
    timestamps:true
    //so it will create and update 
});

const User=mongooose.model('User',userSchema);

module.exports=User;
