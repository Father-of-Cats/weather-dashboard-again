$(document).ready(function() {
    const APIKey = "eafa260ed54cac7951d9d21533a37bc8"
    //Jquery submit handler
    $("#cityform").submit((event)=>{
        event.preventDefault()
        let city = $("#cityname").val().trim();
        if(city){ 
            getWeather(city);
            console.log(city);  
        } else {
            alert("Please enter a city name")
        }
    });

    getWeather = (city) => {
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`;

        fetch(queryURL).then((response) => {
            response.json().then((data)=> {
                dailyDisplay(data,city);
            })
        })
    };
    dailyDisplay = (data, city) => {
        $("#current-container").html("")
        $("#current-name").html(city).addClass('bg-light text-dark list-group text-center');

        // Appends weather data
        $("#current-container").append(`<span class='list-group-item'>Temperature: ${data.main.temp}°F</span>`)
        $("#current-container").append(`<span class='list-group-item'>Humidity: ${data.main.humidity}%</span>`)
        $("#current-container").append(`<span class='list-group-item'>Wind Speed: ${data.wind.speed}MPH</span>`)
        $("#current-container").append(`<span class='list-group-item'>Feels Like: ${data.main.feels_like}°F</span>`)

    }
});