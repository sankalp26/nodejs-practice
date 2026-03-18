// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";
import { text } from "stream/consumers";

const Solution = () => {
  // Write your code here
  const rlInt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rlInt.question("Enter your email: ", (email) => {
    sendMail(email);
  });

  async function sendMail(email) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "officialsanki26@gmail.com",
        pass: "dhukydbalxvegyvx",
      },
    });
    const mailContent = {
      from: "officialsanki26@gmail.com",
      to: email,
      subject: "Coding Ninjas",
      text: "The world has enough coders; be a coding ninja!",
    };
    try {
      const result = await transporter.sendMail(mailContent);
      console.log("Success: Email sent to: " + email);
    } catch (err) {
      console.log("Failed. Error: " + err);
    }
  }
};

export default Solution;
