import { useSelector } from "react-redux";
import CartItems from "../../components/CartItems";
import { HomeContainer, HeaderCart } from "../../styles";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (acc, currentValue) => acc + currentValue.price,
    0
  );
  return (
    <div>
      <HeaderCart>
        <h2> Total dos itens adicionados </h2>
        <h3>R$ {Number(totalPrice).toFixed(2)}</h3>
        <ul>
          {cart.map((item, id) => (
            <li>
              {item.title} / R$ {item.price}
            </li>
          ))}
        </ul>
      </HeaderCart>
      <HomeContainer>
        {cart.length === 0 ? (
          <h1>Seu carrinho esta vazio</h1>
        ) : (
          cart.map((item) => <CartItems key={item.id}>{item}</CartItems>)
        )}
      </HomeContainer>
    </div>
  );
};

export default Cart;
