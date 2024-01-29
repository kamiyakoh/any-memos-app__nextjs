'use client';
import axios, { AxiosError } from 'axios';

export const clientAxiosInstance = axios.create({
  baseURL: process.env.APP_HOST,
  headers: { 'Content-Type': 'application/json' },
});

clientAxiosInstance.interceptors.request.use(
  (config) => {
    if (typeof document !== 'undefined') {
      const token = document.cookie ?? ''.split('; ').find((row) => /^token=/.test(row));
      const tokenValue = token !== undefined ? token.split('=')[1] : undefined;
      config.headers.Authorization = tokenValue !== undefined ? `Bearer ${tokenValue}` : '';
    }
    return config;
  },
  (error: AxiosError) => {
    if (error.request !== undefined) console.error('Error setting up the request:', error.message);
  }
);

clientAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response !== undefined) {
      const { status, data } = error.response as { status: number; data: string };
      if (status === 400 || status === 401) {
        console.error(data);
      } else {
        console.error('Unexpected Error:', status, data);
      }
      return await Promise.reject(error);
    }
    throw Error('error:', error);
  }
);
