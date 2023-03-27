import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/users/everyone");
  }

  register(data) {
    return http.post("/users/everyone", data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
