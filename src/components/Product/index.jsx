import { Container, ImgContainer, InfoContainer, AddToCart } from "./styles";
import prodimg from "../../../public/image-product.jpg";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../reducers/product";

export default function ProductCard(product) {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <>
      <Container>
        <ImgContainer>
          <img src={prodimg} />
        </ImgContainer>
        <InfoContainer>
          <p>{product.title}</p>
          <span>${product.price}</span>
        </InfoContainer>
        <AddToCart onClick={addProductToCart}>Agregar al carrito</AddToCart>
      </Container>
    </>
  );
}
