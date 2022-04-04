import { useEffect, useState } from "react";
import { Container } from "./styles";
import productsService from "../../../services/products.service";
import CustomDropDown from "../../components/CustomDropDown";
import ProductsList from "../../components/ProductList";
import SearchProduct from "../../components/SearchProduct";
import PaginateContainer from "../../components/ReactPaginate";

export default function CatalogueScreen() {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [sortBy, setSortBy] = useState("price");
  const [queryString, setQueryString] = useState(null);

  const PRODUCTS_PER_PAGE = 6;

  const sliceProducts = (productsToSlice) => {
    setCurrentProducts(productsToSlice.slice(0, PRODUCTS_PER_PAGE));
  };

  useEffect(() => {
    const endOffset = itemOffset + PRODUCTS_PER_PAGE;

    setPageCount(Math.ceil(products.length / PRODUCTS_PER_PAGE));
    setCurrentProducts(products.slice(itemOffset, endOffset));
  }, [itemOffset, PRODUCTS_PER_PAGE, products]);

  useEffect(async () => {
    const { productos } = await productsService.getAll();
    setProducts(productos);
  }, []);

  useEffect(() => {
    setCurrentProducts(products.slice(0, PRODUCTS_PER_PAGE));
  }, [products]);

  useEffect(() => {
    // Se unieron ambos use effects para realizar la busqueda de productos y el filtro al mismo tiempo
    let filteredProducts = products;

    if (queryString) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(queryString.toLowerCase())
      );
    }

    if (sortBy == "less") {
      // ordenar de menor a mayor
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy == "more") {
      // ordenar de mayor a menor
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    sliceProducts([...filteredProducts]);
  }, [sortBy, queryString]);

  return (
    <Container>
      <h1>Catálogo</h1>
      <div className="sort">
        <SearchProduct onChangeQuery={setQueryString} />
        <div className="custom-drop-down">
          <p>ORDENAR POR</p>
          <CustomDropDown onChangeSort={setSortBy} />
        </div>
      </div>
      <div>
        {currentProducts !== null ? (
          <>
            <ProductsList products={currentProducts} />
            <PaginateContainer
              pageCount={pageCount}
              productsPerPage={PRODUCTS_PER_PAGE}
              products={products}
              setItemOffset={setItemOffset}
            />
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </Container>
  );
}
