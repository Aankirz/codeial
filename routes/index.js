const express=require('express');

const router=express.Router();
//router is a function that returns a router object.
//Now to access 'home'

const homeController=require('../controllers/home_controllers');//so accessing the fns

router.get('/',homeController.home);//so acessing the fns(home)

router.get('/action',homeController.action);

console.log('router loaded')
module.exports=router;
//exporting to index.js (here we will not write directly exports);