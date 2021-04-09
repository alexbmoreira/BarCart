import api from './api.service';

async function addOnHand(onHand) {
  return api
    .post('/users/onhand/', onHand)
    .then(() => {})
    .catch((e) => console.log(e.response.data));
}

async function removeOnHand(onHand) {
  return api
    .delete('/users/onhand/', { data: onHand })
    .then(() => {})
    .catch((e) => console.log(e.response.data));
}

async function getOnHand() {
  return api.get('/users/onhand/').then((response) => response.data);
}

export default {
  addOnHand,
  removeOnHand,
  getOnHand,
};
