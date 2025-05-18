const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.HOST_PORT,
    secure: true,
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
    },
});

// Verify transporter
transporter.verify((error, success) => {
    if (error) {
        console.log("Nodemailer Transport Error:", error);
    } else {
        console.log("✅ Mailer is ready:", success);
    }
});

module.exports = transporter;
