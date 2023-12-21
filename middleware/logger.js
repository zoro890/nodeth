exports.mylogger = (req, res, next) => {
    req.requesTime = new Date().toISOString();
    console.log("Hello from the middleware .");
    next();
  };