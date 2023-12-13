import axios from 'axios';

export const clientAxiosInstance = axios.create({
  baseURL: process.env.APP_HOST,
  headers: { 'Content-Type': 'application/json' },
});

clientAxiosInstance.interceptors.request.use((config) => {
  const token = document.cookie ?? ''.split('; ').find((row) => row.startsWith('token'));
  const tokenValue = token.split('=')[1];
  config.headers.Authorization = `Bearer ${tokenValue}`;
  return config;
});
