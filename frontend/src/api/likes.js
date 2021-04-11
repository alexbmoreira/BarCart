import api from './api.service';

async function addLikes(like) {
  return api
    .post('/users/likes/', like)
    .then(() => {})
    .catch((e) => console.log(e.response.data));
}

async function removeLikes(like) {
  return api
    .delete('/users/likes/', { data: like })
    .then(() => {})
    .catch((e) => console.log(e.response.data));
}

export default {
  addLikes,
  removeLikes,
};
