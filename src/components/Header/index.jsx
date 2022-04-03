import { Container, CustomLink, LeftContainer, RightContainer } from "./styles";
import { useSelector } from "react-redux";

export default function HeaderEnviopack() {
  const productsCart = useSelector((state) => state.cart);

  const profileCart = useSelector((state) => state.profile);

  return (
    <>
      <Container>
        <LeftContainer>
          <CustomLink to="/">
            <span>Tienda de Productos</span>
          </CustomLink>
        </LeftContainer>
        <RightContainer>
          <div className="link">{profileCart.firstName}</div>
          <div>
            <CustomLink to="/cart">Carrito ({productsCart.length})</CustomLink>
          </div>
          <div className="link">Credito ${profileCart.credit}</div>
        </RightContainer>
      </Container>
    </>
  );
}
