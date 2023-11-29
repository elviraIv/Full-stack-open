import axios from "axios";
const baseUrl = "http://localhost:3000/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
const create = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request.then((response) => response.data);
};

const deleteContact = (id) => {
  const url = `${baseUrl}/${id}`;
  return axios.delete(url).then((response) => {
    console.log(`Deleted post with ID ${id}`);
  });
};

const update = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  deleteContact,
  update
};
