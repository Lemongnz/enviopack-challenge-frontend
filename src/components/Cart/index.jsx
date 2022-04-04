import { Container, TotalCartPrice, ButtonsCart, ButtonLink } from "./styles";
import CartProduct from "../../components/CartProduct";
import { useSelector } from "react-redux";

function Cart() {
  const productsCart = useSelector((state) => state.cart);

  return (
    <Container>
      {productsCart.length > 0 ? (
        <>
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
        </>
      ) : (
        <>
          <div className="emptyCart">
            <h2>No hay productos en el carrito</h2>
          </div>
          <ButtonsCart>
            <button>
              <ButtonLink to="/">Volver al catálogo</ButtonLink>
            </button>
          </ButtonsCart>
        </>
      )}
    </Container>
  );
}

export default Cart;
