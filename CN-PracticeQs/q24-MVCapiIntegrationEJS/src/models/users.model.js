// Please don't change the pre-written code
// Import the necessary modules here
import axios from "axios";
export const userModel = async () => {
  // Write your code here
  try {
    const response = await axios.get("https://dummyjson.com/users");
    const userDetails = response.data.users;
    return userDetails;
  } catch (err) {
    console.error(err.message);
  }
};
