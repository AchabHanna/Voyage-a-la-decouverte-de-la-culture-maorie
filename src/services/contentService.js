import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
<<<<<<< Updated upstream
  //   getArticles() {
  //     return apiClient.get("/articles");
  //   },
=======
  getArticles() {
    return apiClient.get("/articles");
  },
>>>>>>> Stashed changes
  getArticle(id) {
    return apiClient.get("/article/" + id);
  }
};
