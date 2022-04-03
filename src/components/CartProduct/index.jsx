import { Container, ProductInfo } from "./styles";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../reducers/product";

function CartProduct({ productCart }) {
  const dispatch = useDispatch();

  const onQuantityToZero = () => {
    dispatch(deleteProduct(productCart));
  };

  return (
    <Container>
      <div className="img">
        <img src="../../public/image-product.jpg" />
      </div>
      <ProductInfo>
        <p>{productCart.product.title}</p>
        <div className="price">
          <p>${productCart.product.price}</p>
          <button onClick={onQuantityToZero}>
            <FaWindowClose />
          </button>
        </div>
      </ProductInfo>
    </Container>
  );
}

export default CartProduct;
