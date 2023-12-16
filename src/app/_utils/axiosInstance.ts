import axios from 'axios';
import { cookies } from 'next/headers';

export const appAxiosInstance = axios.create({
  baseURL: process.env.APP_HOST,
  headers: { 'Content-Type': 'application/json' },
});

appAxiosInstance.interceptors.request.use((config) => {
  const token = cookies().get('token')?.value ?? '';
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const dbAxiosInstance = axios.create({
  baseURL: process.env.DB_HOST,
  headers: { 'Content-Type': 'application/json' },
});
