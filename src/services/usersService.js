import axios from "axios";

const host = "https://railsjwtdevise.herokuapp.com";
const apiV1baseUrl = "https://railsjwtdevise.herokuapp.com/api/v1";
const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const apiClient = axios.create({
  baseURL: apiV1baseUrl,
  withCredentials: false,
  headers: defaultHeaders,
});

export const getUsers = async (options = {}) => {
  const page = options.page || 1;
  const perPage = options.perPage || 20;
  const route = `/users?page=${page}&per_page=${perPage}`;

  return (await apiClient.get(route)).data;
};

export const userLogin = async (email, password) => {
  const response = await axios({
    method: "post",
    url: host + "/login",
    headers: defaultHeaders,
    data: { user: { email, password } },
  });
  console.log(response);
  return response;
};
