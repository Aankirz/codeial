const express=require('express');
const router=express.Router();
const passport=require('passport');


const userController=require('../controllers/users_controllers');

router.get('/profile',passport.checkAuthentication,userController.profile);

router.get('/user1',userController.user1);

//using the kebab case (name-name)
router.get('/sign-in',userController.signin);

router.get('/sign-up',userController.signup);

//mistake we should use post, not get as method of form is post
router.post('/create',userController.create);

// Woah,"when you changed the branch the code path changes"
//Use passport as a middleware to verify the user is authenticated, inbuilt function
router.post('/create-session',passport.authenticate(
    'local',
    // console.log('Hello here is the error'),
    {failureRedirect:'/users/sign-in'},

    ), userController.createSession);

module.exports=router;