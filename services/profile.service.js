import profile from "../mocks/profile.json";

class ProfileService {
  async getAll() {
    // return HTTP get("/product");
    // De esta manera se llamaria a la API de productos.
    return profile;
  }
}

export default new ProfileService();
