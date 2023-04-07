// Get the current date and time
const currentDate = new Date();

// Set options for formatting the date
const options = { 
  weekday: 'long', 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
};

// Format the current date as a string using the specified options
const currentDay = currentDate.toLocaleDateString('en-US', options);

// Select the element to display today's date
const todaysDateElement = document.querySelector('footer p span:nth-of-type(2)');

// Update the element text to display today's date
todaysDateElement.textContent = currentDay;

// Select the date bar element
const dateBar = document.querySelector('.date-bar');

// Set options for formatting the date again
const options2 = { 
  weekday: 'long', 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
};

// Format the current date as a string using the updated options
const formattedDate = currentDate.toLocaleDateString('en-US', options2);

// Update the date bar text to display today's date
dateBar.textContent = `Welcome, Today's Date is ${formattedDate}.`;

function openNav() {
  document.getElementById("myNav").style.width = "18%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const apikey = "e866f0078b5f3cea9187dedec72d15fc";
const city = "Carlsbad";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apikey}&units=metric&cnt=3`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const weatherCardToday = document.querySelector(".weather-card:nth-of-type(1)");
    weatherCardToday.innerHTML = `
      <h3>Today</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  });

fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    const weatherCards = document.querySelectorAll(".weather-card");
    for(let i=1; i<3; i++) {
      weatherCards[i].innerHTML = `
        <h3>${new Date(data.list[i].dt*1000).toLocaleDateString("en-US", {weekday: 'long'})}</h3>
        <p>Temperature: ${data.list[i].temp.day}°C</p>
        <p>Condition: ${data.list[i].weather[0].description}</p>
        <p>Humidity: ${data.list[i].humidity}%</p>
      `;
    }
    for(let i=1; i<3; i++) {
      weatherCards[i].innerHTML += `
        <h3>${new Date(data.list[i+1].dt*1000).toLocaleDateString("en-US", {weekday: 'long'})}</h3>
        <p>Temperature: ${data.list[i+1].temp.day}°C</p>
        <p>Condition: ${data.list[i+1].weather[0].description}</p>
        <p>Humidity: ${data.list[i+1].humidity}%</p>
      `;
    }
  });

 // Check if specialty drink counter exists in local storage
 if (localStorage.getItem("specialtyDrinkCounter") === null) {
  localStorage.setItem("specialtyDrinkCounter", "0");
}
// Check if specialty drink counter exists in local storage
		if (localStorage.getItem("specialtyDrinkCounter") === null) {
			localStorage.setItem("specialtyDrinkCounter", "0");
		}

		// Get the current value of the specialty drink counter from local storage
		var specialtyDrinkCounter = parseInt(localStorage.getItem("specialtyDrinkCounter"));

		// Update the counter on the page
		document.getElementById("specialty-drinks-counter").innerHTML = specialtyDrinkCounter;

		// Listen for form submissions on the Fresh page
		document.getElementById("fresh-form").addEventListener("submit", function(event) {
			// Prevent the form from submitting and refreshing the page
			event.preventDefault();

			// Increment the specialty drink counter
			specialtyDrinkCounter += 1;

			// Update the counter in local storage
			localStorage.setItem("specialtyDrinkCounter", specialtyDrinkCounter.toString());

			// Update the counter on the page
			document.getElementById("specialty-drinks-counter").innerHTML = specialtyDrinkCounter;
		});
