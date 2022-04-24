$(document).ready(function() {
    
    const APIKey = "eafa260ed54cac7951d9d21533a37bc8";
    const cities = [];
    
    
    //Jquery submit handler
    $("#cityform").submit((event)=>{
        event.preventDefault()
        let city = $("#cityname").val().trim();
        if(city){ 
            getWeather(city);
            cities.push({city});
            localStorage.setItem("cities", JSON.stringify(cities));
            $("#cityname").val("");  
        } else {
            alert("Please enter a city name")
        }
        savedSearch(city)
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

        $("#current-container").append(`<span class='list-group-item'>Temperature: ${data.main.temp}°F</span>`)
        $("#current-container").append(`<span class='list-group-item'>Humidity: ${data.main.humidity}%</span>`)
        $("#current-container").append(`<span class='list-group-item'>Wind Speed: ${data.wind.speed}MPH</span>`)
        $("#current-container").append(`<span class='list-group-item'>Feels Like: ${data.main.feels_like}°F</span>`)

        uvIndex(data);
    }

    uvIndex = (data) => {
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`;
        fetch(apiUrl).then((response) => {
            response.json().then((uvdata) => {
                $("#current-container").append(`<span id='uvindex' class='list-group-item'>UV Index: ${uvdata.value}</span>`)
                if(uvdata.value <= 2) {
                    $("#uvindex").addClass('favorable')
                    } else if(uvdata.value >2 && uvdata.value <=8){
                        $("#uvindex").addClass('moderate')
                    } else if(uvdata.value >8){
                        $("#uvindex").addClass('severe')
                }
            })
        })
    };

    savedSearch = (city) => {
        if(city) {
        $("#citylist").html("<h4 id='listhead'> Past Viewed Cities</h4>").addClass('list-group')
        $("#listhead").append(`<button id='citybutton' class='list-group-item'>${city}</button>`)
        $("#citybutton").attr('data-city', city).attr('type', 'submit');

        $("#citylist").append($("#citybutton"))
        } else {
            console.log("save didn't work!")
        }
    }

    savedSearchHandle = (event) => {
        event.preventDefault();
        let city = event.target.attr("data-city")
        if(city) {
            getWeather(city)
        }
    };



});