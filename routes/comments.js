const express=require('express');
const router=express.Router();

const commentsController=require('../controllers/comment_controllers');

router.post('/create',commentsController.create);


module.exports=router;