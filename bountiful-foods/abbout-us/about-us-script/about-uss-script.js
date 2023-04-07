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
