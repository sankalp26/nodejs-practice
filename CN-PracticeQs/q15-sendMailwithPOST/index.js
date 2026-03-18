// Import built-in and external modules using ES Modules syntax
import http from "http"; // Used to create HTTP server
import fs from "fs"; // Used for file operations
import EventEmitter from "events"; // Used to create custom events
import nodemailer from "nodemailer"; // Used to send emails

// ---------------------------------------------
// Custom Event Class
// ---------------------------------------------

// Create a class that extends EventEmitter
// This class can emit custom events
class CustomEvent extends EventEmitter {
  // Method that emits "mailSent" event
  mailSent(email) {
    this.emit("mailSent", email); // Trigger custom event
  }
}

// Create an instance of CustomEvent
const customEvent = new CustomEvent();

// ---------------------------------------------
// Create HTTP Server
// ---------------------------------------------

const server = http.createServer((req, res) => {
  // Create a mail transporter (SMTP configuration)
  // Used to connect to Gmail and send emails
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj", // ⚠️ In real projects, use environment variables
    },
  });

  // Check if incoming request is POST
  if (req.method === "POST") {
    // POST request body comes as a stream (in chunks)
    let data = "";

    // Listen for incoming data chunks
    req.on("data", (chunk) => {
      data += chunk; // Append chunk to complete body
    });

    // When all data has been received
    req.on("end", async () => {
      // Convert JSON string into JavaScript object
      const { name, email, message } = JSON.parse(data);

      // Format query for saving in file
      const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

      // ---------------------------------------------
      // Save user query to file
      // ---------------------------------------------

      fs.appendFile("queries.txt", queryString, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Query Saved");
        }
      });

      // ---------------------------------------------
      // Prepare Email Options
      // ---------------------------------------------

      const mailOptions = {
        from: "codingninjas2k16@gmail.com", // sender
        to: email, // receiver
        subject: "Query received",
        text: "We have received your query and will get back to you soon.",
      };

      // ---------------------------------------------
      // Send Email + Emit Custom Event
      // ---------------------------------------------

      try {
        // Send email asynchronously
        const result = await transporter.sendMail(mailOptions);

        // Emit custom event after successful email
        customEvent.mailSent(email);
      } catch (err) {
        console.log("Email Sending Failed with Error: " + err);
      }

      // Send response back to client
      res.end("Query received");
    });
  } else {
    // Handle GET or other request methods
    res.end("Welcome to Coding Ninjas!");
  }
});

// ---------------------------------------------
// Register Listener for Custom Event
// ---------------------------------------------

const Solution = () => {
  // Listen for "mailSent" custom event
  customEvent.addListener("mailSent", (email) => {
    console.log("custom event 'mailSent' emitted");

    console.log(
      `confirming that the email has been sent successfully to ${email}`,
    );
  });
};

// Export server and other modules
export default server;
export { server, CustomEvent, Solution };
