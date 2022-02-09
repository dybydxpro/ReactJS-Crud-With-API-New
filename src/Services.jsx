import http from "./http-common";

class Service {
  getAll() {
    return http.get("/EmployeeApi");
  }

  get(id) {
    return http.get(`/EmployeeApi/${id}`);
  }

  create(data) {
    return http.post("/EmployeeApi", data);
  }

  update(data) {
    return http.put(`/EmployeeApi`, data);
  }

  delete(id) {
    return http.delete(`/EmployeeApi/${id}`);
  }
}

export default new Service();