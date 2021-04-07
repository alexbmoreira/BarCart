import api from './api.service';

async function getUser() {
  return api.get('/users/profiles/user/').then((response) => response.data);
}

async function getUserDrinks() {
  return api.get('/users/drinks/').then((response) => response.data);
}

async function getUserOnTap() {
  return api.get('/users/ontap/').then((response) => response.data);
}

async function getUserLikes() {
  return api.get('/users/likes/').then((response) => response.data);
}

async function getPopularDrinks() {
  return api.get('/drinks/popular/').then((response) => response.data);
}

async function createDrink(drinkData) {
  drinkData = {
    name: 'Screwdrivah',
    instructions: 'Build over ice in a tall glass and add your garnish. Works best with fresh squeezed orange juice.',
    ingredients: [
      {
        ingredient: 115,
        name: 'vodka',
        units: 'oz',
        quantity: 1.5,
      },
      {
        ingredient: 116,
        name: 'orange juice',
        units: 'oz',
        quantity: 4.5,
      },
    ],
  };
  return api
    .post('/users/drinks/', drinkData)
    .then(() => {})
    .catch((e) => console.log(e.response.data));
}

export default {
  getUser,
  getUserDrinks,
  getUserOnTap,
  getUserLikes,
  getPopularDrinks,
  createDrink,
};
