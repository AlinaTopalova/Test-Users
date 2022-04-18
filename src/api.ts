import axios from 'axios';
import { ApiRoute } from 'constants/constants';
import { UserType } from 'types/types';

export const API_URL = 'https://jsonplaceholder.typicode.com';

const timeout = 10000;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: timeout,
});

export const fetchUsers = async() => {
  const { data } = await axiosInstance.get<UserType[]>(ApiRoute.Main);
  return data;
}

export const fetchUser = async(userId: string) => {
  const { data } = await axiosInstance.get(`${ApiRoute.Main}/${userId}`);
  return data;
}
