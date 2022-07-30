const express=require('express');
const router=express.Router();

const userController=require('../controllers/users_controllers');

router.get('/profile',userController.profile);

router.get('/user1',userController.user1);

//using the kebab case (name-name)
router.get('/sign-in',userController.signin);

router.get('/sign-up',userController.signup);

//mistake we should use post, not get as method of form is post
router.post('/create',userController.create);
module.exports=router;