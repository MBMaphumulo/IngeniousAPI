const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Import Routes
const sendemailRoutes = require("./api/routes/sendemail"); //Get email routes

//Handle logs middleware
app.use(morgan('dev'));

//Using body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Prevent CORS errors middleware
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header("Access-Control-Allow-Headers","Origin , X-Requested-With, Content-Type,Accept,Authorization");

    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT','POST','PATCH','DELETE','GET');
        return res.status(200).json({})
    }
    next(); 
});

//Routes that will handle requests
app.use('/api/v1/emails',sendemailRoutes);

//Handle Custom errors 
app.use((req,res,next)=>{
    const error = new Error("Request Not Found");
    error.status = 404;
    next(error);
});

//Handle errors 
app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
      error:{
          message:error.message
      }
  });
});

module.exports = app;