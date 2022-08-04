const express=require('express');
const router=express.Router();

const postController=require('../controllers/post_controllers');

router.post('/create',postController.create);


module.exports=router;

//now we need to call it from index,js
