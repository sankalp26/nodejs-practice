//import nodemailer  - Nodemailer is used to send emails from Node.js applications
const nodemailer = require("nodemailer");

//configure email and send it -Async is used because sending email is a network operation
async function sendMail() {
  //1. Create an Email transporter - responsible for connecting to the email service
  //SMTP(Simple Mail Transfer Protocol)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "officialsanki26@gmail.com",
      pass: "dhukydbalxvegyvx",
    },
  });
  //2. Configure email content
  const mailContent = {
    from: "officialsanki26@gmail.com",
    to: "hariomyadavcse@gmail.com",
    subject: "Welcome to NodeJS Mailing Server",
    text: "This is a Test Email sent from NodeJS using the nodemailer module",
  };
  //3. Send the email
  // sendMail() sends the email using the transporter
  // await waits until the email is successfully sent or fails
  try {
    const result = await transporter.sendMail(mailContent);
    console.log("Email sent successfully");
  } catch (err) {
    console.log("Email Sending Failed with Error: " + err);
  }
}
sendMail(); // Call the function to send the email