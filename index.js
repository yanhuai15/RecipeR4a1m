const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to RecipeRealm! Our social platform for food lovers and home chefs offers a vast collection of recipes, cooking tutorials, and meal planning tools.');
});

// Define route for the recipe collection page
app.get('/recipes', (req, res) => {
  res.send('Explore our vast collection of recipes for every occasion, from quick and easy weeknight meals to elegant dinner party dishes.');
});

// Define route for the cooking tutorials page
app.get('/cooking-tutorials', (req, res) => {
  res.send('Learn new cooking techniques and skills with our easy-to-follow tutorials, from knife skills to pastry making.');
});

// Define route for the meal planning tools page
app.get('/meal-planning-tools', (req, res) => {
  res.send('Plan your meals with ease using our meal planning tools, including shopping lists and recipe collections.');
});

// Define route for the community page
app.get('/community', (req, res) => {
  res.send('Connect with a community of food enthusiasts, share your culinary creations, and exchange tips and tricks with others.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});