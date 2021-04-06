import api from './api.service';

async function getUser() {
  return api.get('/users/profiles/user/').then((response) => response.data);
}

async function getUserDrinks() {
  return api.get('/users/drinks/').then((response) => response.data);
}

export default {
  getUser,
  getUserDrinks,
};
