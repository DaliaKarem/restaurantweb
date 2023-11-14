const sendForDev=(err,res)=>{
    res.status(err.statusCode).json({
        status:err.status,
        Error:err,
        massege:err.massege,
        stack:err.stack
    })
}
const sendForProduct=(err,res)=>{
    res.status(err.statusCode).json({
        status:err.status,

        massege:err.massege,
    })
}
const Error = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'development') {
        sendForDev(err, res);
    } else {
      //if (err.name === 'JsonWebTokenError') err = handleJwtInvalidSignature();
      //if (err.name === 'TokenExpiredError') err = handleJwtExpired();
      
      sendForProduct(err, res);

    }
  };
  

module.exports=Error