const express = require('express');
const {getInbox} = require('../controller/inboxContoller')
const decorateHtmlResponse =require('../middleware/common/decerateHtmlResponse.js')

const router=express.Router();

router.get('/',decorateHtmlResponse("inbox") ,getInbox)




module.exports=router;