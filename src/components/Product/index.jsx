import { Container, ImgContainer, InfoContainer, AddToCart } from "./styles";
import prodimg from "../../../public/image-product.jpg";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../reducers/product";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard(product) {
  const [productAdded, setProductAdded] = useState(false);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const addProductToCart = () => {
    if (productAdded) {
      return navigateTo("/cart");
    }
    dispatch(addProduct(product));
    setProductAdded(true);
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
          {productAdded ? "Ver Carrito" : "Agregar al carrito"}
        </AddToCart>
      </Container>
    </>
  );
}
