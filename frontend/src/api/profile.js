import api from './api.service';

async function getUser() {
  return api.get('/users/profiles/user/').then((response) => response.data);
}

async function register({ firstName, lastName, username, email, password1: password, password2: confirmPassword }) {
  return api
    .post('/rest-auth/register/', { firstName, lastName, username, email, password1: password, password2: confirmPassword })
    .then(() => {})
    .catch((e) => console.log(e.response.data));
}

async function login({ username, password }) {
  return api
    .post('/rest-auth/login/', { username, password })
    .then((res) => res)
    .catch((e) => console.log(e.response.data));
}

async function logout() {
  return api
    .post('/rest-auth/logout/')
    .then((res) => res)
    .catch((e) => console.log(e.response.data));
}

export default {
  getUser,
  register,
  login,
  logout,
};
