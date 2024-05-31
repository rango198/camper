import axios from 'axios';
const BASE_URL = 'https://65c123aedc74300bce8d6244.mockapi.io/api/';

export const getData = async ({ endPoint }) => {
  const { data } = await axios.get(`${BASE_URL}${endPoint}`);
  return data;
};

export const favorite = async ({ endPoint, params }) => {
  const { _id, ...updateData } = params;
  const { data } = await axios.put(`${BASE_URL}${endPoint}/${_id}`, updateData);
  return data;
};
