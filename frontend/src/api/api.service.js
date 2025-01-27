import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NGROK_HOST } from '@env';

const instance = axios.create({
  baseURL: `${NGROK_HOST}/api`,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
