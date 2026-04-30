// Function to delete a product using its id
function deleteProduct(id) {
  // Show confirmation popup before deleting
  // confirm() returns true if user clicks OK, false if Cancel
  const result = confirm("Are you sure you want to delete the Product?");
  if (result) {
    fetch("/delete-product/" + id, {
      method: "POST", // Using POST method to perform delete action
    }).then((res) => {
      // Handle response from server
      if (res.ok) {
        location.reload(); // Reload the page so updated product list appears
      }
    });
  }
}
