// API Configuration
const DEFAULT_API_BASE_URL = 'https://myhealthcaree.onrender.com';
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL).replace(/\/+$/, '');

export default API_BASE_URL;
