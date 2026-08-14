import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://employee-management-system-v2-azure.vercel.app/api/',
  timeout: 30000,
  headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` },
});

export default instance;
