import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_API_BASE;

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post(
    BASE_API_URL + "/api/users",
    user
  );
  return response.data;
};
export const getUsers = async () => {
  const response = await axiosWithCredentials.get(
    BASE_API_URL + "/api/users"
  );
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    BASE_API_URL + `/api/users/${user._id}`,
    user
  );
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axiosWithCredentials.delete(
    BASE_API_URL + `/api/users/${id}`
  );
  return response.data;
};

export const registerUser = async (user: any) => {
  const response = await axiosWithCredentials.post(
    BASE_API_URL + `/api/users/register`,
    user
  );
  return response.data;
};

export const loginUser = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    BASE_API_URL + `/api/users/login`,
    credentials
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(
    BASE_API_URL + `/api/users/profile`
  );
  return response.data;
};

export const logout = async () => {
  const response = await axiosWithCredentials.post(
    BASE_API_URL + `/api/users/logout`
  );
  return response.data;
};