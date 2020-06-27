$( document ).ready( ()=> {
    console.log( "ready!" );

    //CLICK THE DEVOUR BUTTON//
    $(".eatBurger").on("click", (event) => {

        let id = event.target.dataset.id;
        var devoured = event.target.dataset.eat;
        console.log(id,devoured)

        let burgerEaten = {
            eaten : devoured
        }

        $.ajax("/api/burgers/devoured" + id, {
            type: "PUT",
            data: burgerEaten
          }).then(
            function() {
              console.log("burger has been eaten");
              // Reload the page to get the updated list
              location.reload();
            }
          );
          
    });

      //CLICK THE SUBMIT BUTTON//
      $(".addBurger").on("submit", (event) => {

        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log($("#newBurger").val())
        

        //create the new burger object so we can pass it to the burger controller
        const newBurger = {
            name: $("#newBurger").val().trim()
        }

        //send the post request to the api route, the route is in the controller
        $.ajax("/api/burgers/create", {
            type: "POST",
            data: newBurger
          }).then(() => {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
          });
    
    });

    //CLICK THE DELETE BUTTON//
    $(".deleteBurger").on("click", (event) => {
        let id = event.target.dataset.id;
    
        // Send the DELETE request.
        $.ajax("/api/burgers/delete" + id, {
          type: "DELETE"
        }).then(
          () => {
            console.log("deleted Burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
});