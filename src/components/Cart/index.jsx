import { Container, TotalCartPrice, ButtonsCart, ButtonLink } from "./styles";
import CartProduct from "../../components/CartProduct";
import { useSelector } from "react-redux";

function Cart() {
  const productsCart = useSelector((state) => state.cart);

  return (
    <Container>
      {productsCart.map((product) => (
        <CartProduct key={product.id} productCart={product} />
      ))}
      <TotalCartPrice>
        <span>TOTAL</span>
        <strong>
          $
          {productsCart.reduce(
            (total, { product }) => total + product.price,
            0
          )}
        </strong>
      </TotalCartPrice>
      <ButtonsCart>
        <button>
          <ButtonLink to="/">Volver al catálogo</ButtonLink>
        </button>
        <button>
          <ButtonLink to="/purchase">Finalizar compra</ButtonLink>
        </button>
      </ButtonsCart>
    </Container>
  );
}

export default Cart;
