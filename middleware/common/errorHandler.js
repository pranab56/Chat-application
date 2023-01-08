const createError = require("http-errors");

function NotFoundError(req, res, next) {
  next(createError(404, "your request content is not found!"));
}



function ErrorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
    res.status(err.status || 500);
    if(res.locals.html){
        res.render('error',{
            title:"Error message"
        })
    }
    else{
        res.json(res.locals.error)
    }
}

module.exports = {
  NotFoundError,
  ErrorHandler,
};
