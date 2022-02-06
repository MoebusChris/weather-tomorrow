//declare a variables to stroe the searched city
var city = "";

//variable declareation
var searchCity = $(#search-city);
var searchButton = $(#search-button);
var clearButton = $(#clear-history);
var currentCity = $(#current-city);
var currentTemperature = $(#temperature);
var currentHumanity = $(#humidity);
var currentWspeed = $(#wind-speed);
var currentUvIndex = $(#uv-index);
var sCity = [];

//search the city to see if it exists in the entries from the storage
function find(c) {
    for (var i=0; i<sCity.length; i++) {
        if (c.toUpperCase () === sCity[i]) {
            return -1;
        }
    }
    return 1;
}

//set up an api key
var apiKey = "1de3872f24b47bc2e02214f5b870a8ad";
//display the current and future weather to the user after grabbing the city form the input text box.
function displayWeather (event) {
    event.preventDefault ();
    if (searchCity.val().trim()!=="") {
        
    }
}



//here we create the AJAX call
function currentWeather (city) {
    //Here we build the URL so we can get a data from server side.
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
}