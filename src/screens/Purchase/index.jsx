import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { emptyCart } from "../../../reducers/product";
import { updateCredit } from "../../../reducers/profile";
import { Container, Success, CustomLink } from "./styles";

function PurchaseScreen() {
  const productsCart = useSelector((state) => state.cart);
  const profileCart = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const total = productsCart.reduce(
    (total, { product }) => total + product.price,
    0
  );

  const isSuccess = profileCart.credit >= total;

  useEffect(() => {
    if (isSuccess) {
      console.table(productsCart.map((product) => product.product));
      dispatch(emptyCart());
      dispatch(updateCredit(total));
    }
  }, []);

  return (
    <Container>
      <h1>Estado de la Compra</h1>
      {isSuccess ? (
        <Success>
          <p>La compra se realizó con exito</p>
          <CustomLink to="/">
            <p>Volver al catálogo</p>
          </CustomLink>
        </Success>
      ) : (
        <Success>
          <p>
            Ocurrió un error con la compra, revisá que el importe no supere el
            crédito disponible en tu cuenta
          </p>
          <CustomLink to="/cart">
            <p>Volver al carrito</p>
          </CustomLink>
        </Success>
      )}
    </Container>
  );
}

export default PurchaseScreen;
