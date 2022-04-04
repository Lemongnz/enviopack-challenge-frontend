import { Container, ProductInfo } from "./styles";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../reducers/product";
import prodimg from "../../../public/image-product.jpg";

function CartProduct({ productCart }) {
  const dispatch = useDispatch();

  const onQuantityToZero = () => {
    dispatch(deleteProduct(productCart));
  };

  return (
    <Container>
      <div className="img">
        <img src={prodimg} />
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
