import { Container, ImgContainer, InfoContainer, AddToCart } from "./styles";
import prodimg from "../../../public/image-product.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../reducers/product";
import { useNavigate } from "react-router-dom";

export default function ProductCard(product) {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const idAdded = useSelector((state) =>
    state.cart.some((productCart) => productCart.product.id === product.id)
  );

  const addProductToCart = () => {
    idAdded ? navigateTo("/cart") : dispatch(addProduct(product));
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
        <AddToCart onClick={addProductToCart}>
          {idAdded ? "Ver Carrito" : "Agregar al carrito"}
        </AddToCart>
      </Container>
    </>
  );
}
