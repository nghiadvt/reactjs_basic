// import axios from "axios";
import axios from "./customize-axios";

const fetchAllUser = (page) => {
  //call api
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
  return axios.post(`/api/user`, { name, job });
};

export { fetchAllUser, postCreateUser };
