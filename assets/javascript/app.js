// GIPHY
// ------------

// Wait for the page to finish loading
$(document).ready(function() {

 
  
  //<===========================================================>
  //This section is for creating the dynamic buttons. I set up my initial array, do a for loop through the array and create dynamic buttons, attach the buttons to the page

  var btnArr = ['panda','sad panda','angry panda','sneezing panda','funny panda'];

  function createButtons() {
    $('.btnDiv').empty();
    for (var i = 0; i<btnArr.length; i++) {
      var ht = $('<button>');
      ht.attr('value', btnArr[i]);
      ht.attr('class', 'imgs btn-info');
      ht.text(btnArr[i]);
      $('.btnDiv').append(ht);
    }
  }
  createButtons();
  //<===========================================================>

  //<===========================================================>

  // function findGifs() {
    $('.btnDiv').on('click', '.imgs', function () {

      var animal = $(this).attr('value'); 
        console.log('inside button click');
       // Set up my API URL and use the jquery ajax call to connect, create an array of the returned objects
        //<===========================================================>
        
        var key ="8KJTapEvX7j2KumIaK3ZwOLrgYOClMs3";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key="+key+"&limit=15";

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            var objectsRet = response.data
            console.log('returned' + objectsRet);
        //<===========================================================>

        // for loop to add all the images to the div
        //<===========================================================>

        for (i = 0; i < objectsRet.length; i++) {
          var imgDisplay = $("<img>");
            imgDisplay.addClass("images img-fluid rounded mx-auto d-block text-center"); 
            imgDisplay.attr('src', objectsRet[i].images.original_still.url);
            imgDisplay.attr('data-animate', objectsRet[i].images.original.url); 
            imgDisplay.attr('data-still', objectsRet[i].images.original_still.url); 
            imgDisplay.attr('data-state', 'still'); 
          $('.gifDiv').prepend(imgDisplay); 
        } // close the for loop
      }) // close the ajax call
    }) // close the on clicks
});