import { CardContainer } from "../../styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/Cart/thunks";

const CartItems = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <h3>{children.title}</h3>
      <img src={children.image} alt={children.title} />
      <h4>{children.price}</h4>
      <p>{children.description}</p>
      <Button onClick={() => dispatch(removeFromCartThunk(children))}>
        Remover
      </Button>
    </CardContainer>
  );
};

export default CartItems;
