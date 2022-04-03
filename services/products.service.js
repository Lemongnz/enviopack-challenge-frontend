import product from "../mocks/products.json";

class ProductsService {
  async getAll() {
    // return HTTP get("/product");
    // De esta manera se llamaria a la API de productos.
    return product;
  }
}

export default new ProductsService();
