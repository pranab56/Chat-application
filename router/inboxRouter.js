const express = require('express');
const {getInbox} = require('../controller/inboxContoller')

const router=express.Router();

router.get('/',getInbox)




module.exports=router;