// internal middlewere
const express = require("express");
const app=express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const path=require('path');
const cookieParser = require("cookie-parser");
const loginRouter=require('./router/loginRouter')
const usersRouter=require('./router/usersRouter')
const inboxRouter=require('./router/inboxRouter')

// external middilewere
const {NotFoundError,ErrorHandler}=require('./middleware/common/errorHandler');

// mongodb connected
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database is connect"))
  .catch((err) => console.log(err));



app.use(express.json());
app.use(express.urlencoded({extended:true}))

// set view engine
app.set("view engine","ejs");

// set static folder
app.use(express.static(path.join(__dirname,"public")));

// parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET))


// app routing
app.use('/',loginRouter)
app.use('/users',usersRouter)
app.use('/inbox',inboxRouter)

// 404 / notfound error handler
app.use(NotFoundError)
// error handling
app.use(ErrorHandler)

// port 
app.listen(process.env.PORT,()=>{
    console.log(`server is running in ${process.env.PORT}`)
})



