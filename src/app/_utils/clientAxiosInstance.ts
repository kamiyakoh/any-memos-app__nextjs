'use client';
import axios from 'axios';

export const clientAxiosInstance = axios.create({
  baseURL: process.env.APP_HOST,
  headers: { 'Content-Type': 'application/json' },
});

clientAxiosInstance.interceptors.request.use((config) => {
  if (typeof document !== 'undefined') {
    const token = document.cookie !== '' ? document.cookie.split('; ').find((row) => /^token=/.test(row)) : undefined;
    const tokenValue = token !== undefined ? token.split('=')[1] : undefined;
    config.headers.Authorization = tokenValue !== undefined ? `Bearer ${tokenValue}` : '';
  }
  return config;
});
