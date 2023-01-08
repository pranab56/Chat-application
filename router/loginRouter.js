const express = require('express');
const {getLogin} = require('../controller/loginController')
const decorateHtmlResponse =require('../middleware/common/decerateHtmlResponse')

const router=express.Router();

router.get('/',decorateHtmlResponse("login"), getLogin);




module.exports=router;