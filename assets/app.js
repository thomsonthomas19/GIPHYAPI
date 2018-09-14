


// WHY GIFS WILL NOT PLAY


var searchbar = $("#search-bar");

var artistsArr = [
    "Lana Del Rey",
    "Florence + the Machine",
    "The Cranberries",
    "Kate Nash",
    "The Kooks",
    "Imogen Heap",
    "Dido",
    "Salt N Pepa",
    "The Cardigans",
    "The Turtles",
    "Chance The Rapper",
    "Chaos Chaos",
];

console.log(artistsArr);

buttonAdd = function() {

    $("#buttons-holder").empty();

for (i=0; i < artistsArr.length; i++) {
    // var newButton = $("<button>").text(artistsArr[i]).addClass("btn");
    $("#buttons-holder").append("<button class='btn botn'>" + artistsArr[i] + "</button>");
    // $("button").addClass("btn");
}}

$("#search-button").on("click", function(event) {
    event.preventDefault();
    artistsArr.push(searchbar.val());
    buttonAdd();
    $("#search-bar").val("");
    console.log(artistsArr);
})




$(document).on("click", ".botn", function () {
    var urlChange = $(this).text();
    console.log($(this))
    console.log(urlChange);
    // console.log("well I mean");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=fJLmL7uI7S5E0faWmBW0hUXJMQDNpk7r&q=" + urlChange + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);
        console.log(response);

        results = response.data;

        
        for (i = 0; i < results.length; i++) {

            var artistDiv = $("<div>");
            var gifRating = $("<p>").text("Rating: " + results[i].rating);
            var artistImg = $("<img>").addClass("gif");

            artistImg.attr("src", results[i].images.fixed_height_still.url);
            artistImg.attr("data-state", "still")
            artistImg.attr("data-animate", results[i].images.fixed_height.url)
            artistImg.attr("data-still", results[i].images.fixed_height_still.url);

            artistDiv.append(gifRating);
            artistDiv.append(artistImg);
            artistDiv.attr("class", "gif-holder-indiv")
            $("#gif-holder").prepend(artistDiv);
        };
    });
});

$(document).on("click", ".gif", function() {
    
    console.log("CLICK");
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

buttonAdd();

// $("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    // var animal = $(this).attr("data-animal");
// 
// 
// 
    //   });
