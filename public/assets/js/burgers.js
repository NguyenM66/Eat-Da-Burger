// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-burger").on("click", function(event) {
    console.log("clicked");
    var id = $(this).data("id");
    // var newDevoured = $(this).data("newDevoured");

    // var newDevouredState = {
    //   devoured: newDevoured

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: id
    }).then(
      function() {
        console.log("changed devoured to", id);
        // Reload the page to get the updated list
        location.reload();
      });
  });
});

