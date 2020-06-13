const express = require("express");
const router = express.Router();
//const nodemailer = require("nodemailer");
//const validator = require('validator');
const transporter = require('./../emailconfig');

router.post('/send',async (req,res,next)=>{

    
    // const fromEmail = req.body.email;
    // const name = req.body.name;
    // const surname = req.body.surname;
    // const subject = req.body.subject;
    // const message = req.body.message;

    const { email,name,surname,subject,message } = req.body;
    
    if(email===undefined || name===undefined || surname===undefined || subject===undefined || message==undefined){

        return res.status(400).json({
            status:"BAD",
            message:"Please validate your fields"
        });

    }else{
        if(email==='' || name==='' || surname==='' || subject==='' || message==''){

            return res.status(400).json({
                status:"BAD",
                message:"Please validate your fields"
            });

        }else{

            const html=`<h2><i>Client Details 📝</i></h2>
                        <b>Name: ${name}</b><br/>
                        <b>Surname: ${surname}</b></br/>
                        <h3>${subject}</h3>  
                        <p><b>Message : </b> ${message} </p>`;
              const mailOptions = {
                from: email,
                to: 'info@ingeniousvision.co.za',
                subject: subject,
                text: message,
                html
              };

              transporter.sendMail(mailOptions, (error, info)=>{
                if (error) {
                    return res.status(200).json({
                        status:"BAD",
                        message:error,
                    });
         
                } else {
                    return res.status(200).json({
                        status:"OK",
                        message:"Sent a post request as an e-mail",
                        response:info.response
                    });
                }
              });
        }
        
    }

});
module.exports = router;