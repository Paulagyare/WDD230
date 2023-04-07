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
  document.getElementById("myNav").style.width = "20%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// JavaScript code
const fruits = [
  {
    "genus": "Malus",
    "name": "Apple",
    "id": 6,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
      "carbohydrates": 11.4,
      "protein": 0.3,
      "fat": 0.4,
      "calories": 52,
      "sugar": 10.3
    }
  },
  {
    "genus": "Prunus",
    "name": "Apricot",
    "id": 35,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
      "carbohydrates": 3.9,
      "protein": 0.5,
      "fat": 0.1,
      "calories": 15,
      "sugar": 3.2
    }
  },
  {
    "genus": "Persea",
    "name": "Avocado",
    "id": 84,
    "family": "Lauraceae",
    "order": "Laurales",
    "nutritions": {
      "carbohydrates": 8.53,
      "protein": 2,
      "fat": 14.66,
      "calories": 160,
      "sugar": 0.66
    }
  },
  {
    "genus": "Musa",
    "name": "Banana",
    "id": 1,
    "family": "Musaceae",
    "order": "Zingiberales",
    "nutritions": {
      "carbohydrates": 22,
      "protein": 1,
      "fat": 0.2,
      "calories": 96,
      "sugar": 17.2
    }
  },
  {
    "genus": "Rubus",
    "name": "Blackberry",
    "id": 64,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
      "carbohydrates": 9,
      "protein": 1.3,
      "fat": 0.4,
      "calories": 40,
      "sugar": 4.5
    }
  },
  {
    "genus": "Fragaria",
    "name": "Blueberry",
    "id": 33,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
      "carbohydrates": 5.5,
      "protein": 0,
      "fat": 0.4,
      "calories": 29,
      "sugar": 5.4
    }
  },
  {
    "genus": "Prunus",
    "name": "Cherry",
    "id": 9,
    "family": "Rosaceae",
    "order": "None",
    "nutritions": {
      "carbohydrates": 12,
      "protein": 1,
      "fat": 0.3,
      "calories": 50,
      "sugar": 8
    }
  },
  {
    "genus": "Selenicereus",
    "name": "Dragonfruit",
    "id": 80,
    "family": "Cactaceae",
    "order": "Caryophyllales",
    "nutritions": {
      "carbohydrates": 9,
      "protein": 9,
      "fat": 1.5,
      "calories": 60,
      "sugar": 8
    }
  },
  {
    "genus": "Durio",
    "name": "Durian",
    "id": 60,
    "family": "Malvaceae",
    "order": "Malvales",
    "nutritions": {
      "carbohydrates": 27.1,
      "protein": 1.5,
      "fat": 5.3,
      "calories": 147,
      "sugar": 6.75
    }
  },
  {
    "genus": "Sellowiana",
    "name": "Feijoa",
    "id": 76,
    "family": "Myrtaceae",
    "order": "Myrtoideae",
    "nutritions": {
      "carbohydrates": 8,
      "protein": 0.6,
      "fat": 0.4,
      "calories": 44,
      "sugar": 3
    }
  },
  {
    "genus": "Ficus",
    "name": "Fig",
    "id": 68,
    "family": "Moraceae",
    "order": "Rosales",
    "nutritions": {
      "carbohydrates": 19,
      "protein": 0.8,
      "fat": 0.3,
      "calories": 74,
      "sugar": 16
    }
  },
  {
    "genus": "Ribes",
    "name": "Gooseberry",
    "id": 69,
    "family": "Grossulariaceae",
    "order": "Saxifragales",
    "nutritions": {
      "carbohydrates": 10,
      "protein": 0.9,
      "fat": 0.6,
      "calories": 44,
      "sugar": 0
    }
  },
]
const fruitOptions = fruits.map(fruit => `<option value="${fruit.id}">${fruit.name}</option>`);

const select1 = document.getElementById('fruit1');
const select2 = document.getElementById('fruit2');
const select3 = document.getElementById('fruit3');

select1.innerHTML = '<option value="">Select a fruit</option>' + fruitOptions.join('');
select2.innerHTML = '<option value="">Select a fruit</option>' + fruitOptions.join('');
select3.innerHTML = '<option value="">Select a fruit</option>' + fruitOptions.join('');

select1.addEventListener('change', () => {
  select2.style.display = 'block';
});

select2.addEventListener('change', () => {
  select3.style.display = 'block';
});

// Get references to the form and output area
const form = document.getElementById('fresh-form');
const output = document.getElementById('specialty-drinks-counter');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the input values from the form
  const fname = form.elements.fname.value;
  const lname = form.elements.lname.value;
  const phone = form.elements.phone.value;
  const fruit1 = getSelectedFruitValue('fruit1');
  const fruit2 = getSelectedFruitValue('fruit2');
  const fruit3 = getSelectedFruitValue('fruit3');
  const specialInstructions = form.elements['business-description'].value;
  
  // Get the current date and format it as a string
  const orderDate = new Date().toLocaleDateString();
  
  // Compute the total nutrition values for the selected fruits
  const selectedFruits = fruits.filter(fruit => [fruit1, fruit2, fruit3].includes(fruit.id));
  const totalNutrition = {
    carbohydrates: 0,
    protein: 0,
    fat: 0,
    calories: 0,
    sugar: 0
  };
  selectedFruits.forEach(fruit => {
    totalNutrition.carbohydrates += fruit.nutritions.carbohydrates;
    totalNutrition.protein += fruit.nutritions.protein;
    totalNutrition.fat += fruit.nutritions.fat;
    totalNutrition.calories += fruit.nutritions.calories;
    totalNutrition.sugar += fruit.nutritions.sugar;
  });
  
  // Build the output string and display it in the output area
  const outputString = `
    <p><strong>Order Details:</strong></p>
    <ul>
      <li>Name: ${fname} ${lname}</li>
      <li>Phone: ${phone}</li>
      <li>Fruit 1: ${getSelectedFruitName('fruit1')}</li>
      <li>Fruit 2: ${getSelectedFruitName('fruit2')}</li>
      <li>Fruit 3: ${getSelectedFruitName('fruit3')}</li>
      <li>Special Instructions: ${specialInstructions}</li>
      <li>Order Date: ${orderDate}</li>
    </ul>
    <p><strong>Total Nutrition:</strong></p>
    <ul>
      <li>Carbohydrates: ${totalNutrition.carbohydrates.toFixed(2)} g</li>
      <li>Protein: ${totalNutrition.protein.toFixed(2)} g</li>
      <li>Fat: ${totalNutrition.fat.toFixed(2)} g</li>
      <li>Calories: ${totalNutrition.calories} cal</li>
      <li>Sugar: ${totalNutrition.sugar.toFixed(2)} g</li>
    </ul>
  `;
  output.innerHTML = outputString;
});

// Helper function to get the selected fruit value from a select element
function getSelectedFruitValue(selectId) {
  const select = document.getElementById(selectId);
  return parseInt(select.value);
}

// Helper function to get the selected fruit name from a select element
function getSelectedFruitName(selectId) {
  const select = document.getElementById(selectId);
  const fruitId = parseInt(select.value);
  const fruit = fruits.find(fruit => fruit.id === fruitId);
  return fruit ? fruit.name : '';
}
