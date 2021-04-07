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
  return api
    .post('/users/drinks/', drinkData)
    .then(() => {})
    .catch((e) => console.log(e.response.data));
}

async function getIngredients() {
  return api.get('/ingredients/').then((response) => response.data);
}

export default {
  getUser,
  getUserDrinks,
  getUserOnTap,
  getUserLikes,
  getPopularDrinks,
  createDrink,
  getIngredients,
};
