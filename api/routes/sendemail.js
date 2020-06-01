const express = require("express");
const router = express.Router();
//const nodemailer = require("nodemailer");
//const validator = require('validator');
const transporter = require('./../emailconfig');

router.post('/send',async (req,res,next)=>{

    const fromEmail = req.body.email;
    const name = req.body.name;
    const surname = req.body.surname;
    const subject = req.body.subject;
    const message = req.body.message;
    
    if(fromEmail===undefined || name===undefined || surname===undefined || subject===undefined || message==undefined){

        return res.status(400).json({
            status:"BAD",
            message:"Please validate your fields"
        });

    }else{
        if(fromEmail==='' || name==='' || surname==='' || subject==='' || message==''){

            return res.status(400).json({
                status:"BAD",
                message:"Please validate your fields"
            });

        }else{

              const mailOptions = {
                from: 'sphemicah@gmail.com',
                to: 'sphehmicah@gmail.com',
                subject: 'Sending Email using Node.js',
                text: 'That was easy!',
                html: "<b>Hello world. This is an html body 🙌</b>"
              };

              transporter.sendMail(mailOptions, (error, info)=>{
                if (error) {
                    return res.status(200).json({
                        status:"BAD",
                        message:error,
                    });
                  console.log(error);
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