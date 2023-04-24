import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/users/everyone");
  }

  getUser(id) {
    return http.get("/users/everyone/" + id);
  }

  editUser(id, formData) {
    return http.put("/users/everyone/" + id, formData);
  }

  deleteUser(id) {
    return http.delete("/users/everyone/" + id);
  }

  register(data) {
    return http.post("/users/everyone", data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
