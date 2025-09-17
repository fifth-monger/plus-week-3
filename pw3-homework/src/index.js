let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let cityQuestion = prompt("Enter a city");
let cityAnswer = cityQuestion.trim().toLowerCase();
if (weather[cityAnswer]) {
  let data = weather[cityAnswer];
  let celsius = Math.round(data.temp);
  let fahrenheit = Math.round((data.temp * 9) / 5 + 32);
  let humidity = data.humidity;
  alert(
    `It is currently ${celsius}℃ (${fahrenheit}℉) in ${cityAnswer} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityAnswer}`
  );
}
