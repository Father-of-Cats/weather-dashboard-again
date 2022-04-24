$(document).ready(function() {
    const APIKey = "eafa260ed54cac7951d9d21533a37bc8"
    //Jquery submit handler
    $("#cityform").submit((event)=>{
        event.preventDefault();
        const city = $("#cityname").val().trim();
        if(city){ 
            getWeather(city);
            console.log(city);  
        } else {
            alert("Please enter a city name")
        };
    });



// event handler for search submit button
// const submitEvent = (event) => {
//     event.preventDefault();
//     console.log("SUBMIT")
// }

// listens for form submit
// formEl.addEventListener('submit',submitEvent);


getWeather = (city) => {
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`;

    fetch(queryURL).then((response) => {
        response.json().then((data)=> {
            console.log(data);
        });
    })
}
});