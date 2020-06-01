const nodemailer = require("nodemailer");

const transport = { host: "mail.ingeniousvision.co.za",
port: 465,
secure: true, // upgrade later with STARTTLS
auth: {
  user: "info@ingeniousvision.co.za",
  pass: ""
}
};
const transporter = nodemailer.createTransport(transport);

module.exports = transporter;