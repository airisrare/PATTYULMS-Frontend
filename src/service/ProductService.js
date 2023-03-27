import http from "../http-common";

class ProductService {
  getAll() {
    return http.get("/api/products");
  }

  postProduct(formData) {
    return http.post("/api/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
