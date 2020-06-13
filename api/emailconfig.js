const nodemailer = require("nodemailer");

const transport = { host: "smtp.gmail.com",
port: 587,
secure: false, // upgrade later with STARTTLS
auth: {
  user: process.env.CLIENT_EMAIL,
  pass:process.env.CLIENT_ID
}
};
const transporter = nodemailer.createTransport(transport);

module.exports = transporter;