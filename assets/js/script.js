// Form Elements
const formEl = document.querySelector("#cityinput");
const InputEl = document.querySelector("#cityname");
const buttonEl = document.querySelector("#citysubmit");

// Today's Weather Elements
const headerEl = document.querySelector("#current-name");
const containerEl = document.querySelector("current-container");


// event handler for search submit button
const submitEvent = (event) => {
    event.preventDefault();
    console.log("SUBMIT")
}

// listens for form submit
formEl.addEventListener('submit',submitEvent);


const getWeather = () => {
    let city = 'dallas';
    let APIKey = "eafa260ed54cac7951d9d21533a37bc8";
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    fetch(queryURL).then((response) => {
        response.json().then((data)=> {
            console.log(data);
        });
    })
}
// getWeather();