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

export const getTweets = async (userId = null) =>
  userId
    ? await apiClient.get(`/users/${userId}/tweets`)
    : await apiClient.get("/tweets");
