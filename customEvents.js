// Import the EventEmitter class from Node.js 'events' module
// This allows us to create and work with custom events
const EventEmitter = require("events");
// Create a class that extends EventEmitter
// This gives the class the ability to emit and listen to events
class UserEvents extends EventEmitter {
  // Method that represents creating a post
  createPost(content) {
    console.log("Post is created");
    // Emit a custom event named 'postCreated'
    // 'content' is passed as data to all listeners
    this.emit("postCreated", content);
  }
}

const userEvent = new UserEvents(); // Create an instance of the UserEvents class

function updateDatabase(content) {
  console.log("The database is updated");
}
function sendNoti(content) {
  console.log("The Notification is sent of a new Post");
}
function updateTimeline(content) {
  console.log("The Timeline is updated.");
}

// Register event listener
userEvent.on("postCreated", (content) => {
  updateDatabase();
  sendNoti();
  updateTimeline();
});

// Calling createPost() emits the 'postCreated' event
// This automatically triggers all registered listeners
userEvent.createPost("hi"); // Trigger the event
