const apiKey = "9d43bb071a544dbf91894720261101";
const city = "London";
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no`;

async function getWeeklyWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // 1. Get the forecast array
        const forecastDays = data.forecast.forecastday;
        console.log("Full Data:", forecastDays);

        // 2. APPLY .filter()
        // We only want days where the average temperature is above 5°C
        const warmDays = forecastDays.filter(item => item.day.avgtemp_c > 5);

        // 3. APPLY .map()
        // We transform the data into a simple "Date: Condition" format
        const summary = warmDays.map(item => {
            return `${item.date}: ${item.day.condition.text}`;
        });

        // Final output for your lab
        console.log("--- Lab Assignment Results ---");
        console.log("Warm Days Summary:", summary);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getWeeklyWeather();