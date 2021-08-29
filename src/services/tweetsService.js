import axios from "axios";

const host = "https://railsjwtdevise.herokuapp.com/api/v1";

const apiClient = axios.create({
  baseURL: host,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getTweets = async (options = {}) => {
  const page = options.page || 1;
  const perPage = options.perPage || 20;
  const userId = options.userId;
  const route = userId
    ? `/users/${userId}/tweets?page=${page}&per_page=${perPage}`
    : `/tweets?page=${page}&per_page=${perPage}`;

  console.log(route);
  return (await apiClient.get(route)).data;
};
