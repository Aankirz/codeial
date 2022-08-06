// so this route is called the route of routes, so we want to have the list of all the other routes,

const express=require('express');

const router=express.Router();
//router is a function that returns a router object.
//Now to access 'home'

const homeController=require('../controllers/home_controllers');//so accessing the fns
const postController=require('../controllers/post_controllers');
// So two ways : 1. using router.get('/',homeController.home);(Which will display when we hit the url:localhost:8000/name used in get route)
//               2. using router.use()

router.get('/',homeController.home);//so acessing the fns(home)

router.get('/action',homeController.action);

// router.get('/posts',postController.posts);

router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));
// router.use('/posts',)

console.log('router loaded')
module.exports=router;
//exporting to index.js (here we will not write directly exports);