var weather = require("openweather-apis");

export default function() {
    const weatherContainer = document.querySelector('.weather');
    const location = weatherContainer.querySelector('.location');
    const description = weatherContainer.querySelector('.description');    
    const owi = weatherContainer.querySelector('.owi');
    const temperature = weatherContainer.querySelector('.temperature');  
    let isVisible = !weatherContainer.classList.contains("hidden");

    function getWeather() {
        navigator.geolocation.getCurrentPosition(data => {
            weather.setCoordinate(data.coords.latitude, data.coords.longitude);
            weather.setUnits("metric");
            weather.setLang(
                navigator.language.slice(0, 2) ||
                    navigator.userLanguage.slice(0, 2)
            );
            weather.setAPPID("a108a0252c6fa5e49a23ebb17f8d9b44");

            weather.getAllWeather(function(err, weatherData) {
                if (err) {
                    console.log("Weather API Error:", err);
                } else {
                    // console.log(weatherData);

                    const temp = Math.round(weatherData.main.temp);

                    location.innerHTML = `in ${weatherData.name}`;
                    description.innerHTML = weatherData.weather[0].description;
                    owi.classList.add(`owi-${weatherData.weather[0].icon}`);
                    temperature.innerHTML = `${temp}°`;

                    if (!isVisible) {
                        weatherContainer.style.opacity = "1";
                        isVisible = true;
                    }
                }
            });
        });
    }

    setInterval(getWeather, 1000 * 60 * 60 * 4);
    getWeather();
}