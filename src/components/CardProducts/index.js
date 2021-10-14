import { CardContainer } from "../../styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/Cart/thunks";
const CardProducts = ({
  children: { description, id, image, price, title },
  children,
}) => {
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <h4>R$ {price}</h4>
      <p>{description}</p>
      <Button onClick={() => dispatch(addToCartThunk(children))}>
        Adicionar
      </Button>
    </CardContainer>
  );
};

export default CardProducts;
