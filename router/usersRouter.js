const express = require('express');
const {getUsers} = require('../controller/usersController')
const decorateHtmlResponse =require('../middleware/common/decerateHtmlResponse')
const router=express.Router();

router.get('/',decorateHtmlResponse("users"),getUsers)




module.exports=router;