import api from './api.service';

async function getUser() {
  return api.get('/users/profiles/user/').then((response) => response.data);
}

export default {
  getUser,
};
