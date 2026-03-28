import axios from 'axios';

const BASE_URL = 'http://localhost:8080/todos';

export const getAllTodos = async () => {
  const response = await axios.get(BASE_URL);
  return response.data.data;
};

export const getTodoById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data.data;
};

export const createTodo = async (data) => {
  const response = await axios.post(BASE_URL, data);
  return response.data.data;
};

export const updateTodo = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/${id}`, data);
  return response.data.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
