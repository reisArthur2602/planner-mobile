import Constants from 'expo-constants';
import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';

const { apiUrl } = Constants.expoConfig?.extra as {
  apiUrl: string;
};

const Api = axios.create({
  baseURL: apiUrl,
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { Api };
