
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
getWeather();